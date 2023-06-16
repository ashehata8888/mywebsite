import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Portfolio = () => {
  const { Portfolio } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div 
      className="md:container px-5 pt-14 " >
        <h2 className="title" data-aos="fade-down">
          {Portfolio.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Portfolio.subtitle}
        </h4>
        <br />
        <Swiper
          // style={{minWidth:"100vh",marginLift:"10px",marginRight:"100px"}}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[50rem] max-w-3.5xl mr-4 pr-2 pl-2"
        >
          {Portfolio.Portfolio_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                // style={{marginLift:"10px" ,width:"120rem",marginRight:"10px"}}
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              pr-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <a href={content.link} target="_blank"> <img src={content.img} alt="..."  style={{marginLeft:"10px",minWidth:"8rem",maxWidth:"17rem"}}/> </a>
                <div className="pr-8">
                  <h6 style={{marginBottom:"5px",fontSize:"17pt"}}>{content.name}</h6>
                
                  <p className="sm:text-base text-sm mr-16">{content.review}</p>
                   <h6 ><a className="border border-gray-300 rounded-lg pr-2 pl-2 bg-sky-400 hover:bg-sky-500 focus:bg-sky-600" href={content.link} target="_blank">WebSite Demo</a></h6>
                   <h6><a className="border border-gray-300 rounded-lg pr-2 pl-2 bg-sky-400 hover:bg-sky-500 focus:bg-sky-600" href={content.gitLink} target="_blank">GitHub Repo</a></h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
