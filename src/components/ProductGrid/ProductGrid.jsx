import React from "react";
import './ProductGrid.css'; // Add CSS for styling

import Bangles from '../Assets/images/Bangles.jpeg';
import BigBunny from '../Assets/images/bigBunny.jpeg';
import CatCounting from '../Assets/images/Cat Counting.jpeg';
import GiantWheel from '../Assets/images/Gaint Wheel.jpeg';

const products = [
  { id: 1, name: "Bangles", price: "₹2999", image: Bangles},
  { id: 2, name: "Big Bunny", price: "₹4999", image: BigBunny  },
  { id: 3, name: "Cat Counting", price: "₹1999", image: CatCounting},
  { id: 4, name: "Giant Wheel", price: "₹999", image: GiantWheel },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductGrid;
