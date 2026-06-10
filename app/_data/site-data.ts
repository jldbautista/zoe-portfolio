import type {
  ContactLink,
  Education,
  Experience,
  NavItem,
  Project,
} from "../_lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export const skills: string[] = [
  "Process Simulation",
  "Material & Energy Balances",
  "Process Design",
  "Data Analysis",
  "MATLAB",
  "Python",
  "Excel",
  "Technical Reporting",
  "Laboratory Methods",
  "Process Safety",
];

export const focusAreas: string[] = [
  "Sustainable Process Design",
  "Separation Processes",
  "Heat and Mass Transfer",
  "Reaction Engineering",
  "Process Optimization",
  "Environmental Engineering",
  "Renewable Energy",
  "Biochemical Engineering",
  "Safety and Reliability",
  "Scale-Up and Manufacturing",
];

export const experiences: Experience[] = [
  {
    title: "Process Engineering Intern",
    organization: "JOSEPH'S COMPANY",
    date: "Summer 2026",
    description: "ABOUT TO",
  },
  {
    title: "Mathematics and Physics Tutor",
    organization: "MJC - MESA Program",
    date: "2023 - 2025",
    description:
      "Provided group tutoring across a range of mathematics and physics courses, from introductory levels through advanced calculus, and led Supplemental Instruction (SI) sessions designed to replicate the in-person classroom experience.",
  },
];

export const education: Education[] = [
  {
    degree: "B.S. Chemical Engineering",
    school: "University of California, Davis",
    date: "Expected 2027",
    details:
      "Relevant Coursework: Organic Chemistry, Thermodynamics, Fluid Mechanics, Mass Transfer, Materials Balance",
  },
  {
    degree: "A.S. Engineering, Mathematics, Physics, and Geology",
    school: "Modesto Junior College",
    date: "2022 - 2025",
    details: "Relevant Coursework: Calculus, Differential Equations, General Chemistry, Physics",
  },
];

export const projects: Project[] = [
  {
    title: "Bio-based Solvent Design",
    description:
      "Researched and evaluated bio-based solvents as replacements for traditional petrochemical solvents.",
    image: "/chem-cat.png",
    highlights: ["Research", "Sustainability", "Solvent Chemistry"],
  },
  {
    title: "Distillation Column Simulation",
    description:
      "Modeled a multicomponent separation process to improve energy efficiency and purity specifications.",
    image: "/ck.jpg",
  },
  {
    title: "Sustainability Analysis",
    description:
      "Performed life cycle assessment on chemical processes to identify environmental improvement areas.",
    image: "/catboom.jpg",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "zfbremer@ucdavis.edu",
    href: "mailto:zfbremer@ucdavis.edu",
    icon: "mail",
  },
  {
    label: "linkedin.com/in/zoe-bremer-ba4672341",
    href: "https://www.linkedin.com/in/zoe-bremer-ba4672341",
    icon: "linkedin",
  },
];
