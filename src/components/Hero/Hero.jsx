import React, { useState, useEffect } from 'react';
import './Hero.css';
import TrainEngine from '../Assets/images/TrainEngine.jpeg';
import CatCounting from '../Assets/images/Cat Counting.jpeg';
import Bangles from '../Assets/images/Bangles.jpeg';

const images = [TrainEngine, CatCounting, Bangles];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="carousel-track"
       style={{transform: `translateX(-${current*100}%)`}}
      >
        {images.map((img,i)=>(
          <img key = {i} src = {img} alt = {`slide-${i}`}/>))}
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
