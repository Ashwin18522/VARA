import React from 'react';
import products from '../Data/Products'; // Adjust the path if needed
import './CSS/ShopCategory.css';
import { Link } from 'react-router-dom';

const ShopCategory = ({ category }) => {
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
