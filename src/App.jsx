
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContectUs from "./components/ContectUs"
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import DetailsPage from "./components/ProductDetails";
import ProductDetails from "./components/ProductDetails";
// import LoginPage from "./components/LoginPage";
import LoginAndSignup from "./components/LoginAndSignup";
import AddToCartPage from "./components/AddToCartPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChackOutPage from "./components/ChackOutPage";



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark dark:bg-black bg-black dark:text-white" : "bg-white text-black dark:bg-black"}>
      <div>
        {/* Navbar */}
        <div className="">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Main Content */}
        <main className={darkMode ? "bg-black" : " bg-white"}>
          <Routes className={darkMode ? "bg-black" : " bg-white"}>
            {/* <Route path="*" element={<Home />} /> */}
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/AboutUs" element={<AboutUs darkMode={darkMode} />} />
            <Route path="/ContectUs" element={<ContectUs darkMode={darkMode} />} />
            <Route path="/Product" element={<Product darkMode={darkMode} />} />
            {/* <Route path="/Product/:id" element={<DetailsPage darkMode={darkMode} />} /> */}
            <Route patth="/ProductDetails" element={<ProductDetails darkMode={darkMode} />} />
            <Route path="/AddToCartPage" element={<AddToCartPage darkMode={darkMode}/>} />
            <Route path="/ChackOutPage" element={<ChackOutPage darkMode={darkMode}/>} />
          </Routes>
        </main>
      </div>
      <div>
        <main>
          <Routes>
            <Route path="/LoginAndSignup" element={<LoginAndSignup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
