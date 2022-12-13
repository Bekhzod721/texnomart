import React, { useContext } from "react";
import "./SeenResently.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import Product from "../fix-price/product";
import { Context } from "../../Context/AddCard";

const SeenResently = () => {
  const [setThumbsSwiper] = useState(null);
  const [poduct, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  });
  const { orderFoods, setOrderFoods } = useContext(Context);
  return (
    <div className="SeenResently">
      <div className="container">
        <div>
          <div className="section__titles">
            <strong className="last__seen section__title">
              Yaqinda ko'rib chiqilgan mahsulotlar
            </strong>
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
            {poduct.slice(100, 125).map((evt, i) => (
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
    </div>
  );
};

export default SeenResently;
