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
import Categories from "./Categories";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
import Sidebar from "./Sidebar";
const Homepage = () => {
  const swiper = useSwiper();
  const [slideIndex, setSlideIndex] = useState(0);

  const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    // transform: translateX(${(props) => props.slideIndex * -480}px);
  `;
  return (
    <div>
      <Topbar />
      <Navbar />
      
      <Categorybar />

      <div className="bgcolor">
        <div className="neededflex">
          <div className="most">
            <div className="popular"> Most Popular</div>
          </div>
          <div className="centerflex">
            <div className="itemsflex">
              <Swiper
                breakpoints={{
                  // when window width is >= 640px
                  200: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                className="main"
                id="swiper-color"
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {sliderItems.map(
                  (item) => (
                    console.log(item),
                    (
                      <SwiperSlide>
                        <Wrapper slideIndex={slideIndex}>
                          <div className="popularflex">
                            <div className="popularcontainer">
                              <img
                                className="responsiveimage"
                                src={item.img}
                                alt="image"
                              />
                            </div>
                            <div className="popularitemtitle">{item.id}</div>
                            <div className="piecesflex">
                              <div className="pieces">pieces: 12-15</div>
                              <div className="netweight">
                                Net Weight: 500gms
                              </div>
                            </div>
                            <div className="costflex">
                              <del className="delete">{item.delprice}</del>
                              <div className="cost">{item.actualprice}</div>
                            </div>
                            <div className="buttonflex">
                              <button className="button">Buy Now</button>
                              <button className="button">Add To Cart</button>
                            </div>
                          </div>
                        </Wrapper>
                      </SwiperSlide>
                    )
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>
        <Categories />
      </div>
    </div>
  );
};

export default Homepage;
