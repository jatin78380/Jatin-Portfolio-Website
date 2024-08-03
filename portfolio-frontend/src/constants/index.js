import portfoliojatin from "../assets/projects/portfoliojatin.png";
// import PICTURE from "../assets/projects/PICTURE.jpg";
import SalonProject from "../assets/projects/SalonProject.png";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer,  I specialize in creating dynamic websites. My expertise spans front-end technologies like React.js, including proficiency in Framer Motion and Tailwind CSS, as well as back-end technologies such as Express.js, Node.js, and MongoDB. Currently, I am in the final year of my Bachelor's in Computer Science, specializing in Cyber Security with a minor in Blockchain. I thrive in environments that offer challenging and evolving tech stacks, where continuous learning and innovation are at the core of the work. Additionally, I practice DSA (Data Structures and Algorithms) questions daily using Java to continually hone my problem-solving skills.`;

export const ABOUT_TEXT = `I am a dedicated and resilient full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js,ExpressJs and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I practice Data Strctures Questions dauly to improve my logical ability. Outside of coding, I enjoy staying active, exploring new technologies,currently exploring blockchain technology.`;

export const EXPERIENCES = [
  {
    year: "June,2024 - Present",
    role: "Full Stack Developer Intern",
    company: "Lagaland",
    description: `I along with my team member are working on making Salon website,I am working on Backend part using  Node.js,ExpressJs. Implementing RESTful APIs for signin,signup of salon user,updating their salon time on website,and uploading photos of their salons, storing data on MongoDB databases(storing link of image on mongodb,image is uploaded to cloudinary). `,
    technologies: [ "ExpressJs", "MongoDB"],
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
