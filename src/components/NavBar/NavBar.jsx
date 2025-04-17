import React from 'react'
import './NavBar.css'
import shopping_cart from '../Assets/shopping_cart.jpg'
import varaLogo from '../Assets/images/light_mode_logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [menu,setMenu] = useState("Home");
    const [showDropdown, setShowDropdown] = useState(false); 

    return(
        <div className = 'navbar'>
            <div>
            <Link to = '/VARA' onClick={()=>setMenu("Home")}><img src = {varaLogo} alt = "" className='vara-icon' /></Link>    {/*similarly put a classname,img,css for the vara logo */}
            </div>
            <ul className = 'nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration : 'none'}} to = '/VARA'>Home</Link>{menu==='Home'?<hr></hr>:<></>}</li>    
            <li onClick={()=>{setMenu("Toys")}}><Link to = '/toys'>Toys</Link>{menu==='Toys'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("Accessories")}}><Link to = '/accessories'>Accessories</Link>{menu==='Accessories'?<hr></hr>:<></>}</li>
            {/* <li onClick={()=>{setMenu("Gifts")}}><Link to = '/gifts'>Gifts</Link>{menu==='Gifts'?<hr></hr>:<></>}</li> */}
            <li onClick={()=>{setMenu("Subscription Box")}}><Link to = '/subscription-box'>Subscription Box</Link>{menu==='Subscription Box'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("Decor")}}><Link to = '/decor'>Decor</Link>{menu==='Decor'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link to = '/about'>About</Link>{menu==='About'?<hr></hr>:<></>}</li>
        </ul>
            <div className='nav-right'>
                <Link to = '/login'><button className='login-btn'>Login</button></Link>
                <div className='cart-wrapper'>
                <Link to = '/cart'><img src = {shopping_cart} alt = "" className='cart-icon' /> </Link>
                <div className='cart-count'>0</div>
                </div>
                
            </div>
        
        </div>
    )
}

export default NavBar