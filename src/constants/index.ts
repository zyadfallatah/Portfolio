export const hardSkills: { name: string; icon: string }[] = [
  { name: "React", icon: "/assets/react.svg" },
  { name: "Tailwind", icon: "/assets/tailwindcss.svg" },
  { name: "Postgres", icon: "/assets/postgres.svg" },
  { name: "Typescript", icon: "/assets/ts-logo.svg" },
  { name: "Flutter", icon: "/assets/flutter.svg" },
  { name: "AWS", icon: "/assets/ts-logo.svg" },
  { name: "Docker", icon: "/assets/ts-logo.svg" },
  { name: "Node", icon: "/assets/ts-logo.svg" },
  { name: "MongoDB", icon: "/assets/Mongodb.svg" },
];

export const softSkills: { name: string; icon?: string }[] = [
  { name: "إدارة الوقت" },
  { name: "المرونة" },
  { name: "حل المشاكل" },
  { name: "الاهتمام بالتفاصيل" },
  { name: "العمل مع فريق" },
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
    description: `
      تطوير تطبيقات الجوال باستخدام flutter و العمل على التصاميم و تحويلها لتطبيقات فعالة
      ، التعامل مع قواعد البيانات و ربطها مع الواجهات.
      `,
  },
];
