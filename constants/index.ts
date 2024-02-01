import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "GraphQL",
    Image: "/graphql.png",
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    Image: "/bootstrap.png",
    width: 80,
    height: 80,
  },
  // {
  //   name: "Node js",
  //   Image: "/node-js.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: "Mongo db",
  //   Image: "/mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
];

export const Socials = [
  {
    name: "Github",
    src: "/github.svg",
    link: "https://github.com/Natasha-eng",
  },
  {
    name: "Telegram",
    src: "/telegram.svg",
    link: "https://t.me/NataShilova",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    link: "https://linkedin.com/in/natasha-shilova",
  },
];
export const Projects = [
  {
    title: "Share Events Nextjs App",
    text: "Stack: React 18, next 14, next-auth(implemented sign in, sign up and sign out features with credentials), image upload with uploadthing. Application allows create, announce and share important events.",
    src: "/events.jpg",
    demo: "https://share-prompts-chi-seven.vercel.app/",
    repo: "https://github.com/Natasha-eng/share_prompts",
  },

  {
    title: "Admin Nextjs App",
    text: "Stack: React 18, next 14, next-auth(implemented sign in feature with credentials), image upload, implemented chart using Recharts library. Application is an admin dashboard which helps to manage users and their roles.",
    src: "/videos.webp",
    demo: "https://admin-app-one.vercel.app",
    repo: "https://github.com/Natasha-eng/admin_app",
  },
  {
    title: "Art Works React Project",
    text: "React application. Implemented base features such as filtering, searching, pagination.",
    src: "/arts.jpg",
    demo: "https://deluxe-panda-ba4e31.netlify.app",
    repo: "https://github.com/Natasha-eng/imagine-project",
  },
  {
    title: "Discover Coffee Store Next.js App",
    text: "Stack: React 17, next 12. Application allowes to search coffee stores nearby you.",
    src: "/discovery-coffee.jpg",
    demo: "https://discover-coffee-stores-khaki.vercel.app/",
    repo: "https://github.com/Natasha-eng/discover-coffee-stores",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  // {
  //   name: "/contact-me",
  //   icon: RxClipboard,
  //   link: "/contact-me",
  // },
];
