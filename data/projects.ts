export interface Project {
  title: string;
  category: string;
  description: string;
  problemSolved: string;
  role: string;
  tools: string[];
  link?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "Smart Groceries",
    category: "Product Design · UX/UI",
    description:
      "A grocery planning and budgeting experience designed to help people plan purchases, manage spending, and shop with more confidence.",
    problemSolved:
      "Grocery shopping can become difficult to manage when people have to keep track of budgets, shopping lists, and previous purchases separately. Smart Groceries brings these tasks together into one focused experience.",
    role: "UX Research · UI Design · Prototyping",
    tools: ["Figma", "FigJam"],
    link: "/projects/smart-groceries",
    images: [
      "/projects/smart-groceries/hero.webp",
      "/projects/smart-groceries/dashboard.webp",
    ],
  },

  {
    title: "Fashion",
    category: "Visual Design · E-commerce",
    description:
      "An editorial fashion shopping experience built around strong typography, visual storytelling, and a refined product presentation.",
    problemSolved:
      "Fashion interfaces often rely heavily on conventional product grids. This concept explores how editorial layouts and visual hierarchy can create a more engaging shopping experience.",
    role: "Visual Design · UI Design",
    tools: ["Figma"],
    link: "/projects/fashion",
    images: ["/projects/fashion/hero.webp", "/projects/fashion/product.webp"],
  },

  {
    title: "CodeKart",
    category: "Web Design · Product UI",
    description:
      "A platform concept for discovering and purchasing ready-made codebases, designed to make browsing technical products feel simple and approachable.",
    problemSolved:
      "Developers looking for starter projects often have to search through scattered repositories and resources. CodeKart explores a more structured way to discover, evaluate, and purchase reusable codebases.",
    role: "UX/UI Design · Interaction Design",
    tools: ["Figma"],
    link: "/projects/codekart",
    images: [
      "/projects/codekart/hero.webp",
      "/projects/codekart/how-it-works.webp",
    ],
  },
];
