import React, { useContext } from "react";
import "./fixPrice.css";
import { useState } from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link, useParams } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useEffect } from "react";
import { Context } from "../../Context/AddCard";
import Product from "./product";
 import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
const FixPrice = () => {
  var { id } = useParams();

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
            <strong className="zor__narx section__title"> Zo'r narx</strong>
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
            {poduct.slice(130, 150).map((evt, i) => (
              <SwiperSlide className="products"key={evt.id}
              >


                 <Product  key={evt.id}
              id={evt.id} title={evt.title} images={evt.images} price={evt.price}
                onClick={(e) => {
                  const foundFood = poduct.find((pro) => pro.id === evt.id);
                  foundFood.count = foundFood.count ? foundFood.count + 1 : 1;
                  const uniqueArr = [...new Set([...orderFoods, foundFood])];    
                  setOrderFoods(uniqueArr);
                }} /> 


              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FixPrice;
