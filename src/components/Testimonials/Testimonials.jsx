// import React, { useState, useEffect } from 'react';
// import './Testimonials.css';
// import user1 from '../Assets/images/user1.jpg';
// import user2 from '../Assets/images/user2.jpg';
// import user3 from '../Assets/images/user3.jpg';

// const testimonialData = [
//   {
//     name: 'Aisha Malik',
//     title: 'Artist & Collector',
//     quote: 'I absolutely love the handcrafted items! This site makes finding beautiful, unique things so easy.',
//     image: user1,
//   },
//   {
//     name: 'Ravi Kumar',
//     title: 'Designer',
//     quote: 'The attention to detail and thoughtful curation really sets this place apart.',
//     image: user2,
//   },
//   {
//     name: 'Leila Fernandez',
//     title: 'Photographer',
//     quote: 'Great community and amazing finds. I come back every month to see what’s new!',
//     image: user3,
//   },
// ];

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   // Optional autoplay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonialData.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="testimonials">
//       <h2>What Our Visitors Say</h2>
//       <div className="testimonial-slide">
//         <img src={testimonialData[current].image} alt={testimonialData[current].name} />
//         <p className="quote">“{testimonialData[current].quote}”</p>
//         <h4>{testimonialData[current].name}</h4>
//         <span className="title">{testimonialData[current].title}</span>
//       </div>
//       <div className="testimonial-dots">
//         {testimonialData.map((_, i) => (
//           <span
//             key={i}
//             className={`dot ${i === current ? 'active' : ''}`}
//             onClick={() => setCurrent(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
