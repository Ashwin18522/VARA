import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/Products';
import './CSS/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.product_id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail-container">
      <div className="product-images">
      <img src={product.image_url} alt={product.name} />

      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>

        <div className="size-select">
          <label>Select Size:</label>
          <div className="sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button key={size}>{size}</button>
            ))}
          </div>
        </div>

        <div className="quantity">
          <label>Quantity:</label>
          <input type="number" min="1" defaultValue="1" />
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
