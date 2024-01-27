// import images
import Hero_person from "./assets/images/Hero/person.png";

// import figma from "./assets/images/Skills/figma.png";
// import sketch from "./assets/images/Skills/sketch.png";
// import ps from "./assets/images/Skills/ps.png";
import postgres from "./assets/images/Skills/postgres.png"
import redux from "./assets/images/Skills/Redux.png"
import ts from "./assets/images/Skills/ts.png"
import js from "./assets/images/Skills/js.jpg"
import es from "./assets/images/Skills/es.png"
import css from "./assets/images/Skills/css.png"
import html from "./assets/images/Skills/html.png"
import tw from "./assets/images/Skills/tailwind.png"
import jest from "./assets/images/Skills/jest.png"

import udFull from "./assets/images/certificates/photos/udacityFullstack.png"
import udFront from "./assets/images/certificates/photos/udacityFront.png"
import react from "./assets/images/certificates/photos/react.jpg"
import es6 from "./assets/images/certificates/photos/es6.jpg"
import tsc from "./assets/images/certificates/photos/ts.jpg"
import node from "./assets/images/certificates/photos/node.jpg"
import jsc from "./assets/images/certificates/photos/js.jpg"
import mongo from "./assets/images/certificates/photos/mongodb.jpg"
import jsd from "./assets/images/certificates/photos/js2.jpg"
import htmlc from "./assets/images/certificates/photos/html.jpg"
import dbc from "./assets/images/certificates/photos/database.jpg"
import phpc from "./assets/images/certificates/photos/php.jpg"




import next from "./assets/images/Skills/nextjs.png"
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
// import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
// import services_logo3 from "./assets/images/Services/logo3.png";

// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import crm1 from "./assets/images/Portfolio/crm1.png"
import crm2 from "./assets/images/Portfolio/crm2.png"
import cityCourier from "./assets/images/Portfolio/cityCourier.png"
import todo from "./assets/images/Portfolio/todo.png"
import expense from "./assets/images/Portfolio/expense.png"
import rover from "./assets/images/Portfolio/rover.png"
import moviesdb from "./assets/images/Portfolio/moviesdb2.png"

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: `Front-End Developer I-Soft UAE`,
    firstName: "Ahmed",
    LastName: "Shehata",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Front-End Web development",
      },
      {
        count: "7+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "The Power of Modern UI",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Scalability, and Seamless Integration",
        logo: nodejs,
      },
      {
        name: "Next js",
        para: "Empowering Modern Web Development",
        logo: next,
      },
      {
        name: "PostgresSQL",
        para: "Empowering Data, Unleashing Possibilities",
        logo: postgres,
      },
      {
        name: "Redux",
        para: "Empowering State Management, Unleashing Application Potential",
        logo: redux,
      },
      {
        name: "TypeScript",
        para: "Development with Powerful Typing and Unleashed Productivity",
        logo: ts,
      },
      {
        name: "JavaScript",
        para: "Unleashing Limitless Web Creativity",
        logo: js,
      },
      {
        name: "ECMAScript13",
        para: "Elevating JavaScript's Potential to New Heights",
        logo: es,
      },
      {
        name: "CSS",
        para: "Transforming Web Design with Style and Elegance",
        logo: css,
      },
      {
        name: "HTML",
        para: "Crafting the Web's Foundation, Inspiring Limitless Possibilities",
        logo: html,
      },
      ,
      {
        name: "TailWindCSS",
        para: "Unleashing Rapid Web Styling with Elegant Simplicity",
        logo: tw,
      },
      {
        name: "Jest",
        para: "Embrace Testing Excellence, Unleash Bug-Free Code",
        logo: jest,
      }

    ],
    icon: MdArrowForward,
  },
  certificates:{
    title: "Courses",
    subtitle: "MY CERTIFICATES",
    image: "person_project",
    certificate_content: [
      {
        title: "Udacity Advanced Full-Stack",
        image: udFull,
      },
      {
        title: "Professional Front-End Web Development",
        image: udFront,
      },
      {
        title: "react",
        image: react,
      },
      {
        title: "es6",
        image: es6,
      },
      {
        title: "tsc",
        image: tsc,
      },
      {
        title: "node",
        image: node,
      },
      {
        title: "jsc",
        image: jsc,
      },
      {
        title: "mongo",
        image: mongo,
      },
      {
        title: "jsd",
        image: jsd,
      },
      {
        title: "htmlc",
        image: htmlc,
      },
      {
        title: "dbc",
        image: dbc,
      },
      {
        title: "phpc",
        image: phpc,
      }
    ],
  },
  Portfolio: {
    title: "Portfolio",
    subtitle: "MY TOP PROJECTS",
    Portfolio_content: [
      {
        review:
          "“ Full-Stack CRM web, developed using React.js, Node.js, and Postgres, empowers sales representatives to optimize their performance by leveraging real-time insights into daily activities and market potentiality.”",
           

        img: crm2,
        name: "CRM",
        link: "https://ahmed-shehata-crm.onrender.com",
        gitLink:"https://github.com/ashehata88888/PEN_Test_Render_FrontEnd/"

      },
      {
        review:
          "“ Full-stack web app with React.js for front-end and Node.js with Postgres for back-end.Streamlines shipping process, real-time tracking,and efficient package management.Enhances customer experience and courier productivity for seamless deliveries.”",

        img: cityCourier,
        name: "City Courier",
        link: "https://ahmed-shehata-city-courier-shipping-app.onrender.com/",
        gitLink:"https://github.com/ashehata8888/city_courier_frontend.git/"

      },
 
      {
        review:
          "“Experience the ultimate Movie Database App, where discovering your favorite films is a breeze with our visually captivating grid view. Powered by Next.js, it's your go-to source for all the movie data you need.”",
        img: moviesdb,
        name: "Movies Database",
        link: "https://ahmed-shehata-db-movies.vercel.app/",
        gitLink:"https://github.com/ashehata8888/mov.git"
      },
      {
        review:
          "“Developed by Reactjs and designed with a focus on real-time coordination updates, this app empowers users to control the rover's movements by providing specific commands. By using 'F' to move the rover forward one step, 'B' to move it back, 'R' to make a right turn, and 'L' to make a left turn.”",
        img: rover,
        name: "MARS ROVER",
        link: "https://ahmed-shehata-mars-rover.onrender.com/",
        gitLink:"https://github.com/ashehata8888/mars-rover/"
      },
      {
        review:
          "“The Expense Tracker App is an innovative application that simplifies the process of managing your finances. With a focus on tracking expenses and budgeting, this app empowers users to effortlessly update and monitor their financial transactions”",
        img: expense,
        name: "EXPENSE TRACKER",
        link: "https://expenses-tracker-ahmed-shehata.onrender.com/",
        gitLink:"https://github.com/ashehata8888/expense_tracker/"
      },
    ],
  },
  
  
  
  services: {
    title: "Work Experiance",
    subtitle: "FULL-STACK WEB DEVELOPMENT",
    service_content: [
      {
        title: "Backend",
        para: "Developing server-side logic and APIs using Node.js and TypeScript, Managing databases and implementing efficient data access layers, Ensuring secure authentication and authorization mechanisms and Optimizing performance, handling errors, and implementing testing and quality assurance.",
        logo: services_logo1,
      },
      {
        title: "FrontEnd",
        para: " Developing responsive UIs using React.js, Next.js, and Tailwind CSS, Integrating with backend APIs and managing application state, Performing unit testing using Jest to ensure code quality and Optimizing performance and collaborating with teams to stay updated with latest technologies.",
        logo: services_logo1,
      },
      {
        title: "Deployments",
        para: "Implementing CI/CD pipelines for efficient deployments, Managing infrastructure using IaC and containerization, Monitoring and ensuring security and compliance and Collaborating with teams for seamless deployments.",
        logo: services_logo2,
      },
    ],
  },
  // Projects: {
  //   title: "Projects",
  //   subtitle: "MY CREATION",
  //   image: person_project,
  //   project_content: [
  //     {
  //       title: "Gym Website",
  //       image: project1,
  //     },
  //     {
  //       title: "Social Media web",
  //       image: project2,
  //     },
  //     {
  //       title: "Creative Website",
  //       image: project3,
  //     },
  //   ],
  // },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  // Hireme: {
  //   title: "Hire Me",
  //   subtitle: "FOR YOUR PROJECTS",
  //   image1: Hireme_person,
  //   image2: Hireme_person2,
  //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
  //   btnText: "Hire Me",
  // },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ashehata8888@gmail.com",
        icon: GrMail,
        link: "ashehata8888@gmail.com",
      },
      {
        text: "+20 11 00 33 14 59",
        icon: MdCall,
        link: "https://wa.me/01284116638",
      },
      {
        text: "Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ahmed-shehata-a9608097/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
