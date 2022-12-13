import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";
 import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs"
import "./mainSwiper.css"

const MainSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [ 
    {
      id:1,
      image:"https://backend.texnomart.uz//images/brands/2022101404154940058.webp"
    },
    {
      id:2,
      image:"https://backend.texnomart.uz//images/brands/2022101404501355729.webp"
    },
    {
      id:3,
      image:"https://backend.texnomart.uz//images/brands/2022101404542676301.webp"
    },
    {
      id:4,
      image:"https://backend.texnomart.uz//images/brands/2022101404481916020.webp"
    },
    {
      id:5,
      image:"https://backend.texnomart.uz//images/brands/2022101405315369098.webp"
    },
    {
      id:6,
      image:"https://backend.texnomart.uz//images/brands/2022101404183539183.webp"
    },
    {
      id:7,
      image:"https://backend.texnomart.uz//images/brands/2022101404450190315.webp"
    },
    {
      id:8,
      image:"https://backend.texnomart.uz//images/brands/2022101404474125545.webp"
    },
    {
      id:9,
      image:"https://backend.texnomart.uz//images/brands/2022101404461797247.webp"
    },
    {
      id:10,
      image:"https://backend.texnomart.uz//images/brands/2022101404240931733.webp"
    }
  ]
  return (

    <>
      <div className="container">
      <Swiper 
        onSwiper={setThumbsSwiper}
        slidesPerView={8}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs ]}
        className="mySwiper mainSwipe"
      >
        {
            data.map((evt, i) => (
              <SwiperSlide className="brands" key={i} value={evt.image}> <img className="brand__img" src={evt.image} alt="" /></SwiperSlide>
            ))
           }
      </Swiper>   
  
      </div>
    </>
  )
}

export default MainSwiper;