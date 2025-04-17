import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartIcon = (cartCount,name) => {
    const showCartCount = () => {
    if(!cartCount){
        return `0`;
    }
    if(cartCount>9){
        return (
            <span style = {{fontSize: 'smaller'}}>
                9<sup>+</sup>
            </span>
        )
    }
    return `(${cartCount})`
    }
    return (
        <div>
            <FaShoppingCart name = "cart" />
            {` ${name}`}
            {showCartCount()}
        </div>
    )
}

export default ShoppingCartIcon
