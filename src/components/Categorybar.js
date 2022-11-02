import React from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";
import "./Homepage.css";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/bundle";

import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import "./Categorybar.css";
const Categorybar = () => {
  return (
    <div className="catflex">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          800: {
            slidesPerView: 7,
            spaceBetween:2,
          },
          
        }}
        spaceBetween={5}
        slidesPerView={3.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <ul className="catflex">
          <SwiperSlide>
            <li className="liststyle">Chicken</li>
            
          </SwiperSlide>
          <hr class="solid"></hr>
          <SwiperSlide>
            <li className="liststyle">Eggs</li>
            {/* <hr class="solid"></hr> */}
          </SwiperSlide>
          <SwiperSlide>
            <li className="liststyle">Milk</li>
            {/* <hr class="solid"></hr> */}
          </SwiperSlide>
          <SwiperSlide>
            <li className="liststyle">Exotics</li>
            {/* <hr class="solid"></hr> */}
          </SwiperSlide>
          <SwiperSlide>
            <li className="liststyle">Fish & Seafood</li>
            {/* <hr class="solid"></hr> */}
          </SwiperSlide>
          <SwiperSlide>
            <li className="liststyle">Marinated</li>
            {/* <hr class="solid"></hr> */}
          </SwiperSlide>
          <SwiperSlide>
            <li className="liststyle">Biriyanis</li>
          </SwiperSlide>
        </ul>
      </Swiper>
    </div>
  );
};

export default Categorybar;
