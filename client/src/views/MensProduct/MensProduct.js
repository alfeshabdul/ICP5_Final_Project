import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Component/ProductCard/ProductCard.js";
import { checkLogin } from "../../utils/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "./MensProduct.css";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer.js";

function MensWear() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get("/mensproducts");
    setProducts(response?.data?.data);
  };

  useEffect(() => {
    checkLogin();
    loadProducts();
  }, []);

  const logout = async () => {
    localStorage.removeItem("user");
    toast.success("USER lOGGED OUT SUCCESSFULLY", {
      position: "top-center",
      autoclose: 700,
    });
    window.location.href = "/";
  };

  return (
    <>
      <div className="nav-menus-div">
        <Link to="/" className="home-link">
          Home
        </Link>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
     
      {products?.map((mproduct, index) => {
        const { _id, name, description, price, image, category } = mproduct;
        return (
          <ProductCard
            key={index}
            id={_id}
            name={name}
            description={description}
            price={price}
            image={image}
            category={category}
          />
        );
      })}
      <ToastContainer />
      <Footer />
    </>
  );
}

export default MensWear;

// http://localhost:5000/mensproducts

// {
//   "name": "KNITTED SWEATER",
//   "description": "TRIANGLE COLLAR KNIT HALF-ZIP SWEATER",
//   "price": "2780",
//   "image": "https://ohgarments.com/cdn/shop/products/oh-triangle-collar-knit-half-zip-oh-atelier-684423588268o-433-1_900x.jpg?v=1679638834"
// }
