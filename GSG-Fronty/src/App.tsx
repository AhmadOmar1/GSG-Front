import React, { useState } from "react";
import "./App.css";
import ProductCard from "./components/Product";
import { products } from "./fixtures/products";
import { getTotalPrice, isValidEmailRegex } from "./utils";

const App = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(isValidEmailRegex(newEmail)); // Check email validity
  };

  return (
    <div className="app">
      <h1 className="app-title">REAAAAAAAAACT!!</h1>

      <div className="email-container">
        <h4>Enter your email:</h4>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
        <div className="email-result">
          {isEmailValid ? (
            <p className="valid-email">Valid Email</p>
          ) : (
            <p className="invalid-email">Invalid Email</p>
          )}
        </div>
      </div>

      {/* Product List Section */}
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      {/* Total Price Section */}
      <div className="total-price">
        <h3>Total Price: ${getTotalPrice(products).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default App;
