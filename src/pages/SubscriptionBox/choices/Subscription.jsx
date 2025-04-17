import React from 'react';
import './Subscription.css';
import basicBox from '../../../components/Assets/images/Snail.jpeg';
import premiumBox from '../../../components/Assets/images/Soldiers.jpeg';
import standardBox from '../../../components/Assets/images/Scooter.jpeg';
import trialBox from '../../../components/Assets/images/Train.jpeg';

const Subscription = () => {
  const boxes = [
    { img: trialBox, title: "Trial Box", desc: "Get a single themed toy box of your choice. Perfect for gifting or trying it out!" },
    { img: basicBox, title: "Basic Box", desc: "Enjoy three months of fun with a new themed box every month!" },
    { img: standardBox, title: "Standard Box", desc: "Half a year of handcrafted joy, plus a bonus surprise toy in your last box!" },
    { img: premiumBox, title: "Premium Box", desc: "A year of fun-filled Channapatna toys! Get an exclusive limited-edition toy in the final month!" },
  ];

  return (
    <div className="subscription-grid">
      {boxes.map((box, index) => (
        <div className="subscription-card" key={index}>
          <img src={box.img} alt={box.title} className="subscription-card-image" />
          <div className="subscription-card-content">
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Subscription;
