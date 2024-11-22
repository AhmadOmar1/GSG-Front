import React from "react";
import "./Product.css";
import { Product } from "../types/Product";

const ProductCard: React.FC<Product> = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
