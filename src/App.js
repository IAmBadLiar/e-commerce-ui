import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header onCategorySelect={setSelectedCategory} cartCount={cartCount} />
      <Home selectedCategory={selectedCategory} addToCart={() => setCartCount(cartCount + 1)} />
    </div>
  );
};

export default App;
