/* Gururaj G J — portfolio interactions */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("gj-theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);
  var themeBtn = $("#themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("gj-theme", next); } catch (e) {}
    });
  }

  /* ---------- mobile menu ---------- */
  var burger = $("#navToggle"), links = $("#navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () { links.classList.toggle("open"); });
    $$("a", links).forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- scroll progress, nav state, back-to-top ---------- */
  var bar = $("#progress"), nav = $("#nav"), top = $("#toTop");
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (bar) bar.style.width = pct + "%";
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    if (top) top.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- active nav link ---------- */
  var sections = $$("section[id]");
  var navAnchors = $$(".nav-links a");
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- reveal on scroll ---------- */
  var revealables = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en, i) {
        if (en.isIntersecting) {
          var el = en.target;
          var delay = Math.min(i * 60, 240);
          setTimeout(function () { el.classList.add("is-visible"); }, delay);
          io.unobserve(el);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- animated counters ---------- */
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = null, done = false;
    setTimeout(function () { if (!done) el.textContent = target + suffix; }, dur + 250);
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else { done = true; el.textContent = target + suffix; }
    }
    requestAnimationFrame(step);
  }
  var counters = $$("[data-count]");
  if ("IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { runCounter(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { co.observe(c); });
  } else {
    counters.forEach(function (c) { c.textContent = c.getAttribute("data-count") + (c.getAttribute("data-suffix") || ""); });
  }

  /* ---------- role rotator ---------- */
  var roles = ["Fraud Investigation", "Transaction Laundering", "Merchant Risk", "AML / KYC", "Trust & Safety", "Fraud Intelligence Engineering"];
  var rot = $("#roleRotator");
  if (rot) {
    var i = 0;
    rot.textContent = roles[0];
    setInterval(function () {
      rot.classList.add("out");
      setTimeout(function () {
        i = (i + 1) % roles.length;
        rot.textContent = roles[i];
        rot.classList.remove("out");
      }, 360);
    }, 2600);
  }

  /* ---------- marquee ---------- */
  var skills = ["Transaction Laundering", "Merchant Risk", "AML / CFT", "KYC · CDD · EDD", "Sanctions & PEP Screening",
    "Account Takeover", "Chargeback Management", "Card-Scheme Compliance", "Payment Fraud", "Trust & Safety",
    "OSINT", "Explainable Decisioning", "Python · SQL · FastAPI", "Device Risk"];
  var track = $("#marqueeTrack");
  if (track) {
    var html = skills.map(function (s) { return "<span>" + s + "</span>"; }).join("");
    track.innerHTML = html + html;
  }

  /* ---------- project filters ---------- */
  var filters = $$(".filter");
  var cards = $$(".project-card");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var want = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = want === "all" || card.getAttribute("data-cat") === want;
        card.classList.toggle("hidden", !show);
        if (show) {
          card.classList.remove("is-visible");
          void card.offsetWidth;
          card.classList.add("is-visible");
        }
      });
    });
  });

  /* ---------- subtle pointer glow on glass cards ---------- */
  if (window.matchMedia("(hover: hover)").matches) {
    $$(".glass, .project-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      });
    });
  }
})();
