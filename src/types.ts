export type LinkItem = {
  label: string;
  href: string;
  copy: string;
};

export type Equipment = LinkItem & {
  image: string;
};

export type Trainer = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type Step = {
  title: string;
  copy: string;
};

export type Guide = {
  title: string;
  copy: string;
  level: string;
};

export type ClassType = {
  name: string;
  count: string;
  copy: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FooterGroup = {
  title: string;
  links: string[];
};

export type WellnessCourse = {
  title: string;
  focus: string;
  duration: string;
  copy: string;
};
