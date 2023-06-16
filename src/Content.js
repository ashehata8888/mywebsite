// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
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

import next from "./assets/images/Skills/nextjs.png"
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
    title: "Full-Stack Web Developer",
    firstName: "Ahmed",
    LastName: "Shehata",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Full-Stack Web development",
      },
      {
        count: "5+",
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
    image: person_project,
    certificate_content: [
      {
        title: "Udacity Advanced Full-Stack",
        image: udFull,
      },
      {
        title: "Social Media web",
        image: udFull,
      },
      {
        title: "Creative Website",
        image: udFull,
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
