// Profile.tsx — drop into a Next.js project (app/page.tsx or pages/index.tsx)
// TailwindCSS required. Content is VERBATIM per instruction.

export default function Profile() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3" aria-label="Primary">
          <a href="#top" className="text-sm font-semibold tracking-wide text-[#0A2540]">GURURAJ GJ</a>
          <ul className="hidden gap-6 md:flex">
            {["about","skills","experience","projects","education","career","contact"].map(id => (
              <li key={id}><a className="text-sm text-gray-700 hover:text-[#0A2540]" href={`#${id}`}>{id[0].toUpperCase()+id.slice(1)}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" className="rounded-xl bg-[#0A2540] px-4 py-2 text-sm font-medium text-white hover:opacity-90">Download Resume (PDF)</a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4">
        {/* Hero */}
        <section className="py-14">
          <p className="text-sm tracking-wide text-gray-500">Hello, I’m</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight text-[#0A2540]">GURURAJ GJ</h1>
          <p className="mt-2 text-base text-gray-600">Bengaluru, Karnataka, India</p>
          <div className="mt-3 text-sm text-gray-700">
            <p>Email: <a className="underline decoration-gray-300 hover:text-[#0A2540]" href="mailto:gururaj.gj.guru@gmail.com">gururaj.gj.guru@gmail.com</a> | Phone: <a className="hover:text-[#0A2540]" href="tel:+918971599238">+91 89715 99238</a></p>
            <p>LinkedIn: <a className="underline decoration-gray-300 hover:text-[#0A2540]" href="https://linkedin.com/in/gururaj-gj-52a062b4" target="_blank">linkedin.com/in/gururaj-gj-52a062b4</a></p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="rounded-xl bg-[#0A2540] px-5 py-3 text-sm font-medium text-white hover:opacity-90">Download Resume (PDF)</a>
            <a href="mailto:gururaj.gj.guru@gmail.com" className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-[#0A2540] hover:bg-gray-50">Contact Me</a>
            <a href="https://linkedin.com/in/gururaj-gj-52a062b4" target="_blank" className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-[#0A2540] hover:bg-gray-50">LinkedIn</a>
          </div>
        </section>

        {/* About (Professional Summary) */}
        <section id="about" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">PROFESSIONAL SUMMARY</h2>
          <div className="mt-4 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="whitespace-pre-line leading-relaxed text-gray-800">
{`Results-driven Fraud & Risk Specialist with 6 years and 5 months of progressive
experience in fraud detection, compliance, and risk investigations across e-commerce,
fintech, payments, and cloud services. Demonstrated expertise in AML, KYC, Transaction
Monitoring, and Merchant Risk Management. Proven track record of designing
automation solutions, developing AI-powered investigation tools, and building
knowledge management systems that enhanced team productivity and prevented
significant financial losses. Recognized by senior leadership for innovation and process
improvement initiatives. Seeking challenging opportunities in fraud prevention,
compliance, and risk management in India and globally.`}
            </p>
          </div>
        </section>

        {/* Skills & Competencies */}
        <section id="skills" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">CORE COMPETENCIES</h2>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Fraud &amp; Risk Management:</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Fraud Detection & Investigation",
                "Transaction Monitoring",
                "Merchant Risk Analysis",
                "Payment Fraud Prevention",
                "Chargeback Management"
              ].map(s => <span key={s} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-800">{s}</span>)}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Compliance &amp; Regulatory:</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "AML/KYC Compliance",
                "Regulatory Compliance",
                "PCI DSS Awareness",
                "Financial Crime Risk Management"
              ].map(s => <span key={s} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-800">{s}</span>)}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Technical Skills:</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "SQL Query Development",
                "Microsoft Excel (Advanced)",
                "SharePoint Administration",
                "Google Data Studio",
                "Process Automation (Macros, Apps Script)",
                "AI Prompt Engineering"
              ].map(s => <span key={s} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-800">{s}</span>)}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600">Business Skills:</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Cross-functional Collaboration",
                "Law Enforcement Coordination",
                "Process Improvement",
                "Training & Knowledge Transfer",
                "Stakeholder Management"
              ].map(s => <span key={s} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-800">{s}</span>)}
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <a className="underline decoration-gray-300 hover:text-[#0A2540]" href="https://www.linkedin.com/in/gururaj-gj-52a062b4" target="_blank">
              https://www.linkedin.com/in/gururaj-gj-52a062b4
            </a>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">PROFESSIONAL EXPERIENCE</h2>

          {/* Fintellix */}
          <article className="mt-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0A2540]">Senior Analyst – Client: G2 Risk Solutions</h3>
            <p className="text-sm text-gray-600">Fintellix India Pvt Ltd</p>
            <p className="mt-1 text-sm text-gray-600">02/2024 – 08/2025 • Bengaluru, India</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-800">
              <li>Investigated high-risk merchant websites across pharma, gambling, counterfeit goods, IPTV, cyberlockers, weapons, deepfake, and escort services accepting payments via major card networks (Visa, MasterCard, Amex, Discover) and digital wallets (PayPal, JCB)</li>
              <li>Identified and documented sophisticated fraud patterns including redirected checkout flows, deceptive billing descriptors, stolen card data exploitation, and tainted nutraceutical sales (Royal Honey, La Paix containing undisclosed sildenafil/tadalafil)</li>
              <li>Architected and deployed SharePoint-based global investigation repository linking PayPal merchant IDs with evidence documentation, reducing case processing time by 10-15 minutes per analyst and eliminating duplicate investigations</li>
              <li>Developed AI-powered investigation prompts that accelerated website assessment workflows, reducing investigation turnaround time from weeks to minutes and significantly improving team productivity</li>
              <li>Publicly recognized by Director Niamh Lewis in Quarterly Business Updates for innovation in process automation and knowledge management solutions</li>
              <li>Collaborated with cross-regional teams (India, US, EU) to standardize investigation methodologies, eliminate redundant work, and centralize institutional knowledge</li>
            </ul>
          </article>

          {/* Amazon */}
          <article className="mt-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0A2540]">Sr. Investigation Specialist → Risk Specialist I</h3>
            <p className="text-sm text-gray-600">Amazon Development Centre (India) Pvt Ltd</p>
            <p className="mt-1 text-sm text-gray-600">08/2022 – 05/2023 • Bengaluru, India</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-800">
              <li>Conducted comprehensive fraud investigations on AWS accounts involving payment abuse, identity fraud, and suspicious high-value transactions</li>
              <li>Executed deep-dive analysis on suspicious accounts leveraging SQL queries, advanced Excel analytics, and proprietary fraud detection tools</li>
              <li>Prevented significant fraudulent usage of AWS cloud resources through proactive detection and timely intervention, substantially reducing revenue leakage</li>
              <li>Promoted to Risk Specialist I in recognition of consistently high-quality investigations, attention to detail, and adherence to compliance standards</li>
            </ul>
          </article>

          {/* Accenture */}
          <article className="mt-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0A2540]">Transaction Processing Associate</h3>
            <p className="text-sm text-gray-600">Accenture (Client: Google)</p>
            <p className="mt-1 text-sm text-gray-600">03/2021 – 08/2022 • Bengaluru, India</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-800">
              <li>Investigated Google Play gift card abuse schemes involving black money conversion, money laundering operations, and organized fraud rings</li>
              <li>Identified complex fraud indicators including proxy server usage, cross-border account manipulation, device-sharing patterns, and suspicious inactive-to-active account transitions</li>
              <li>Designed and launched Google Sites knowledge hub consolidating SOPs, investigation tools, and escalation protocols, streamlining onboarding and improving operational transparency for 100+ analysts</li>
              <li>Built Google Data Studio performance scorecards providing real-time visibility into team metrics, individual productivity, and quality benchmarks</li>
              <li>Automated repetitive daily workflows using Excel Macros and Google Apps Script, saving hundreds of analyst hours monthly and reducing manual errors</li>
              <li>Collaborated with international teams to ensure strict adherence to AML/KYC regulatory requirements and company compliance policies</li>
            </ul>
          </article>

          {/* Flipkart via TeamLease */}
          <article className="mt-6 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0A2540]">Executive – Risk & Compliance</h3>
            <p className="text-sm text-gray-600">TeamLease Services Ltd (Deputed to Flipkart Internet Pvt Ltd)</p>
            <p className="mt-1 text-sm text-gray-600">08/2018 – 03/2021 • Bengaluru, India</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-800">
              <li>Executed buyer-side fraud detection and prevention for e-commerce transactions (domestic and international) across multiple payment methods including credit/debit cards, UPI, and net banking</li>
              <li>Analyzed and cancelled fraudulent orders pre-delivery through real-time transaction monitoring, preventing high-value financial losses and protecting customer data</li>
              <li>Managed escalation communications with banks and cybercrime authorities, ensuring timely incident response, investigation support, and customer refund processing</li>
              <li>Coordinated with delivery personnel and law enforcement to conduct joint sting operations, successfully apprehending fraudsters during delivery attempts</li>
              <li>Analyzed bulk transaction datasets to identify fraud rings and emerging patterns (CVV testing, card enumeration, gibberish identities, fake addresses, disposable email domains)</li>
              <li>Delivered actionable fraud trend reports to operations team enabling proactive blocking of fraudulent accounts and payment sources</li>
            </ul>
          </article>
        </section>

        {/* Projects & Key Achievements */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">KEY ACHIEVEMENTS & PROJECTS</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              "SharePoint Global Repository (Fintellix): Designed centralized investigation database linking PayPal merchant identifiers with evidence artifacts, saving 15+ analyst hours weekly and eliminating duplicate investigations",
              "AI Investigation Accelerator (Fintellix): Developed AI prompt framework that reduced website investigation cycle time from weeks to minutes, dramatically improving case closure rates",
              "Joint Law Enforcement Operations (Flipkart): Successfully partnered with police and delivery teams to conduct coordinated sting operations, resulting in apprehension of active fraudsters",
              "Google Play Fraud Knowledge Hub (Accenture): Built comprehensive SOP repository and performance dashboards serving 100+ analysts, improving onboarding efficiency and operational consistency",
              "Leadership Recognition: Publicly acknowledged by Director Niamh Lewis in Quarterly Business Updates for innovative contributions to process automation and knowledge management"
            ].map(text => (
              <div key={text} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-800 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">EDUCATION</h2>
          <div className="mt-4 rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
{`Master of Business Administration (MBA)
Presidency College, Bangalore University
Specialization: Marketing & Human Resources

2015 – 2017`}
            </p>
          </div>
        </section>

        {/* Career Objectives */}
        <section id="career" className="py-12">
          <h2 className="text-2xl font-semibold text-[#0A2540]">CAREER OBJECTIVES</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <p className="font-medium text-gray-900">Target Roles:</p>
              <p className="mt-2 text-gray-800 leading-relaxed">
                Fraud &amp; Risk Specialist | Compliance Specialist | AML/KYC Analyst | Transaction
                Monitoring Analyst | Risk Analyst | Merchant Risk Investigator | Financial Crime
