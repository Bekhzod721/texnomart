import React, { useContext } from "react";
import "./navbar.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { GiScales } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import Modal from "react-modal";
import { Context } from "../../Context/AddCard";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10 !important",
  },
};

function Navbar({ setIsNavbarSearchActive }) {
  const [selectedOption, setSelectedOption] = useState("all");
  /********************modal********************* */
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  let [count, setCount] = useState(1);
  const { orderFoods, setOrderFoods } = useContext(Context);

  function incrementCount() {
    count = count - 0 + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count <= 0) {
      count = 1;
    }
    count = count - 1;
    setCount(count);
  }

  return (
    <header className="main__header">
      <div className="container">
        <div className="header__logo-wrapper">
          <a href="/" className="logo__link">
            <img className="header__logo" src={logo} alt="" />
          </a>
        </div>
        <div className="header__search-wrapper ">
          <select
            className="search__select"
            style={
              selectedOption.length <= 7
                ? { width: `${selectedOption.length * 62}px` }
                : { width: `${selectedOption.length * 10}px` }
            }
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option value="barcha texnologiyalari">Barcha kategoriyalar</option>
            <option value="Maishiy texnika">Maishiy texnika</option>
            <option value="Ofis jixozlari">Ofis jixozlari</option>
            <option value="uy uchun idishlar">Uy uchun idishlar</option>
            <option value="Avtomobil uchun mahsulotlar">
              Avtomobil uchun mahsulotlar
            </option>
            <option value="Iqlim texnikasi">Iqlim texnikasi</option>
            <option value="Televizorlar va telekartalar">
              Televizorlar va telekartalar
            </option>
            <option value="Telefonlar va gadjetlar">
              Telefonlar va gadjetlar
            </option>
          </select>
          <label className="navbar-label" htmlFor="">
            <input
              type="text"
              className="search__input"
              onBlur={() => {
                setIsNavbarSearchActive(false);
              }}
              onFocus={() => {
                setIsNavbarSearchActive(true);
              }}
            />
          </label>
          <div className="serch__btns">
            <MdOutlineKeyboardVoice className="voice__btn" />
            <button className="search__btn">
              <FiSearch className="fisearch" />
            </button>
          </div>
        </div>

        <div className="navbar__elements">
          <div className="orderbox__btn elements">
            <BsBoxSeam className="icons" />
            <span>Buyurtma holati</span>
          </div>
          <a href="/login" className="navbar__links">
            <div className="login__btn elements">
              <BsPerson className="icons" />
              <span>Kirish</span>
            </div>
          </a>
          <div className="scales__btn elements">
            <GiScales className="icons" />
            <span>Taqqoslash</span>
          </div>
          <div className="liked__btn elements">
            <AiOutlineHeart className="icons" />
            <span>Sevimlilar</span>
          </div>
          <div className="elements">
            <button onClick={openModal} className="basket__btn elements">
              <SlBasket className="icons" />
              {orderFoods.length > 0 && (
                <p className="basket__box">
                  <SlBasket className="icons" />
                  <span className="count">{orderFoods.length}</span>
                </p>
              )}
              <span>Savatcha</span>
            </button>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-box">
            {orderFoods.length > 0 ? (
              <ul className="modal-list">
                {orderFoods.map((food, i) => (
                  <li key={i} className="modal-item">
                    <img className="modal-img" alt="dsd" src={food.images[1]} />
                    <p className="modal-title">{food.title}</p>
                    <div className="modal-blok">
                      <button className="modal-minus" onClick={decrementCount}>
                        -
                      </button>
                      <span className="modal-count">{count}</span>
                      <button className="modal-plus" onClick={incrementCount}>
                        +
                      </button>
                    </div>
                    <p className="modal-price">
                      {(food.price * count).toFixed(1)} сум
                    </p>
                    <button
                      className="modal-btn"
                      onClick={() => {
                        setOrderFoods(
                          orderFoods.filter((ovqat) => ovqat.id !== food.id)
                        );
                      }}
                    >
                      remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="modal-context">Siz hali buyurtma qilmadingiz</div>
            )}
          </div>
        </Modal>
      </div>
    </header>
  );
}
export default Navbar;
