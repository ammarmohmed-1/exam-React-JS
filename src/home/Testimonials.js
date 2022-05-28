
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// img

import img_1 from "./img/my_img.jpeg"
import img_2 from "./img/my_img2.jpeg"

function Testimonials() {
  return (
    <div className="Testimonials">
        <h1>Testimonials</h1>
        <div>
            <Swiper className="mySwiper">
            <SwiperSlide>
                    <img src={img_2} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto, dolores mollitia dolorem voluptatem illum 
                        consectetur ipsa fugit eius voluptatum. Aspernatur, veritatis 
                        enim?
                    </p>
                    <a href="#">ammar mohmed -- FrontEnd</a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_1} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto, dolores mollitia dolorem voluptatem illum 
                        consectetur ipsa fugit eius voluptatum. Aspernatur, veritatis 
                        enim?
                    </p>
                    <a href="#">ammar mohmed -- FrontEnd</a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img_2} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Architecto, dolores mollitia dolorem voluptatem illum 
                        consectetur ipsa fugit eius voluptatum. Aspernatur, veritatis 
                        enim?
                    </p>
                    <a href="#">ammar mohmed -- FrontEnd</a>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials;