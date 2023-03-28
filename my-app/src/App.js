import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
      {/* Navbar is outside Routes so it is present in every page */}
      <Navbar/>
        <Routes>
        {/* element attribute enables the shop and cart page to be displayed for the route  */}
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
