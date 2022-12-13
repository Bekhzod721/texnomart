import React, { useContext } from "react";
import "./XitSale.jsx";
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
import Product from "../fix-price/product";
import { Context } from "../../Context/AddCard";

const XitSale = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [poduct, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  });
  const { orderFoods, setOrderFoods } = useContext(Context);
  return (
    <div>
      <div className="container">
        <div>
          <div className="section__titles">
            <strong className="zor__narx section__title">Xit Savdo</strong>
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
            {poduct.slice(160, 200).map((evt, i) => (
              <SwiperSlide
                className="products xit__sale--product"
                key={i}
                value={evt.data}
              >
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

export default XitSale;
