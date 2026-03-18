import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import Home from "./Components/Pages/Home";
import Collections from "./Components/Pages/Collections";
import Shop from "./Components/Pages/Shop";
import About from "./Components/Pages/About";
import Mens from "./Components/Subpages/mens";
import Womens from "./Components/Subpages/womens";
import Access from "./Components/Subpages/access";
import { Dummy } from "./Components/Subpages/dummy";
import CartPage from "./Components/Subpages/cartPage";
import FavPage from "./Components/Subpages/favPage";
import Footer from "./Components/Navbar/Footer";
import LogIn from "./Components/Pages/login";
import SignIn from "./Components/Pages/signin";
import AdminPanel from "./Components/Pages/adminPge";
import PlaceOrder from "./Components/Subpages/placeOrder";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />

        <Route path="/collections/mens" element={<Mens/>} />
        <Route path="/collections/womens" element={<Womens/>} />
        <Route path="/collections/accessories" element={<Access/>} />

        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/wishlist" element={<FavPage/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>

<Route path="/place-order" element={<PlaceOrder />} />


        <Route path="/collections/about" element={<Dummy/>} /> 
        
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
