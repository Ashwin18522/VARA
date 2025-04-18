import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import About from './components/Aboutc/Aboutp.jsx';
import SubscriptionBox from './pages/SubscriptionBox/SubscriptionBox.jsx';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login/Login.jsx';
import Payment from './pages/Checkout/Payment.jsx';

import ShopContextProvider from './Context/ShopContext';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/VARA' element={<Shop />} />
          <Route path='/toys' element={<ShopCategory category="toys" />} />
          {/* <Route path='/gifts' element={<ShopCategory category="gifts" />} /> */}
          <Route path ='/accessories' element={<ShopCategory category="accessories"/>}/>
          <Route path='/decor' element={<ShopCategory category="decor" />} />
          <Route path='/subscription-box' element={<SubscriptionBox />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<ProductDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/payment' element={<Payment/>}/>
          {/*  <Route path='/ShopCategory' element={<ShopCategory/>} /> */ }
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
