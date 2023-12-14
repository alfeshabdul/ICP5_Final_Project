import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ id, name, description, price, image, category }) {
  //   const deleteProduct = async () => {
  //     const response = await axios.delete("/mensproducts/:id");
  //     setProducts(response?.data?.data);
  //   };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />

      <div className="product-info">
        <h2>{name}</h2>
        <span>DESCRIPTION</span>
        <p>{description}</p>
        <p>CATEGORY : {category}</p>
        <span>PRICE</span>
        <h3>₹ {price}</h3>

        <Link className="buy-btn card-btn" to={`/buy/${id}`}>
          Buy Now
        </Link>
        <button className="wishlist-btn card-btn" onClick={`/wishlist/${id}`}>
          Add to Wishlist
        </button>

        <h5 style={{ marginBlock: "2px" }}>CHRISTMAS OFFER</h5>
        <p>FREE SHIPPING OVER ₹ 5000</p>
      </div>
    </div>
  );
}

export default ProductCard;
