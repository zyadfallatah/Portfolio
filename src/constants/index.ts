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
    url: "/media/mulabbi",
    imagesUrl: [
      {
        name: "الدخول",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-1.png?updatedAt=1754202689501",
      },
      {
        name: "التتبع",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-2.png?updatedAt=1754202562350",
      },
      {
        name: "الرئيسية",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-3.png?updatedAt=1754202625061",
      },
      {
        name: "زاد",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-4.png?updatedAt=1754202689714",
      },
      {
        name: "القبلة",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-5.png?updatedAt=1754202689637",
      },
    ],
    videosUrls: [
      {
        name: "الصفحة الرئيسية",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-video-1.mov",
      },
      {
        name: "الخريطة",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-video-2.mov",
      },
      {
        name: "صفحة زاد",
        url: "https://ik.imagekit.io/zyadfallatah/mulabbi-video-3.mov",
      },
    ],
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
    url: "https://devflow-six-tawny.vercel.app/",
  },
];

export const hardSkills: { name: string; icon: string }[] = [
  { name: "React", icon: "/assets/react.svg" },
  { name: "Tailwind", icon: "/assets/tailwindcss.svg" },
  { name: "Postgres", icon: "/assets/postgres.svg" },
  { name: "Typescript", icon: "/assets/ts-logo.svg" },
  { name: "Flutter", icon: "/assets/flutter.svg" },
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
