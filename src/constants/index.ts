export const projects: Project[] = [
  {
    linkName: "mulabbi",
    title: "ملبي",
    shortDescription: `تطبيق يرشد الحاج أو المعتمر\nلأداء مناسكه خطوة بخطوة`,
    longDescription: `
تطبيق يساعد الحاج أو المعتمر في أداء مناسكه بكل يسر و سهولة ، 
  يركز في تسهيل تجربة المستخدم ، المتابعة بخريطة تفاعلية بسيطة و 
  توفير جميع المستلزمات من أذكار و قرآن في مكان واحد.`,
    technologies: [
      { name: "flutter", icon: "/assets/flutter.svg" },
      { name: "supabase", icon: "/assets/Supabase.svg" },
    ],
    metadata: ["المنصة: تطبيق جوال "],
    tags: ["عمل جماعي", "إسلامي", "إرشادي"],
    bannar: "/images/mulabbi-banner.svg",
  },
  {
    linkName: "devflow",
    title: "DevFlow",
    shortDescription: `موقع تواصل و أسئلة 
بين المطورين`,
    technologies: [
      { name: "React", icon: "/assets/react.svg" },
      { name: "Tailwind", icon: "/assets/tailwindcss.svg" },
      { name: "MongoDB", icon: "/assets/Mongodb.svg" },
    ],
    metadata: ["المنصة: تطبيق ويب "],
    bannar: "/images/devflow-banner.svg",
  },
];

export const hardSkills: { name: string; icon: string }[] = [
  { name: "react", icon: "/assets/react.svg" },
  { name: "react", icon: "/assets/react.svg" },
  { name: "react", icon: "/assets/react.svg" },
];

export const softSkills: { name: string; icon?: string }[] = [
  { name: "react" },
  { name: "react", icon: "/assets/react.svg" },
];
