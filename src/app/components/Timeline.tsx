"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  company: string;
  logo?: string;
  title: string;
  duration: string;
  achievement: string;
}

const timelineData: TimelineItem[] = [
  {
    company: "Fintellix India Pvt Ltd",
    title: "Senior Analyst - G2 Risk Solutions",
    duration: "Feb 2024 - Aug 2025",
    achievement: "Architected SharePoint-based global investigation repository, reducing case processing time by 10-15 minutes per analyst"
  },
  {
    company: "Amazon Development Centre India",
    title: "Risk Specialist I",
    duration: "Aug 2022 - May 2023",
    achievement: "Conducted comprehensive fraud investigations on AWS accounts, preventing significant fraudulent usage"
  },
  {
    company: "Accenture (Google)",
    title: "Transaction Processing Associate",
    duration: "Mar 2021 - Aug 2022",
    achievement: "Designed Google Sites knowledge hub consolidating SOPs, improving operational transparency for 100+ analysts"
  },
  {
    company: "TeamLease Services (Flipkart)",
    title: "Executive Risk & Compliance",
    duration: "Aug 2018 - Mar 2021",
    achievement: "Executed buyer-side fraud detection, analyzing bulk transaction datasets to identify fraud rings"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Professional Journey
        </motion.h2>

        <div className="relative overflow-x-auto pb-8">
          <div className="flex gap-8 min-w-max px-4">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 w-80 flex-shrink-0"
              >
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {item.duration}
                </div>

                <div className="mt-4 mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {item.company}
                  </p>
                </div>

                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4"></div>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Scroll horizontally to view full timeline →
          </p>
        </div>
      </div>
    </section>
  );
}
