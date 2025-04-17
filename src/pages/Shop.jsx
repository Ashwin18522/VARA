import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import Intro from '../components/Intro/Intro.jsx'
import ProductGrid from '../components/ProductGrid/ProductGrid.jsx';
function Shop() {
    return (
        <div>
            <Hero/>
            <Intro/>
            <ProductGrid/>
        </div>
    );
}

export default Shop;