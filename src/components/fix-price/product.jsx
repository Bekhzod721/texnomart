import React, { useContext } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RiScales3Line } from "react-icons/ri";
import { SlBasketLoaded } from "react-icons/sl";
import { Context } from "../../Context/AddCard";
import "./fixPrice.css";
export default function Product({ id, title, price, images, onClick }) {
  return (
    <div className="products">
      <Link to={`product=${id}`}>
        <img className="product__img" src={images[1]} alt="" />
        <span className="product__title">{title}</span>
      </Link>
      <div>
        <strong className="product__price">{price} $</strong>
        <div className="product__btns">
          <button onClick={onClick} className="add__toCart">
            <SlBasketLoaded />
            <span className="toBasket">Savatchaga</span>
          </button>
          <button className="like__btn">
            <AiOutlineHeart />
          </button>
          <button className="scales__btn">
            <RiScales3Line />
          </button>
        </div>
      </div>
    </div>
  );
}
