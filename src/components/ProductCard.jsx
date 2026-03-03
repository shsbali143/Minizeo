import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-card-image"
        onClick={() => navigate(`/products/${product.id}`)}
        style={{ cursor: 'pointer' }}
      />
      <h4 onClick={() => navigate(`/products/${product.id}`)} style={{ cursor: 'pointer' }}>
        {product.title}
      </h4>
      <p>₹{product.price}</p>
      <button 
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
