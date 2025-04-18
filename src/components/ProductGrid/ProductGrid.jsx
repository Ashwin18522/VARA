import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import products from "../../Data/Products";
import './ProductGrid.css';

const ProductGrid = () => {
  const { addToCart } = useContext(ShopContext);  // 🛒 Access context

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.product_id} className="product-card">
          <Link to={`/product/${product.product_id}`}>
            <img 
              src={product.image_url} 
              alt={product.name} 
              className="product-image" 
            />
          </Link>

          <div className="product-info">
            <Link to={`/product/${product.product_id}`} className="product-name-link">
              <h3 className="product-name">{product.name}</h3>
            </Link>

            <p className="product-price">₹{product.price}</p>

            <button 
              className="product-button" 
              onClick={() => addToCart(product.product_id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
