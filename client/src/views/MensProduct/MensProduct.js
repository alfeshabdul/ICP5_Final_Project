import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard.js";

function MensWear() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get('/mensproducts');
    setProducts(response?.data?.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
     
      {products?.map((mproduct, index) => {
        const { _id, name, description, price, image, category} = mproduct;
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
