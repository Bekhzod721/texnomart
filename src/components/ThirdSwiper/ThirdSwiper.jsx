import React from 'react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
 import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs"
import "./ThirdSwiper.css"

const ThirdSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      id:1,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg",
      title:"Changyutkichlar"
    },
    {
      id:2,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg",
      title:"Planshetlar"
    },
    {
      id:3,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg",
      title:"Muzlatkichlar"
    },
    {
      id:4,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg ",
      title:"Havo sovutkichlar"
    },
    {
      id:5,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg",
      title:"Televizorlar"
    },
    {
      id:6,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg",
      title:"Fenlar"
    },
    {
      id:7,
      image:"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg",
      title:"Kir yuvish mashinalari"
    }

    
  ]
  return (
    
    <div className="container">
        <div>
        <span className='ommabop__categoriyalar section__title'> Ommabop Kategoriyalar</span>
        <br />

      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs ]}
        className="mySwiper  third__swiper"
      >
        {
            data.map((evt, i) => (
              <SwiperSlide className="categories" key={i} value={evt.data}><img className='category__img' src={evt.image} alt="" /> <span className='category__title'>{evt.title}</span> </SwiperSlide>
            ))
           }
      </Swiper>   
  
    </div>
      </div>
  )
}

export default ThirdSwiper