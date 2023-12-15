import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MyOrders.css";

function MyOrders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;

    const response = await axios.get(`/orders?id=${user._id}`);

    setOrders(response?.data?.data);
  };

  const deleteOrder = async() => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    const response = await axios.delete(`/orders?id=${user._id}`)
    // localStorage.removeItem("userlogininfo");
  
    if(response.data.success){
      alert(response.data.message);
      window.location.reload();
    }
    
}

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1 className="text-center">My Orders</h1>

      {orders?.map((order, index) => {
        const { product, quantity, shippingAddress } = order;
        return (
          <div key={index} className="order-card">
             <img src={product.image} alt={product.name} className="product-img" />
            <h2>PRODUCT NAME: {product.name}</h2>
            <p>
              {/* {" "} */}
              ₹ {product.price} x {quantity} = ₹ {product.price * quantity}
            </p>
            <p>Shipping Address: {shippingAddress}</p>
            <span onClick={deleteOrder}>🗑</span>
          </div>
        );
      })}
    </div>
  );
}

export default MyOrders;
