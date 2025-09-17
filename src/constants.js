// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import iiitranchi from './assets/education_logo/iiitranchi.jpeg';

// Project Section Logo's
import ecommerceLogo from './assets/work_logo/e-commerce.jpg';
import emsLogo from './assets/work_logo/ems.jpg';
import portfolioLogo from './assets/work_logo/portfolio.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: iiitranchi,
      school: "Indian Institute of Information Technology(IIIT), Ranchi",
      date: "2023-2027",
      grade: "8.68 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) degree in Computer Science. Throughout my academic journey, I have been building a strong foundation in programming, software development, and core computer science principles. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Alongside academics, I actively participate in technical workshops and events, which help me enhance my practical skills and stay updated with the latest technologies. This experience is shaping my technical abilities and preparing me for a successful career in software development.",
      degree: "Bachelor of Technology(B.Tech) in Computer Science and Engineering(CSE) ",
    },
  ];

  export const projects = [
    { 
      id: 0,
      title: "Full-Stack E-Commerce Website",
      description:
        "I developed and deployed a full-stack e-commerce application using React.js, Node.js, Express.js, and MongoDB, hosted on Vercel. The app includes features like product browsing, filtering, cart management, secure checkout with Stripe/Razorpay/COD, and an admin dashboard for managing products and orders. It also provides a responsive UI and secure APIs for authentication, users, and orders.",
      image: ecommerceLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/santoshraj8804/forever_e-commerce_website_full_stack",
    },
    {
      id: 1,
      title: "MERN Stack Employee Management System",
      description:
        "I built a MERN-Stack Employee Management System with secure authentication and role-based access for admins and employees. It features admin and employee dashboards, CRUD operations for employees/departments/salaries, and a leave management system with request, approval, and tracking. The project is organized with a scalable file structure and RESTful APIs for efficient backend operations.",
      image: emsLogo,
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/santoshraj8804/employee-frontend",
      github: "https://github.com/santoshraj8804/employee-backend",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "I developed a personal portfolio website using React.js, Tailwind CSS, and JavaScript to showcase my projects, skills, and experience. The site features a responsive design, smooth navigation, and interactive UI elements. It is optimized for performance and deployed online for easy accessibility.",
      image: portfolioLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.js"],
      github: "https://github.com/santoshraj8804/portfolio",
    },
   ];  










  