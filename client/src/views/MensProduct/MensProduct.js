import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../Component/ProductCard/ProductCard.js";
import { checkLogin } from '../../utils/auth';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function MensWear() {
 
  const [products, setProducts] = useState([]);

  const loadProducts = async () =>{
    const response = await axios.get("/mensproducts");
    setProducts(response?.data?.data);
  };

  useEffect(()=>{
    checkLogin();
    loadProducts();
  }, []);

  const logout = async () => {
    localStorage.removeItem("user");
    toast.success("USER lOGGED OUT SUCCESSFULLY", {
      position: "top-center",
       autoclose: 700
    });
    window.location.href = "/";
  };



  return (
    <>
    <div>
      <button onClick={logout}>Logout</button>
    </div>
     
      {products?.map((mproduct, index) => {
        const { _id, name, description, price, image, _category} = mproduct;
        return (
          <ProductCard
            key={index}
            id={_id}
            name={name}
            description={description}
            price={price}
            image={image}
            category={_category}
          />
        );
      })}
      <ToastContainer/>
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
