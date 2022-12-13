import React, { useContext } from "react";
import "./Collections.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiScales3Line } from "react-icons/ri";
import { SlBasketLoaded } from "react-icons/sl";
import { Context } from "../../Context/AddCard";
import Product from "../fix-price/product";

const Collections = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [poduct, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  });
  const { orderFoods, setOrderFoods } = useContext(Context);
  return (
    <>
      <div className="container">
        <div>
          <div className="section__titles">
            <div>
              <strong className="zor__narx section__title">To'plamlar</strong>
              <p className="explanation">Sizga tafsiya qilamiz</p>
            </div>
            <Link className="section__link" to={"/"}>
              Barchasini ko'rish <AiOutlineArrowRight className="arrow" />
            </Link>
          </div>
          <br />
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={20}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper  third__swiper"
          >
            {poduct.slice(51, 80).map((evt, i) => (
              <SwiperSlide className="products" key={i} value={evt.data}>
                <Product
                  key={evt.id}
                  id={evt.id}
                  title={evt.title}
                  images={evt.images}
                  price={evt.price}
                  onClick={(e) => {
                    const foundFood = poduct.find((pro) => pro.id === evt.id);
                    foundFood.count = foundFood.count ? foundFood.count + 1 : 1;
                    const uniqueArr = [...new Set([...orderFoods, foundFood])];
                    setOrderFoods(uniqueArr);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Collections;
