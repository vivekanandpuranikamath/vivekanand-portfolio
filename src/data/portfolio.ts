export const profile = {
  name: "Vivekanand Puranikamath",
  firstName: "Vivekanand",
  title: "Full Stack Java Developer",
  roles: ["Java Developer", "Full Stack Developer", "Software Engineer"],
  tagline: "Building scalable applications with Java and modern web technologies.",
  email: "vivekanandpuranikamath@gmail.com",
  location: "Bengaluru, Karnataka, India",
  experience: "Fresher",
  domain: "Full Stack Web Development",
  availability: "Open for opportunities",
  resumeUrl:
    "https://drive.google.com/file/d/1a759Z-eY6zrsFXPSGl5N7NhIP8ShlYPZ/view?usp=drive_link",
  logoUrl: "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/vivekanandpuranikamath/",
    github: "https://github.com/vivekanandpuranikamath",
    hackerrank: "https://www.hackerrank.com/profile/vivekanandapura1",
  },
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const about = {
  short:
    "I am a passionate Full Stack Java Developer and B.Tech graduate in Electronics and Communication Engineering, currently gaining industry experience through an internship at TAP Academy. I have knowledge of Core Java, Spring, Hibernate, JavaScript, React.js, HTML, CSS, JDBC, and MySQL. I enjoy developing practical web applications, solving programming challenges, and continuously learning new technologies to build reliable software solutions.",
  experience:
    "Currently working as a Full Stack Java Developer Intern at TAP Academy, continuously improving my programming skills through hands-on coding practice, technical assignments, and practical development.",
  objective:
    "My goal is to become a skilled software engineer by developing real-world applications, writing clean and efficient code, and exploring modern technologies. I am eager to contribute my technical skills, learn from experienced professionals, and take on challenging opportunities in software development.",
  coreConcepts: ["OOP", "Exception Handling", "Multithreading", "Collections Framework"],
};

export type SkillGroup = { key: string; title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { key: "frontend", title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  {
    key: "backend",
    title: "Backend",
    items: ["Core Java", "JDBC", "JSP", "Spring", "Hibernate"],
  },
  { key: "database", title: "Databases", items: ["MySQL", "MongoDB"] },
  {
    key: "tools",
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Eclipse", "IntelliJ IDEA"],
  },
  {
    key: "ai",
    title: "AI Tools",
    items: ["ChatGPT", "Claude AI", "GitHub Copilot", "Lovable", "Antigravity"],
  },
];

export type ProjectStatus = "Completed" | "In Progress";

export type Project = {
  title: string;
  status: ProjectStatus;
  category: string;
  description: string;
  stack: string[];
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Attendance Management System",
    status: "Completed",
    category: "Full Stack Web Application",
    description:
      "A full-stack employee attendance and workforce management system that simplifies employee administration and attendance tracking. Separate Admin, Manager and Employee dashboards with QR-based check-in/check-out, employee management, leave applications, work-from-home requests and project tracking.",
    stack: [
      "Java 17",
      "Spring Boot 3.2",
      "Spring MVC",
      "Hibernate/JPA",
      "MySQL 8",
      "React.js",
      "JSP",
      "Apache Tomcat 10.1",
    ],
    demo: "https://github.com/vivekanandpuranikamath/Smart-Attendance-Management-System/blob/main/README.md",
    github: "https://github.com/vivekanandpuranikamath/Smart-Attendance-Management-System",
  },
  {
    title: "Cravio – Food Delivery Application",
    status: "In Progress",
    category: "Full Stack Web Application",
    description:
      "A full-stack food delivery application where customers explore restaurants and menus. Includes restaurant management, food ratings, order tracking and role-based workflows for customers, restaurant owners and delivery partners — built for a convenient, user-friendly ordering experience.",
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React.js",
      "HTML",
      "CSS",
      "REST APIs",
      "JSP",
      "Servlets",
    ],
  },
];

export const projectFilters = ["All", "Completed", "In Progress"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects(list: Project[], filter: ProjectFilter): Project[] {
  return filter === "All" ? list : list.filter((p) => p.status === filter);
}

export const education = [
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    institute: "Presidency University",
    location: "Bengaluru, Karnataka, India",
    period: "Graduated June 2026",
    score: "CGPA 7.82",
    description:
      "Built a strong foundation in engineering principles, logical thinking and problem-solving, along with practical software development through programming practice and full-stack projects.",
  },
  {
    degree: "Pre-University Course (PUC)",
    institute: "Bapuji Independent PU College",
    location: "Bagagandi, Bagalakote",
    period: "April 2022",
    score: "85%",
    description: "Completed Intermediate education with 85%.",
  },
  {
    degree: "SSLC (10th Standard)",
    institute: "Karnataka Public School",
    location: "Jalwad, Vijayapura",
    period: "April 2020",
    score: "88%",
    description: "Completed secondary education with 88%.",
  },
];

export const certifications = [
  {
    name: "Java for Problem Solving",
    platform: "CodeChef",
    date: "May 2025",
    skills: ["Java"],
    url: "https://www.codechef.com/certificates/public/2d9ae3c",
  },
  {
    name: "DSA using Java",
    platform: "CodeChef",
    date: "December 19",
    skills: ["DSA"],
    url: "https://www.codechef.com/certificates/public/b5fbd87",
  },
];
