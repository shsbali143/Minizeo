import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);   // ✅ start true
  const [error, setError] = useState("");
  const [isDarkMode] = useState(() => 
    document.body.classList.contains('dark-mode')
  );

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setError("");
        setLoading(false);
      })
      .catch(() => {
        setError("Product not found or something went wrong");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.title} added to cart!`);
    }
  };

  /* 🔄 Loader */
  if (loading) {
    return <Loader text="Loading product details..." />;
  }

  /* ❌ Error */
  if (error) {
    return <h3 className="error">{error}</h3>;
  }

  /* ❌ Safety check */
  if (!product) {
    return <h3 className="error">No product data available</h3>;
  }

  /* ✅ UI */
  return (
    <div className={`product-details ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="title">{product.title}</h2>

      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <p><strong>Price:</strong> ₹{product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <p className="description">
        <strong>Description:</strong> {product.description}
      </p>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
