import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Home = ({ selectedCategory, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const url = selectedCategory 
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : "https://fakestoreapi.com/products";

    axios.get(url)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onSelect={() => setSelectedProduct(product)} />
      ))}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Home;
