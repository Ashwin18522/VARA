import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import products from '../Data/Products';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';

const ShopCategory = ({ category }) => {
  const { addToCart } = useContext(ShopContext);

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <h1 className="category-title">{category.toUpperCase()}</h1>
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div key={item.product_id} className="product-card">
            <Link to={`/product/${item.product_id}`}>
              <img src={item.image_url} alt={item.name} />
            </Link>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>₹{item.price}</p>

            <button
              className="add-to-cart-button"
              onClick={() => addToCart(item.product_id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
