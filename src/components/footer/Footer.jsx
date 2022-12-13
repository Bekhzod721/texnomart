import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import {IoMdChatbubbles} from "react-icons/io"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
       <div className="footer__content">
       <div className="footer__stake">
          <div className="stake">
            <p className="stake1__question">
              Savolingiz bormi? Qo'ng'iroq qiling
            </p>
            <a className="phone__link" href="tel:+998 71 209 99 44">
              +998 71 209 99 44
            </a>
            <div className="stake1__social">
              <Link className="social__links" to={"/"}>
                <FiFacebook />
              </Link>
              <Link className="social__links" to={"/"}>
                <TbBrandTelegram />
              </Link>
              <Link className="social__links" to={"/"}>
                <BsInstagram />
              </Link>
              <Link className="social__links" to={"/"}>
                <FiYoutube />
              </Link>
            </div>
            <img
              className="play__market"
              src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.793161d.svg"
              alt=""
            />
            <Link className="address" to={"/"}>
              Do`konlar manzillari Toshkent
            </Link>
          </div>
          <div className="stake">
            <span className="stake__title">Kompaniya</span>
            <Link className="stake__link" to={"/"}>
              B2B savdosi
            </Link>
            <Link className="stake__link" to={"/"}>
              Biz haqimizda
            </Link>
            <Link className="stake__link" to={"/"}>
              Yangiliklar va sharhlar
            </Link>
            <Link className="stake__link" to={"/"}>
              IMEI ni tekshirish
            </Link>
          </div>
          <div className="stake">
            <span className="stake__title">Ma'lumot</span>
            <Link className="stake__link" to={"/"}>
              Bepul yetkazib berish
            </Link>
            <Link className="stake__link" to={"/"}>
              Bonus tizimi
            </Link>
            <Link className="stake__link" to={"/"}>
              Texnomartda ishlash
            </Link>
            <Link className="stake__link" to={"/"}>
              Shaxsiy kabinet
            </Link>
            <Link className="stake__link" to={"/"}>
              Aloqa raqamlari
            </Link>
          </div>
          <div className="stake">
            <span className="stake__title">Haridorga yordam</span>
            <Link className="stake__link" to={"/"}>
              Muddatli to'lovga sotib olish
            </Link>
            <Link className="stake__link" to={"/"}>
              Maxsulotni qaytarish
            </Link>
            <Link className="stake__link" to={"/"}>
              Mahsulotlar uchun kafolat
            </Link>
            <Link className="stake__link" to={"/"}>
              Ko'p so'raladigan savollar
            </Link>
            <Link className="stake__bonus" to={"/"}>
              <TbBrandTelegram /> Bonusingizni bilib oling
            </Link>
          </div>
          <div className="scrollTop">
            <Link className="scroll__links" to={"/"}>
              {" "}
              <img className="toTop"
                src="https://texnomart.uz/_nuxt/img/scroll-top.5927360.svg"
                alt=""
              />{" "}
            </Link>
            <Link className="scroll__links" to={"/"}> <img className="tg__logo" src="https://texnomart.uz/_nuxt/img/telegram-fixed.a5368ed.svg" alt="" /> </Link>
            <Link className="scroll__links" to={"/"}> <IoMdChatbubbles className="chat__logo"/> </Link>
          </div>
        </div>
        <hr className="hr" />
        <div className="down">
          <p className="footer__down--copyright">2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi</p>
          <ul className="payment__list">
            <li className="payment__item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII=" alt="" /> </li>
            <li className="payment__item"><img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" /></li>
            <li className="payment__item"><img src="https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" /></li>
            <li className="payment__item"><img src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png" alt="" /></li>
            <li className="payment__item"><img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" /></li>
          </ul>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
