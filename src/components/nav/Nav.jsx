import React from "react";
import './Nav.css'
import GrLocation from "react-icons/gr"
import { Link } from 'react-router-dom'
import locationImage from "../../assets/header-location.svg"
import { useState } from "react";

const Nav = () => {
  const [selectedOption, setSelectedOption] = useState("Toshkent shahar");
  const data = [
    {
      id:1,
      title:"Toshkent shahar"
    },
    {
      id:2,
      title:"Toshkent viloyati"
    },
    {
      id:3,
      title:"Buxoro viloyati"
    },
    {
      id:4,
      title:"Andijon viloyati"
    },
    {
      id:5,
      title:"Farg'ona viloyati"
    },
    {
      id:6,
      title:"Namangan viloyati"
    },
    {
      id:7,
      title:"Samarqand viloyati"
    },
    {
      id:8,
      title:"Qoraqalpog'iston Respublikasi"
    }
  ]

  return(
    <div className="site__nav">
      <div className="container nav">
      <div className="selection"> 
      <img src={locationImage} alt="" />
      <select className="region__selection" 
      style={selectedOption.length <= 7 ? {width:`${selectedOption.length * 14}px`} : {width:`${selectedOption.length * 10}px`}} onChange={(e) => {setSelectedOption(e.target.value)}}>
           {
            data.map((evt, i) => (
              <option className="region__option" key={i} value={evt.title}>{evt.title}</option>
            ))
           }
        </select>
      </div>
      <div className="nav__links">
        <Link className="nav__link" to={"/"}>Bizning do'konlarimiz</Link>
        <Link className="nav__link" to={"/"}>B2B savdosi</Link>
        <Link className="nav__link" to={"/"}>Muddatli to'lovga sotib olish</Link>
        <Link className="nav__link" to={"/"}>To'lov usullari</Link>
        <Link className="nav__link" to={"/"}>Mahsulotlar uchun kafolat</Link>
      </div>
      <div className="contact">
           <a className="phone__number" href="tel:+998972099944">Aloqa markazi:  <strong>  +998972099944</strong> </a>
           <div className="language__selection">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe-central-south-asia earth" viewBox="0 0 16 16">  
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM4.882 1.731a.482.482 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.72.721 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a.996.996 0 0 0-.462-.04 7.03 7.03 0 0 1 2.45-2.027Zm-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.78.78 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.454.454 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282a.61.61 0 0 0 .04-.001 7.003 7.003 0 0 1-12.658.905Z"/>
          </svg>
           <select className="language__select">
            <option value="uzb">Uzb</option>
            <option value="ru">Рус </option>
           </select>
           </div>
      </div>


      </div>
    </div>
  )
}
export default Nav