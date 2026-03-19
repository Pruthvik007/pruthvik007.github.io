import avatarImg from "@/Assets/Images/avatar.webp";
import { Resume } from "@/Assets/assets";
import { project1Image, project2Image } from "@/Assets/assets";
import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
} from "@/Assets/assets";

// =============================================================================
// PORTFOLIO CONFIGURATION
// =============================================================================
// Edit this single file to customize the entire portfolio.
// All sections pull their content from here.
// =============================================================================

// -----------------------------------------------------------------------------
// Personal Info & Socials
// -----------------------------------------------------------------------------
export const personalInfo = {
  name: "Sai Pruthvik",
  initials: "SP",
  avatar: avatarImg,
  resume: Resume,
  greeting: "Hello, I am",
  title: "A Full Stack Developer",
  subtitle:
    "Full Stack Developer with expertise in Java Spring Boot and React. Currently building scalable backend systems and modern web interfaces at SkilloVilla. Passionate about clean architecture, problem-solving, and continuously leveling up.",
  email: "saipruthvik460@gmail.com",
};

export const socials = [
  { platform: "email", url: "mailto:saipruthvik460@gmail.com", label: "saipruthvik460@gmail.com" },
  { platform: "github", url: "https://github.com/Pruthvik007", label: "Pruthvik007" },
  { platform: "linkedin", url: "https://www.linkedin.com/in/sai-pruthvik-3515b9314/", label: "Sai Pruthvik" },
];

// -----------------------------------------------------------------------------
// Navigation Links (anchor IDs must match section IDs in App.jsx)
// -----------------------------------------------------------------------------
export const navLinks = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Certifications", href: "certifications" },
  { label: "Contact", href: "contact" },
];

// -----------------------------------------------------------------------------
// About Section
// -----------------------------------------------------------------------------
export const about = {
  heading: "About Me",
  description: "A passionate developer who loves building things for the web.",

  experiences: [
    {
      role: "SDE-1",
      company: "SkilloVilla",
      period: "2024 - Present",
      description:
        "Building and maintaining microservices powering SkilloVilla's ed-tech platform. Key contributions include designing transactional service-to-service communication for data consistency, building a unified notification system (WhatsApp, Email, SMS) with runtime-configurable scheduling, integrating Easebuzz and Juspay payment gateways, and automating Zoom recording workflows using AWS S3, Lambda, and Step Functions. Also introduced a Hasura GraphQL layer to accelerate frontend delivery and set up ETL pipelines with Hevo and Snowflake.",
    },
    // Add more experiences here:
    // {
    //   role: "Junior Developer",
    //   company: "Previous Company",
    //   period: "2021 - 2023",
    //   description: "...",
    // },
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      school: "MallaReddy University",
      period: "2018 - 2022",
      description: "",
    },
    // Add more education here:
    // {
    //   degree: "High School",
    //   school: "Your School",
    //   period: "2017 - 2019",
    //   description: "...",
    // },
  ],
};

// -----------------------------------------------------------------------------
// Skills Section
// -----------------------------------------------------------------------------
export const skills = {
  heading: "Skills & Technologies",
  description: "Technologies I work with on a daily basis.",

  categories: [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Node.js", "REST APIs", "GraphQL", "Unit Testing"],
    },
    {
      title: "Database & Caching",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Snowflake"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "Gradle"],
    },
  ],
};

// -----------------------------------------------------------------------------
// Projects Section
// -----------------------------------------------------------------------------
export const projects = {
  heading: "Featured Projects",
  description: "Some of the projects I have built.",

  items: [
    {
      title: "MediaBox",
      description:
        "A responsive movie and TV series discovery app built with React and TypeScript. Features include genre-based filtering, personalized watchlists, light/dark theme toggle, and efficient data caching with React Query. Achieves perfect Lighthouse scores across all categories.",
      image: project1Image,
      url: "https://github.com/Pruthvik007/movies-and-series",
      tags: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    },
    {
      title: "Employee Manager",
      description:
        "A full-stack MERN application for managing employee records within an organization. Features include CRUD operations, role-based views, and a clean admin dashboard.",
      image: project2Image,
      url: "https://github.com/Pruthvik007/MERN-APP",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Ecommerce Backend",
      description:
        "A Spring Boot backend module featuring role-based authentication with JWT, product management, and order processing. Implements clean entity relationships, RESTful APIs with pagination, and comprehensive unit testing with JUnit and Mockito.",
      image: null,
      url: "https://github.com/Pruthvik007/SampleEcommerceApplication",
      tags: ["Java", "Spring Boot", "Spring Security", "JUnit"],
    },
    // Add more projects here:
    // {
    //   title: "Project Name",
    //   description: "Project description...",
    //   image: importedImage,       // import at the top of this file
    //   url: "https://github.com/...",
    //   tags: ["Tag1", "Tag2"],
    // },
  ],
};

// -----------------------------------------------------------------------------
// Certifications Section
// -----------------------------------------------------------------------------
export const certifications = {
  heading: "Certifications",
  description: "Professional certifications and courses I have completed.",

  items: [
    {
      title: "Advanced React",
      image: certificate6,
      url: "https://coursera.org/share/6983f06728f38b983398d6be9623a563",
    },
    {
      title: "React Basics",
      image: certificate5,
      url: "https://coursera.org/share/9b5d61145d0b5953dec2596f0d79d004",
    },
    {
      title: "Version Control",
      image: certificate4,
      url: "https://coursera.org/share/c2e91798bd5bcdcff7e53fbf06952901",
    },
    {
      title: "Programming With JavaScript",
      image: certificate3,
      url: "https://coursera.org/share/e31a456fd18313a76ce72dc651f3d24b",
    },
    {
      title: "HTML and CSS In Depth",
      image: certificate2,
      url: "https://coursera.org/share/38c16912f7f9c7e30d8d50ca3577bc58",
    },
    {
      title: "Introduction to Frontend Development",
      image: certificate1,
      url: "https://coursera.org/share/4ae2183221b69361a350e64f36a9ced8",
    },
    // Add more certifications here:
    // {
    //   title: "Certification Name",
    //   image: importedImage,       // import at the top of this file
    //   url: "https://...",
    // },
  ],
};

// -----------------------------------------------------------------------------
// Contact Section
// -----------------------------------------------------------------------------
export const contact = {
  heading: "Get In Touch",
  description: "Have a question or want to work together? Feel free to reach out.",

  // Set VITE_FORMSPREE_URL in your .env file (local) or GitHub repository secrets (deploy).
  // Leave unset to show the form in disabled mode.
  formAction: import.meta.env.VITE_FORMSPREE_URL || "",
};

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------
export const footer = {
  name: "Sai Pruthvik",
};

// -----------------------------------------------------------------------------
// SEO / Meta (used in index.html — update there manually)
// -----------------------------------------------------------------------------
// <title>Sai Pruthvik | Portfolio</title>
// <meta name="description" content="..." />
// <meta property="og:title" content="..." />
// <meta property="og:description" content="..." />
