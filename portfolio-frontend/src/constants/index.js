import portfoliojatin from "../assets/projects/portfoliojatin.png";
// import PICTURE from "../assets/projects/PICTURE.jpg";
import SalonProject from "../assets/projects/SalonProject.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I practice Data Strctures Questions dauly to improve my logical ability. Outside of coding, I enjoy staying active, exploring new technologies,currently exploring blockchain technology.`;

export const EXPERIENCES = [
  {
    year: "June,2024 - Present",
    role: "Full Stack Developer Intern",
    company: "Lagaland",
    description: `I along with my team member are working on making Salon website,I am working on Backend part using  Node.js,ExpressJs. Implementing RESTful APIs and integrating with MongoDB databases. `,
    technologies: ["Javascript", "ExpressJs", "mongoDB"],
  },
  
];

export const PROJECTS = [
 
  {
    title: "Portfolio Website",
    image: "portfoliojatin",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "HTML"],
  },
  {
    title: "Blogging Website(Will be developed after internship)",
    // image: "PICTURE",
    description:
      "A fully functional blogging website .",
    technologies: ["React","Typescript","Postgresql"],
  },
  {
    title: "Salon Website(currently in progress)",
    image: "SalonProject",
    description:
      "A fully functional Salon website with features like user signup, CRUD operations, and booking appointments.",
    technologies: ["Nextjs", "Tailwind CSS", "Node.js", "MongoDB","Cloudinary"],
  }
];
