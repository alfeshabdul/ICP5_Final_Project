import React from "react";
import "./MensWear.css";
import ShirtImg from "./img/shirt-img.jpg";
import ShirtImg2 from "./img/shirt2.jpg";
import PantImg from "./img/pant1.jpg";
import PantImg2 from "./img/pant2.jpg";
import BlazerImg from "./img/blazer-img.jpg";
import BlazerImg2 from "./img/blazer2.jpg";
import TshirtImg from "./img/t-shirt-img.jpg";
import TshirtImg2 from "./img/tshirt2.jpg";
import { Link } from "react-router-dom";

function MensWear() {
  return (
    <>
      <div className="img-div">
        <div className="mimages">
          <img src={ShirtImg} alt="" className="shirt-img" />
          <img src={ShirtImg2} alt="" className="shirt-img" />
          <Link to="/mensproducts" className="menswear-link color-black">
            SHIRTS
          </Link>
        </div>

        <div className="mimages">
          <img src={TshirtImg} alt="" className="tshirt-img" />
          <img src={TshirtImg2} alt="" className="tshirt-img" />
          <Link to="/mensproducts" className="menswear-link">
            T-SHIRTS
          </Link>
        </div>
      </div>
      <div className="img-div">
        <div className="mimages">
          <img src={BlazerImg} alt="" className="blazer-img" />
          <img src={BlazerImg2} alt="" className="blazer-img" />
          <Link to="/mensproducts" className="menswear-link">
            BLAZERS
          </Link>
        </div>

        <div className="mimages">
          <img src={PantImg} className="pant-img " alt="" />
          <img src={PantImg2} className="pant-img " alt="" />
          <Link to="/mensproducts" className="menswear-link color-black">
            PANTS
          </Link>
        </div>
      </div>
    </>
  );
}

export default MensWear;
