export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Vue.js", level: 4 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "HTML5/CSS3", level: 5 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "NestJS", level: 3 },
      { name: "RESTful APIs", level: 5 }
    ]
  },
  {
    category: "State Management",
    skills: [
      { name: "Redux", level: 5 },
      { name: "Zustand", level: 4 },
      { name: "Pinia", level: 3 },
      { name: "Vuex", level: 4 }
    ]
  },
  {
    category: "UI Libraries",
    skills: [
      { name: "Material UI", level: 5 },
      { name: "Chakra UI", level: 4 },
      { name: "Ant Design", level: 4 },
      { name: "TailwindCSS", level: 5 }
    ]
  },
  {
    category: "Testing",
    skills: [
      { name: "Jest", level: 4 },
      { name: "React Testing Library", level: 4 },
      { name: "Cypress", level: 3 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", level: 5 },
      { name: "JIRA", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Webpack", level: 4 },
      { name: "Docker", level: 3 }
    ]
  }
];
