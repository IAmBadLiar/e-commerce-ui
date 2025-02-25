import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = ({ onCategorySelect, cartCount }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <header style={styles.header}>
      <h1>My Store</h1>
      <select onChange={(e) => onCategorySelect(e.target.value)} style={styles.select}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div style={styles.cart}>
        🛒 <span>{cartCount}</span>
      </div>
    </header>
  );
};

const styles = {
  header: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "#fff" },
  select: { padding: "5px" },
  cart: { fontSize: "1.5rem" }
};

export default Header;
