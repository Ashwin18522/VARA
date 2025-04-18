import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/Products';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.product_id === parseInt(id));
  const { addToCart } = useContext(ShopContext); // 🛒 access context

  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found!</h2>;

  const handleQuantityChange = (amount) => {
    setQuantity((prevQty) => Math.max(prevQty + amount, 1));
  };

  const handleAddToCart = () => {
    addToCart(product.product_id, quantity);
    alert(`${quantity} item(s) added to cart!`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-images">
        <img src={product.image_url} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>

        <div className="quantity">
          <label>Quantity:</label>
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <input
              type="number"
              min="1"
              value={quantity}
              readOnly
            />
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Add {quantity} to Cart (₹{quantity * product.price})
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
