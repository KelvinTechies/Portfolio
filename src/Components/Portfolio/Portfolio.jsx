import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../Images/sidebar.png";
import Ecommerce from "../../Images/ecommerce.png";
import { themeContext } from "../../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          <a href="https://e-crime.vercel.app/" target="_blank">
            {" "}
            <iframe src="https://e-crime.vercel.app/"></iframe>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tkstore.vercel.app/" target="_blank">
            {" "}
            <iframe src="https://tkstore.vercel.app/"></iframe>
          </a>
        </SwiperSlide>
        s
      </Swiper>

      {/* <Slider {...settings}>
        <div>
          <a href="https://e-crime.vercel.app/">
            {" "}
            <iframe src="https://e-crime.vercel.app/"></iframe>
          </a>
        </div>
        <div>
          <a href="https://tkstore.vercel.app/">
            {" "}
            <iframe src="https://tkstore.vercel.app/"></iframe>
          </a>
        </div>
      </Slider> */}
    </div>
  );
};
export default Portfolio;
