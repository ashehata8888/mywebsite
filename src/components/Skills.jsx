// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  // console.log(skills.skills_content[0].name)
  console.log("selected name is ",selectSkill?.name)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          {selectSkill?.name == "React js" ? "Engaged in concurrent React.js projects, building and delivering robust solutions for diverse requirements. Employing cutting-edge technologies and best practices to develop efficient, scalable, and high-performance applications."
          : selectSkill?.name == "Node js" ? "Implementing a comprehensive web applications, such as a CRM (Customer Relationship Management) system, using Node.js and securing it with JWT (JSON Web Tokens) and hash passwords"
          : selectSkill?.name == "Next js" ? "Creating high-performance and dynamic web applications. By harnessing Next js powerful features, I have been able to optimize performance, enhance user experience, and simplify the development process. Next.js has truly been an excellent choice for building modern and efficient web applications, allowing me to deliver top-notch solutions to my users."
          : selectSkill?.name == "PostgresSQL" ? " PostgreSQL has revolutionized my approach to data management and application development. By harnessing its advanced capabilities, I have unlocked unparalleled performance optimization, elevated data integrity, and streamlined the complexity of querying. PostgreSQL has become my go-to choice for crafting cutting-edge applications,"
          : selectSkill?.name == "Redux" ? "Redux has been a transformative tool in my application development journey. By embracing Redux's powerful state management capabilities, I have achieved enhanced control over data flow, improved application performance, and simplified the management of complex application states. Redux has proven to be an indispensable choice for building modern and scalable applications"
         : selectSkill?.name == "TypeScript" ? " I've gained an unprecedented level of control over my codebase. TypeScript empowers me to navigate through complex application states with ease, unlocking improved performance and streamlined development processes. This invaluable choice has revolutionized the way I build applications, enabling me to deliver seamless user experiences and reliable solutions to clients and users. With TypeScript, I am equipped to elevate my coding efficiency, ensuring top-notch quality and unleashing the full potential of my development endeavors."
        :  selectSkill?.name == "JavaScript" ? " I have experienced tremendous flexibility in crafting dynamic and interactive web applications. JavaScript empowers me to manipulate the DOM, handle user interactions, and create engaging experiences. With its versatility and wide adoption, JavaScript has become an essential choice for building modern and responsive applications. It enables me to deliver seamless user experiences, leverage vast libraries and frameworks, and continually push the boundaries of what is possible in web development. JavaScript truly fuels my creativity and empowers me to bring innovative solutions to clients and users."
        : selectSkill?.name == "ECMAScript13" ? "By embracing the latest advancements in ES13, I have unlocked a new level of productivity and efficiency in my coding workflow. ES13 empowers me with cutting-edge features and syntax enhancements, allowing for cleaner, more concise code. With ES13, I can leverage modern capabilities like optional chaining, nullish coalescing, and private class fields to build robust and maintainable applications. It has become an essential choice for creating forward-thinking and future-proof solutions, enabling me to deliver seamless user experiences and embrace the evolving landscape of JavaScript development."
        : selectSkill?.name == "HTML" ? "HTML plays an indispensable role in my application development journey. By harnessing the power of HTML, I have the ability to structure and organize web content with precision and clarity. HTML empowers me to create the foundation of web pages, define the structure of elements, and establish meaningful relationships between different components"
        : selectSkill?.name == "CSS" ? "By embracing the power of CSS, I am able to transform the appearance and style of web content with finesse and precision. CSS empowers me to design visually stunning layouts, create eye-catching animations, and establish consistent branding across multiple pages"
        : selectSkill?.name == "TailWindCSS" ? " Tailwind CSS has revolutionized my approach to application styling and design. By embracing the power of Tailwind CSS, I am empowered to rapidly create and customize visually appealing interfaces with unparalleled ease. Tailwind CSS provides an extensive utility-first framework, allowing me to efficiently compose responsive layouts, apply beautiful typography, and design intuitive user interfaces. With its comprehensive set of pre-defined classes, Tailwind CSS streamlines the development process and eliminates the need for writing custom CSS from scratch."
        : selectSkill?.name == "Jest" ? "Jest has become an invaluable asset in my application testing journey. By embracing the power of Jest, I am empowered to ensure the reliability and quality of my code with confidence and ease. Jest provides a comprehensive testing framework that enables me to write, run, and maintain robust unit tests and perform integration testing effortlessly. With its intuitive API, built-in mocking capabilities, and powerful assertion library, Jest simplifies the testing process and helps me identify and fix bugs early in the development cycle."
        : null
        }
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              onClick={()=>{
                setSelectSkill(skill)
                    openModal()
              }
                
              }
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  
                  src={skill.logo}
                  alt="..."
                  className={skill.name == "JavaScript" ? "w-9 group-hover:scale-125 duration-200" :
                  skill.name == "ECMAScript13" ? "w-12 group-hover:scale-125 duration-200" :
                  skill.name == "TypeScript" ? "w-14 group-hover:scale-125 duration-200" :
                  skill.name == "HTML" ? "w-14 group-hover:scale-125 duration-200" :
                  skill.name == "Jest" ? "w-16 group-hover:scale-150 duration-200" :
                  skill.name == "Redux" ? "w-16 group-hover:scale-125 duration-200" :
                   "w-11 group-hover:scale-125 duration-200"  
                
                }
                />
              </div>
              <div 
              style={{}}
                onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
