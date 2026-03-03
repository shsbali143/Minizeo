import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser, faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";

function Header({ isDarkMode, toggleTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      fetch("https://dummyjson.com/products/search?q=" + searchQuery)
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data.products || []);
          setShowResults(true);
        })
        .catch(() => setSearchResults([]));
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleResultClick = (productId) => {
    navigate(`/products/${productId}`);
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <div className="header-logo">
          Mini<span>zeo</span>
        </div>

        {/* SEARCH */}
        <div className="header-search-wrapper">
          <div className="header-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 300)}
            />
          </div>

          {/* SEARCH RESULTS DROPDOWN */}
          {showResults && searchResults.length > 0 && (
            <div 
              className="search-results"
              onMouseDown={(e) => e.preventDefault()}
            >
              {searchResults.slice(0, 5).map((product) => (
                <div 
                  key={product.id} 
                  className="search-result-item"
                  onClick={() => handleResultClick(product.id)}
                  role="button"
                  tabIndex="0"
                >
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="result-info">
                    <p className="result-title">{product.title}</p>
                    <p className="result-price">₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showResults && searchResults.length === 0 && searchQuery && (
            <div className="search-results">
              <div className="no-results">No products found</div>
            </div>
          )}
        </div>

        {/* MENU */}
        <div className="header-menu">
          <div className="header-menu-items">
            <span onClick={() => navigate('/cart')} className="menu-btn cart-btn">
              <FontAwesomeIcon icon={faCartShopping} /> Cart
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </span>
            <span onClick={() => navigate('/profile')} className="menu-btn profile-btn">
              <FontAwesomeIcon icon={faUser} /> Profile
            </span>
            <span className="menu-btn order-btn">
              <FontAwesomeIcon icon={faBars} /> Order
            </span>
          </div>
          
          {/* THEME TOGGLE */}
          <span className="theme-toggle" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </span>
        </div>

      </div>
    </header>
  );
}

export default Header;
