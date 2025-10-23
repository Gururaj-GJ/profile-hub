export type Project = { title: string; description: string; tags: string[]; link: string; };

export const projects: Project[] = [
  {
    title: "Cancer AI – Survival Predictor",
    description: "ML pipeline with 92% accuracy; OCR data extraction, time-zero precision, and survival vs QoL analysis.",
    tags: ["Python","scikit-learn","Pandas"],
    link: "https://github.com/Gururaj-GJ",
  },
  {
    title: "Profile Hub (this site)",
    description: "Resume + portfolio built with Next.js and Tailwind. Deployed on Vercel with CI from GitHub.",
    tags: ["Next.js","Tailwind","Vercel"],
    link: "https://github.com/Gururaj-GJ/profile-hub",
  },
  {
    title: "Jarvis-like PC Assistant",
    description: "Voice interface, app control, weather integration, and changelog automation.",
    tags: ["Python","TTS/STT","OpenAI API"],
    link: "https://github.com/Gururaj-GJ",
  },
];
