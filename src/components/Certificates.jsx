import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Certificates = () => {
  const { certificates } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {certificates.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {certificates.subtitle}
          </h4>
          <br />
        </div>
        <div 
        style={{
          minWidth: "125vh",
          height: "100vh",
          '@media (max-width: 600px)': { // Mobile screens
            minWidth: "80vw",
            maxHeight: "50vh",
          },
          '@media (min-width: 601px) and (max-width: 1024px)': { // Tablet screens
            minWidth: "100vw",
            maxHeight: "70vh",
          },
          '@media (min-width: 1025px)': { // Laptop screens
            minWidth: "120vh",
            maxHeight: "100vh",
          }
        }}
        // style={{ minWidth:"120vh", height:"100vh"}}
        className="flex items-center lg:flex-row flex-col-reverse gap-5">
          {/* <img
            src={certificates.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
              style={{
                minWidth: "125vh",
                height: "100vh",
                '@media (max-width: 600px)': { // Mobile screens
                  minWidth: "80vw",
                  maxHeight: "50vh",
                },
                '@media (min-width: 601px) and (max-width: 1024px)': { // Tablet screens
                  minWidth: "100vw",
                  maxHeight: "70vh",
                },
                '@media (min-width: 1025px)': { // Laptop screens
                  minWidth: "120vh",
                  maxHeight: "100vh",
                }
              }}




          // style={{minWidth:"120vh" , height:"100vh"}}


            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {certificates.certificate_content.map((content, i) => (
              <SwiperSlide
                key={i}

                style={{
                  minWidth: "125vh",
                  height: "100vh",
                  '@media (max-width: 600px)': { // Mobile screens
                    minWidth: "80vw",
                    maxHeight: "50vh",
                  },
                  '@media (min-width: 601px) and (max-width: 1024px)': { // Tablet screens
                    minWidth: "100vw",
                    maxHeight: "70vh",
                  },
                  '@media (min-width: 1025px)': { // Laptop screens
                    minWidth: "120vh",
                    maxHeight: "100vh",
                  }
                }}


                // style={{minWidth:"120vh" , height:"100vh"}}


                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img 

                  style={{
                    paddingBottom:"30px",
                    minWidth: "120vh",
                    height: "100vh",
                    '@media (max-width: 600px)': { // Mobile screens
                      minWidth: "50vw",
                      maxWidth: "60vw",
                      maxHeight: "40vh",
                    },
                    '@media (min-width: 601px) and (max-width: 1024px)': { // Tablet screens
                      minWidth: "80vw",
                      maxHeight: "60vh",
                    },
                    '@media (min-width: 1025px)': { // Laptop screens
                      minWidth: "120vh",
                      maxHeight: "100vh",
                    }
                  }}

                // style={{width:"120vh", height:"100vh"}} 
                
                src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
