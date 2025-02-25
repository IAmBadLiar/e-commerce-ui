import React from "react";

const ProductModal = ({ product, onClose, addToCart }) => {
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeBtn}>❌</button>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ width: "200px" }} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => { addToCart(); onClose(); }} style={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" },
  modalContent: { background: "#fff", padding: "20px", borderRadius: "10px", width: "400px" },
  closeBtn: { position: "absolute", top: "10px", right: "10px", cursor: "pointer" },
  addToCartBtn: { padding: "10px", background: "green", color: "white", cursor: "pointer" }
};

export default ProductModal;
