import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdLocalFireDepartment } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://backend.texnomart.uz/api/application/home/popup-categories")
      .then((data) => data.json())
      .then((category) => setCategory(category.data));
  }, []);

  console.log(category.data);

  return (
    <div className="header">
      <div className="container">
        <div className="header__navigations">
          <button onClick={openModal} className="catalog__btn">
            {" "}
            <GrAppsRounded /> Katalog
          </button>
          <Link className="sariq__hafta--link" to={"/"}>
            {" "}
            <AiFillThunderbolt className="thunder" /> SARIQ HAFTA
          </Link>
          <Link className="nav__links" to={"/"}>
            {" "}
            <MdLocalFireDepartment className="fire" /> AKSIYALAR
          </Link>
          <Link className="nav__links" to={"/"}>
            SMARTFONLAR
          </Link>
          <Link className="nav__links" to={"/"}>
            MUZLATKICHLAR
          </Link>
          <Link className="nav__links" to={"/"}>
            CHANGYUTGICHLAR
          </Link>
          <Link className="nav__links" to={"/"}>
            HAVO SOVUTGICHLAR
          </Link>
          <Link className="nav__links" to={"/"}>
            TELEVIZORLAR
          </Link>
          <Link className="nav__links" to={"/"}>
            BARCHA KATEGORIYALAR
          </Link>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Katalog</h2>
        {category && category.map((ctg) => <h1>{ctg.category}</h1>)}
      </Modal>
    </div>
  );
};

export default Header;
