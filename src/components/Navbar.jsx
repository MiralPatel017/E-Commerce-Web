import { Link } from "react-router-dom";
import { LuSun } from 'react-icons/lu';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaGripLinesVertical } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

// for navigation
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/LoginAndSignup");
  };

  return (
    <nav className="bg-black bgblurenav fixed top-0 text-white w-full h-[60px] md:justify-around flex items-center px-4 md:px-10 z-[50]">
      <div className="logo md:relative">
        <img src="letter-m.png" alt="logo" className="w-[40px] bg-white rounded-full border-transparent" />
      </div>

      <ul className="hidden md:flex gap-5 text-center right-1 relative lg:ml-[60%] md:ml-[25%] items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/Product">Product</Link></li>
        <li><Link to="/ContectUs">Contact Us</Link></li>
        <li className="pt-[3px]">
          <button className="transition-all text-white text-[25px] rounded-full"
            onClick={() => handleLogin()}>
            <FaRegUserCircle />
          </button>
        </li>
        <li className="pt-[2px]">
          <button className="transition-all text-white font-bold text-[30px] rounded-full">
            <LiaShoppingCartSolid className="" />
          </button>
        </li>
        <li>
          {/* dark and light mode button */}
          <button
            className="text-[25px] z-10 max-md:hidden lg:right-[50px]"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
          </button>
        </li>
      </ul>

      <div className="max-md:flex gap-3 text-[35px] absolute right-[90px]">

        {/* on click of profile btn then open login page*/}
        <button className="block md:hidden pl-[65%] transition-all text-white text-[27px] items-center rounded-full"
          onClick={() => handleLogin()}>
          <FaRegUserCircle />
        </button>

        {/* Add to cart */}
        <button className="block md:hidden transition-all text-white text-[30px] items-center rounded-full">
          <LiaShoppingCartSolid />
        </button>

        {/* toggle button */}
        <button
          className="block md:hidden ml-auto transition-all text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineBars3BottomRight className="text-[30px]" />
        </button>

      </div>

      {
        isMenuOpen && (
          <div>
            <ul
              className={`absolute bg-black top-[60px] bgblurenavul right-0 w-[80%] h-[1150%] rounded-b-[20px] rounded-r-none flex flex-col gap-4 py-4 text-center transform transition-transform duration-700 ease-in-out 
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
              <li className="text-[35px] flex justify-around align-bottom mt-auto mb-5"><FaFacebookSquare /><FaInstagramSquare /> <FaSquareXTwitter /></li>
            </ul>
          </div>
        )
      }
    </nav >
  );
};

export default Navbar;