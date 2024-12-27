import { Link } from "react-router-dom";
import { LuSun } from 'react-icons/lu';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black z-10 bgblurenav fixed top-0 text-white w-full h-[60px] flex items-center px-4 md:px-10">
      <div className="logo md:left-[100px] md:relative">
        <img src="letter-m.png" alt="logo" className="w-[40px] bg-white rounded-full border-transparent" />
      </div>

      <ul className="hidden md:flex gap-10 text-center mx-auto items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/ContectUs">Contact Us</Link></li>
      </ul>

      <button
        className="text-[25px] max-md:hidden relative right-[100px]"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
      </button>

      <button
        className="block md:hidden ml-auto transition-all text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiOutlineBars3BottomRight className="text-[30px]" />
      </button>

      {isMenuOpen && (
        <ul
          className={`absolute bg-black top-[60px] bgblurenavul right-0 w-[80%] h-[1250%] z-10 flex flex-col gap-4 py-4 text-center transform transition-transform duration-700 ease-in-out 
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>

          <li><Link to="/AboutUs" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>

          <li><Link to="/Product" onClick={() => setIsMenuOpen(false)}>Product</Link></li>

          <li><Link to="/ContectUs" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>

          <li onClick={() => setIsMenuOpen(false)}>
            <button className="text-[25px] w-fit rounded-full" onClick={() => { setDarkMode(!darkMode) }}>
              {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
            </button>
          </li>
          {/* <li className="text-[35px] flex justify-around align-bottom mt-auto mb-5"><FaFacebookSquare /><FaInstagramSquare /> <FaSquareXTwitter /></li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;