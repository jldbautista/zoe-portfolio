export type NavItem = {
  label: string;
  href: string;
};

export type IconName = "graduation" | "linkedin" | "location" | "mail" | "person";

export type Experience = {
  title: string;
  organization: string;
  date: string;
  description: string;
};

export type Education = {
  degree: string;
  school: string;
  date: string;
  details: string;
};

export type Project = {
  title: string;
  description: string;
  image?: string;
  highlights?: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  icon: IconName;
};
