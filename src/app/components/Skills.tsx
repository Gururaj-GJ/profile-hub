const items = [
  "Fraud Risk Management",
  "AML/KYC Compliance",
  "Transaction Monitoring",
  "Merchant Risk Analysis",
  "Payment Fraud Prevention",
  "Chargeback Management",
  "Regulatory Compliance",
  "PCI DSS Awareness",
  "Financial Crime Risk Management",
  "SQL Query Development",
  "Microsoft Excel (Advanced)",
  "SharePoint Administration",
  "Google Data Studio",
  "Process Automation (Macros, Apps Script)",
  "AI Prompt Engineering",
  "Cross-functional Collaboration",
  "Law Enforcement Coordination",
  "Process Improvement",
  "Training & Knowledge Transfer",
  "Stakeholder Management",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        {items.map(s => <li key={s} className="rounded-xl border px-3 py-2">{s}</li>)}
      </ul>
    </section>
  );
}
