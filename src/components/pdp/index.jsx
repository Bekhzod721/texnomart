import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./pdp.css";

const ProductAbout = () => {
  var { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  console.log(product);

  return (
    <div className="container">
      <div className="pdp">
        <img className="pdp__img" src={product?.category?.image} alt="" />
        <div>
          <h2 className="pdp__title">{product?.title}</h2>
          <p className="pdp__description">{product?.description}</p>
          <h3 className="pdp__price">{product?.price} $</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
