import React from "react";

const ProductCard = ({ product, onSelect }) => {
  return (
    <div onClick={onSelect} style={{ border: "1px solid #ddd", padding: "10px", cursor: "pointer" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
      <h3>{product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
