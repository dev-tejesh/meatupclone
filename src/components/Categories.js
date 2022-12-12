import React from "react";
import { CategoriesItems } from "../data";
import styled from "styled-components";
import "./Homepage.css";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const Categories = () => {
    
    // const [slideIndex, setSlideIndex] = useState(0);
    const slideIndex = 0;
  
    const Wrapper = styled.div`
      height: 100%;
      display: flex;
      transition: all 1.5s ease;
      // transform: translateX(${(props) => props.slideIndex * -480}px);
    `;
    return (
      <div className="bgcolor">
        <div className="neededflex">
          <div className="most">
            <div className="popular" style={{marginTop:"50px"}}>Categories</div>
           
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
                {CategoriesItems.map(
                  (item) => (
                    console.log(item)
                    (
                      <SwiperSlide>
                        <Wrapper slideIndex={slideIndex}>
                          <div className="popularflex">
                            <div className="popularcontainer">
                              <img
                                className="responsiveimage"
                                src={item.img}
                                alt="alternative "
                              />
                            </div>
                            <div style={{color:"red",paddingTop:"30px",paddingBottom:"30px",fontSize:"larger",fontWeight:"bold",textAlign:"center"}}>{item.title}</div>
                            {/* <div className="popularitemtitle">{item.id}</div>
                            <div className="piecesflex">
                              <div className="pieces">pieces: 12-15</div>
                              <div className="netweight">Net Weight: 500gms</div>
                            </div>
                            <div className="costflex">
                              <del className="delete">{item.delprice}</del>
                              <div className="cost">{item.actualprice}</div>
                            </div>
                            <div className="buttonflex">
                              <button className="button">Buy Now</button>
                              <button className="button">Add To Cart</button>
                            </div> */}
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
        
      </div>
    );
}

export default Categories