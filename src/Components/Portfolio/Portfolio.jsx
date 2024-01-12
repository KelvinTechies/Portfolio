import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../Images/sidebar.png";
import Ecommerce from "../../Images/ecommerce.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}> Recents Projects</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* <img src={Sidebar} /> */}
          <a href="https://e-crime.vercel.app/">
            {" "}
            <iframe src="https://e-crime.vercel.app/"></iframe>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          {/* <img src={Ecommerce} /> */}
          <a href="https://tkstore.vercel.app/">
            {" "}
            <iframe src="https://tkstore.vercel.app/"></iframe>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Portfolio;
