import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../Images/sidebar.png'
import Ecommerce from '../../Images/ecommerce.png'

const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span> Recents Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
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
                <SwiperSlide>
                    <img src={Sidebar} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio