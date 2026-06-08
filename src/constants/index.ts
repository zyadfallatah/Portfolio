export const hardSkills: { name: string; icon: string }[] = [
  { name: "React", icon: "/assets/react.svg" },
  { name: "Tailwind", icon: "/assets/tailwindcss.svg" },
  { name: "Postgres", icon: "/assets/postgres.svg" },
  { name: "Typescript", icon: "/assets/ts-logo.svg" },
  { name: "Docker", icon: "/assets/docker.svg" },
  { name: "Node", icon: "/assets/node.svg" },
  { name: "Redis", icon: "/assets/redis.svg" },
  { name: "Socket.io", icon: "/assets/socketio.svg" },
  { name: "MongoDB", icon: "/assets/Mongodb.svg" },
];

export const skillCategories: {
  labelAr: string;
  labelEn: string;
  skills: { name: string; icon: string }[];
}[] = [
  {
    labelAr: "الواجهة الأمامية",
    labelEn: "Frontend",
    skills: [
      { name: "React", icon: "/assets/react.svg" },
      { name: "Tailwind", icon: "/assets/tailwindcss.svg" },
      { name: "Typescript", icon: "/assets/ts-logo.svg" },
    ],
  },
  {
    labelAr: "الخادم",
    labelEn: "Backend",
    skills: [
      { name: "Node", icon: "/assets/node.svg" },
      { name: "Postgres", icon: "/assets/postgres.svg" },
      { name: "MongoDB", icon: "/assets/Mongodb.svg" },
      { name: "Redis", icon: "/assets/redis.svg" },
      { name: "Socket.io", icon: "/assets/socketio.svg" },
    ],
  },
  {
    labelAr: "البنية التحتية",
    labelEn: "DevOps",
    skills: [
      { name: "Docker", icon: "/assets/docker.svg" },
    ],
  },
];

export const experinces: {
  company: string;
  durationInMonths: number;
  type: "intern";
  description: string;
}[] = [
  {
    company: "جمعية عون التقنية",
    durationInMonths: 4,
    type: "intern",
    description: `٦٠٧ ساعة عمل عملي تغطي دورة تطوير البرمجيات كاملةً — تحويل تصاميم Figma إلى واجهات إنتاجية، وبناء واجهة API لمنصة إدارة المحتوى، وتسليم تطبيق للمستخدمين الفعليين.`,
  },
];
