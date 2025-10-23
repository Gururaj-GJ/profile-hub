"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Fraud Risk Management", color: "from-red-500 to-orange-500" },
  { name: "AML/KYC Compliance", color: "from-blue-500 to-cyan-500" },
  { name: "Transaction Monitoring", color: "from-purple-500 to-pink-500" },
  { name: "Merchant Risk Analysis", color: "from-green-500 to-emerald-500" },
  { name: "Payment Fraud Prevention", color: "from-yellow-500 to-amber-500" },
  { name: "Chargeback Management", color: "from-indigo-500 to-blue-500" },
  { name: "Regulatory Compliance", color: "from-teal-500 to-cyan-500" },
  { name: "PCI DSS Awareness", color: "from-rose-500 to-pink-500" },
  { name: "SQL Query Development", color: "from-violet-500 to-purple-500" },
  { name: "Microsoft Excel (Advanced)", color: "from-green-500 to-teal-500" },
  { name: "SharePoint Administration", color: "from-blue-500 to-indigo-500" },
  { name: "Google Data Studio", color: "from-orange-500 to-red-500" },
  { name: "Process Automation", color: "from-cyan-500 to-blue-500" },
  { name: "AI Prompt Engineering", color: "from-pink-500 to-rose-500" },
  { name: "Cross-functional Collaboration", color: "from-amber-500 to-orange-500" },
  { name: "Law Enforcement Coordination", color: "from-indigo-500 to-purple-500" },
  { name: "Process Improvement", color: "from-emerald-500 to-green-500" },
  { name: "Training & Knowledge Transfer", color: "from-blue-500 to-cyan-500" },
  { name: "Stakeholder Management", color: "from-purple-500 to-indigo-500" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-wrap gap-4 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
