import { Link } from "react-router-dom";
import { LuSun } from 'react-icons/lu';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

// for navigation
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/LoginAndSignup");
  };

  const handleCart = () => {
    navigate("/AddToCartPage");
  };

  return (
    <nav className=" bgblurenav fixed top-0 text-white w-full h-[60px] md:justify-around flex items-center px-4 md:px-10 z-[50]">
      <div className="logo md:relative">
        <img src="letter-m.png" alt="logo" className="w-[40px] bg-white rounded-full border-transparent" />
      </div>

      <ul className="hidden lg:flex items-center w-full">
        {/* Left-aligned navigation links */}
        <li className="flex-grow w-full flex space-x-6 justify-start items-center ml-5 ">
          <Link to="/">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Product">Product</Link>
          <Link to="/ContectUs">Contact Us</Link>
        </li>

        {/* Right-aligned buttons */}
        <li className="flex space-x-3 mr-[3%] items-center">

          {/* Search button */}
          <input type="text" placeholder="Search" className="bg-white text-black relative bg-transparent border border-[#ededed] focus:border-[#ededed] focus:border pl-10 h-9 pr-5 py-2 w-full rounded-[20px]" />
          <IoMdSearch className="text-[20px] text-[#292929] absolute ml-10" />

          {/* User profile */}
          <button
            className="transition-all w-fit text-white text-[25px] rounded-full"
            onClick={() => handleLogin()}
          >
            <FaRegUserCircle />
          </button>

          {/* Cart */}
          <button
            className="transition-all text-white font-bold text-[30px] rounded-full"
            onClick={() => handleCart()}
          >
            <LiaShoppingCartSolid className="" />
          </button>

          {/* Dark and light mode button */}
          <button
            className="text-[25px]"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LuSun /> : <FaMoon className="text-[20px]" />}
          </button>
        </li>
      </ul>


      {/* in mobile */}
      <div className="max-md:flex lg:hidden gap-3 text-[35px] absolute right-[15px]">

        {/* Search button
        <input type="text" placeholder="" className="bg-white text-black text-base relative bg-transparent border border-[#ededed] focus:border-[#ededed] focus:border pl-8 h-9 pr-2 py-2 w-[100px] rounded-[20px]" />
        <IoMdSearch className="text-[20px] text-[#292929] absolute ml-2  mt-2" /> */}

        {/* on click of profile btn then open login page*/}
        <button className="block md:hidden max-w-full transition-all text-white text-[27px] items-center rounded-full"
          onClick={() => { handleLogin(), setIsMenuOpen(false) }}>
          <FaRegUserCircle />
        </button>

        {/* Add to cart */}
        <button className="block md:hidden transition-all text-white text-[30px] items-center rounded-full"
          onClick={() => { handleCart(), setIsMenuOpen(false) }}>
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