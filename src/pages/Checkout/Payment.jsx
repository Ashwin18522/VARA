// src/pages/Payment/PaymentPage.jsx
import React from 'react';
import './Payment.css';

const Payment = () => {
  const handlePayment = async () => {
    const res = await fetch("http://localhost:8000/create-order", {
      method: "POST",
    });
    const data = await res.json();

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: data.amount,
      currency: "INR",
      name: "Vara Toys",
      description: "Subscription Box",
      order_id: data.id,
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
      },
      prefill: {
        name: "Ashwin",
        email: "ashwin@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Purchase</h2>
      <p>Click the button below to make a secure payment through Razorpay.</p>
      <button className="pay-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
