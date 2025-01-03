import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
// import Slider from "react-slick";
import Slider from "react-slick";
import ProductList from "./ProductList.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from './Footer';


const AddToCartPage = ({ darkMode }) => {

  const [sliderPosition, setSliderPosition] = React.useState(0); // to track the current slide position
  const sliderRef = React.useRef(null); // to get the slider reference
  const [showInput, setShowInput] = React.useState(false);

  const product = ProductList.products

  // Custom Next Arrow
  const CustomNextArrow = ({ onClick }) => (
    <div
      className={darkMode ? "absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-black rounded-full p-2" : "absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2"}
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );

  // Custom Prev Arrow
  const CustomPrevArrow = ({ onClick }) => (
    <div
      className={darkMode ? "absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-black rounded-full p-2" : "absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2"}
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1030, // Tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 760, // Mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const renderStars = (rating) => {
    const totalStars = 5; // Total stars in the rating system
    const filledStars = '★'.repeat(rating); // Filled stars based on the rating
    const emptyStars = '☆'.repeat(totalStars - rating); // Remaining empty stars
    return filledStars + emptyStars; // Combine filled and empty stars
  };



  return (
    <div className={darkMode ? 'bg-black text-white duration-[200ms]' : 'bg-white text-black duration-[200ms]'}>

      {/* on main screen */}
      <div className='pt-[70px] max-lg:hidden pb-5 container'>

        {/* my shopping cart title*/}
        <div>
          <h1 className='text-3xl font-bold'>
            My Shopping Cart <span className='font-normal text-2xl'> {" ❲ 2 ❳ "} </span>
          </h1>
        </div>

        {/* product list and order summary */}
        <div className='flex mt-5 max-md:flex-wrap lg:space-x-5'>

          <div className={darkMode ? 'w-[70%] max-md:w-full h-[500px] overflow-y-auto rounded-lg px-5 space-y-5 dark-custom-scrollbar' : 'w-[70%] max-md:w-full h-[500px] overflow-y-auto rounded-lg px-5 space-y-5 custom-scrollbar'}>

            {/* first product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5' : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
              <div className='flex justify-between'>
                {/* product Details */}
                <div className='flex space-x-5'>
                  <div>
                    <img src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className='flex flex-col my-auto'>
                    <h2 className='text-xl font-bold text-[#07679D]'>Product Name</h2>
                    <p className=''> Colour: Product color</p>
                    {/* <p className='text-sm'>Product star</p> */}
                    <p className=''>Price: Product price <span className='text-[13px] text-[#6a6a6a]'>Inc GST</span> </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className='my-auto'>
                  <div className="flex space-x-5">
                    <div className="flex items-center space-x-2">
                      <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                        onClick={() => { }}>
                        <FaMinus />
                      </button>
                      <p className="text-lg font-bold"> 1 </p>
                      <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                        onClick={() => { }}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                {/* delete */}
                <div className='my-auto text-left pr-5'>
                  <button className="text-red-600 text-lg"
                    onClick={() => { }}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>

            {/* seconnd product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5' : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>

              <div className='flex justify-between'>

                {/* product Details */}
                <div className='flex space-x-5'>
                  <div>
                    <img src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className='flex flex-col my-auto'>
                    <h2 className='text-xl font-bold text-[#07679D]'>Product Name</h2>
                    <p className=''> Colour: Product color</p>
                    {/* <p className='text-sm'>Product star</p> */}
                    <p className=''>Price: Product price <span className='text-[13px] text-[#6a6a6a]'>Inc GST</span> </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className='my-auto'>
                  <div className="flex space-x-5">
                    <div className="flex items-center space-x-2">
                      <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                        onClick={() => { }}>
                        <FaMinus />
                      </button>
                      <p className="text-lg font-bold"> 1 </p>
                      <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                        onClick={() => { }}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                {/* delete */}
                <div className='my-auto text-left pr-5'>
                  <button className="text-red-600 text-lg"
                    onClick={() => { }}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>

            {/* third product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5' : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>

              <div className='flex justify-between'>

                {/* product Details */}
                <div className='flex space-x-5'>
                  <div>
                    <img src="https://placehold.co/150x150" alt="" />
                  </div>
                  <div className='flex flex-col my-auto'>
                    <h2 className='text-xl font-bold text-[#07679D]'>Product Name</h2>
                    <p className=''> Colour: Product color</p>
                    {/* <p className='text-sm'>Product star</p> */}
                    <p className=''>Price: Product price <span className='text-[13px] text-[#6a6a6a]'>Inc GST</span> </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className='my-auto'>
                  <div className="flex space-x-5">
                    <div className="flex items-center space-x-2">
                      <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                        onClick={() => { }}>
                        <FaMinus />
                      </button>
                      <p className="text-lg font-bold"> 1 </p>
                      <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                        onClick={() => { }}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                {/* delete */}
                <div className='my-auto text-left pr-5'>
                  <button className="text-red-600 text-lg"
                    onClick={() => { }}>
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* scroll bar */}
          <style jsx>
            {`
            /* light Custom Scrollbar */
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background-color: #ededed;
            border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #292929;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: #292929;
              border-radius: 10px;
            }

            /* dark Custom Scrollbar */
            .dark-custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background-color: #191919;
            border-radius: 10px;
            }
            .dark-custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #ededed;
              border-radius: 10px;
            }
            .dark-custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: #ededed;
            }
           `
            }
          </style>

          <div className={darkMode ? 'bg-[#292929] text-white text-2xl font-bold w-[30%] duration-[200ms]' : 'bg-[#ededed] text-black text-2xl font-bold w-[30%] duration-[200ms]'}>
            <div className='rounded-lg p-5'>
              <h2 className={darkMode ? 'text-xl font-bold bg-transparent border-[3px] border-[#ededed]  text-[#ededed] text-center p-3 rounded-lg duration-[200ms]' : ' text-xl font-bold bg-transparent text-[#292929] border-[3px] border-[#292929] text-center p-3 rounded-lg duration-[200ms]'}>Order Summary</h2>

              <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />
              <div className='flex font-semibold text-base justify-between'>
                <p className={darkMode ? 'text-[#d0d0d0]' : 'text-[#676767]'}>Extra 10% off</p>
                <p className='text-[rgba(0,134,38)]'> - Price</p>
              </div>
              <div className='mt-6 font-semibold text-lg'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping Cost</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Order Discount</p>
                  <p className='text-[rgba(0,134,38)]'> - Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>GST</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Total</p>
                  <p>Price</p>
                </div>
              </div>

              <button className={darkMode ? 'w-full bg-[#ededed] text-xl text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5  text-xl hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}>
                Checkout
              </button>

              <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

              <div>
                <button
                  className={darkMode ? 'w-full bg-[#ededed] text-lg text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 flex justify-between px-6 btnplus'
                    : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 text-lg hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75 flex justify-between px-6 btnplus'}
                  onClick={() => setShowInput(!showInput)}
                >
                  Apply Cupon  <FaPlus className='my-auto text-lg plusrot duration-[50ms]' />
                </button>

                {showInput && (
                  <div className="mt-4 flex justify-between space-x-2 items-center">
                    <input
                      type="text"
                      placeholder="Enter Cupon"
                      className="border p-3 text-lg rounded"
                    />
                    <button
                      className={darkMode ? 'w-full bg-[#ededed] text-base my-auto text-[#292929] p-3 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                        : 'w-full bg-[#292929] text-white p-3 my-auto text-base hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* You may also like and product slider */}
        <div className='mt-[50px] relative'>
          <div className={darkMode ? 'bg-[#292929] text-white text-2xl font-bold  duration-[200ms] rounded-lg' : 'bg-[#ededed] text-black text-2xl font-bold duration-[200ms] rounded-lg'}>
            <h2 className='text-3xl font-bold p-5 underline-offset-[11px] underline'>
              You may also like
            </h2>
            <hr className={darkMode ? 'border-[#ededed] mt-[-12px] text-2xl font-bold' : 'border-[#292929] mt-[-12px] text-2xl font-bold'} />

            <div className="custom-scrollbar-container my-4 pb-4 space-x-5">
              {/* Product Slider */}
              <Slider {...settings} ref={sliderRef} >
                {product.map((item, index) => (
                  <div key={index} className='bgblur max-md:mt-[20px] w-[20%] rounded-[10px]'>
                    <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] w-[80%] mx-auto border-2  border-[#F3F3F3]' alt="" />
                    <div className='px-[10px] pt-[10px] pb-[15px] bg-[#ddd] text-black w-[80%] rounded-b-[10px] mx-auto border-2 border-[#ddd] max-md:pt-0'>
                      <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                          {item.title}
                        </h1>

                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                          {renderStars(item.rating)}
                        </h1>
                      </div>
                      <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                        <h2 className='text-[#292929] font-semibold text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                          {"$"}{item.price}
                        </h2>
                        <button className="bg-[#292929] text-white max-md:w-[60%] text-base py-[4px] max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-transparent hover:text-black border-black border-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* scrollbar */}
              <div className="slider-scrollbar">
                <div
                  className="slider-thumb"
                  style={{
                    width: `${(sliderPosition + 1) * (100 / product.length)}%`,
                  }}
                />
              </div>

              <style jsx>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar-container {
          position: relative;
          // margin-top: 20px;
        }

        .slider-scrollbar {
          position: absolute;
          bottom: 10px;
          left: 0;
          // width: 100%;
          height: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
        }

        .slider-thumb {
          height: 100%;
          background-color: #07679D;
          border-radius: 5px;
        }

        /* Optional: Smooth scrolling */
        .custom-scrollbar-container {
          scroll-behavior: smooth;
        }

        /* Custom Arrow Styles */
        .slick-prev, .slick-next {
          position: absolute;
          // top: 50%;
          // transform: translateY(-50%);
          z-index: 1;
          background-color: #07679D;
          // color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>

            </div>
          </div>
        </div>
      </div>

      {/* on mobile and tablet */}
      <div className='lg:hidden flex-wrap pt-[70px] mx-3 max-lg:block'>

        {/* my shopping cart title*/}
        <div>
          <h1 className='text-2xl font-semibold text-center'>
            My Shopping Cart <span className='font-normal text-lg'> {" ❲ 2 ❳ "} </span>
          </h1>
        </div>

        {/* product list and order summary */}
        <div className='mt-5 lg:space-x-5'>

          <div className={darkMode ? 'w-full h-[480px] overflow-y-auto pr-3 space-y-5 dark-custom-scrollbar' : 'w-full h-[480px] overflow-y-auto pr-3 space-y-5 custom-scrollbar'}>

            {/* first product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
              : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
              {/* image details, quantity and delete*/}
              <div className='flex space-x-5'>
                {/* product image */}
                <div className='w-[38%] mx-auto my-auto'>
                  <img src="https://placehold.co/150x150" alt="" />
                  {/* prodduct name */}
                </div>

                {/* product details, quantity and delete */}
                <div className='w-[62%]'>
                  <div className="space-y-3">
                    {/* product details */}
                    <div className='text-[15px]'>
                      <h2 className='text-lg font-bold text-[#07679D]'>Product Name</h2>
                      <p className=''> Colour: Product color</p>
                      <p className='text-sm'>Product star</p>
                      <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                    </div>

                    {/* Quantity and delete */}
                    <div className='flex'>
                      {/* Quantity */}
                      <div className="flex items-center space-x-2">
                        <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                          onClick={() => { }}>
                          <FaMinus />
                        </button>
                        <p className="text-lg font-bold"> 1 </p>
                        <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                          onClick={() => { }}>
                          <FaPlus />
                        </button>
                      </div>
                      {/* delete */}
                      <div className="my-auto mx-auto">
                        <button className="text-red-600 text-lg"
                          onClick={() => { }}>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* seconnd product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
              : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
              {/* image details, quantity and delete*/}
              <div className='flex space-x-5'>
                {/* product image */}
                <div className='w-[38%] my-auto'>
                  <img src="https://placehold.co/150x150" alt="" />
                  {/* prodduct name */}
                </div>

                {/* product details, quantity and delete */}
                <div className='w-[62%]'>
                  <div className="space-y-3">
                    {/* product details */}
                    <div className='text-[15px]'>
                      <h2 className='text-lg font-bold text-[#07679D]'>Product Name</h2>
                      <p className=''> Colour: Product color</p>
                      <p className='text-sm'>Product star</p>
                      <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                    </div>

                    {/* Quantity and delete */}
                    <div className='flex'>
                      {/* Quantity */}
                      <div className="flex items-center space-x-2">
                        <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                          onClick={() => { }}>
                          <FaMinus />
                        </button>
                        <p className="text-lg font-bold"> 1 </p>
                        <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                          onClick={() => { }}>
                          <FaPlus />
                        </button>
                      </div>
                      {/* delete */}
                      <div className="my-auto mx-auto">
                        <button className="text-red-600 text-lg"
                          onClick={() => { }}>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* third product */}
            <div className={darkMode ? 'border-x-0 border-[#ededed] bg-[#292929] border p-5'
              : 'border-x-0 border-[gray] bg-[#ededed] border p-5'}>
              {/* image details, quantity and delete*/}
              <div className='flex space-x-5'>
                {/* product image */}
                <div className='w-[38%] my-auto'>
                  <img src="https://placehold.co/150x150" alt="" />
                  {/* prodduct name */}
                </div>

                {/* product details, quantity and delete */}
                <div className='w-[62%]'>
                  <div className="space-y-3">
                    {/* product details */}
                    <div className='text-[15px]'>
                      <h2 className='text-lg font-bold text-[#07679D]'>Product Name</h2>
                      <p className=''> Colour: Product color</p>
                      <p className='text-sm'>Product star</p>
                      <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                    </div>

                    {/* Quantity and delete */}
                    <div className='flex'>
                      {/* Quantity */}
                      <div className="flex items-center space-x-2">
                        <button className="bg-[#757575] text-white text-xs p-[6px] rounded-md"
                          onClick={() => { }}>
                          <FaMinus />
                        </button>
                        <p className="text-lg font-bold"> 1 </p>
                        <button className=" bg-[#757575] text-white p-[6px] text-xs rounded-md"
                          onClick={() => { }}>
                          <FaPlus />
                        </button>
                      </div>
                      {/* delete */}
                      <div className="my-auto mx-auto">
                        <button className="text-red-600 text-lg"
                          onClick={() => { }}>
                          <RiDeleteBin6Line />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* scroll bar style */}
          <style jsx>{`
            /* light Custom Scrollbar */
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background-color: #ededed;
            border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #292929;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: #292929;
              border-radius: 10px;
            }

            /* dark Custom Scrollbar */
            .dark-custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background-color: #292929;
            border-radius: 10px;
            }
            .dark-custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: #ededed;
              border-radius: 10px;
            }
            .dark-custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: #ededed;
            }
           `
          }
          </style>

          {/* order summary */}
          <div className={darkMode ? 'bg-[#292929] text-white font-bold w-full duration-[200ms] mt-10'
            : 'bg-[#ededed] text-black font-bold w-full duration-[200ms] mt-10'}>

            <div className='rounded-lg p-5'>

              <h2 className={darkMode ? 'text-lg font-bold bg-[#292929] text-[#ededed] border-[3px] border-[#ededed] text-center py-3 rounded-lg duration-[200ms]'
                : ' text-lg font-bold bg-transparent text-[#292929] border-[3px] border-[#292929] text-center py-3 rounded-lg duration-[200ms]'}>Order Summary</h2>

              <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

              <div className='flex font-semibold text-base justify-between'>
                <p className={darkMode ? 'text-[#d0d0d0] text-sm' : 'text-[#676767] text-sm'}>Extra 10% off</p>
                <p className='text-[rgba(0,134,38)] text-sm'> - Price</p>
              </div>
              <div className='mt-6 font-semibold'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Shipping Cost</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Order Discount</p>
                  <p className='text-[rgba(0,134,38)]'> - Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>GST</p>
                  <p>Price</p>
                </div>
                <div className='flex justify-between'>
                  <p>Total</p>
                  <p>Price</p>
                </div>
              </div>

              <button className={darkMode ? 'w-full bg-[#ededed] text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}>
                Checkout
              </button>

              <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

              {/* copun code */}
              <div>
                <button
                  className={darkMode ? 'w-full bg-[#ededed] text-lg text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 flex justify-between px-6 btnplus'
                    : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 text-lg hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75 flex justify-between px-6 btnplus'}
                  onClick={() => setShowInput(!showInput)}
                >
                  Apply Cupon  <FaPlus className='my-auto text-lg plusrot duration-[50ms]' />
                </button>
                {showInput && (
                  <div className="mt-4 flex justify-between space-x-2">
                    <input
                      type="text"
                      placeholder="Enter Cupon"
                      className="border p-3 text-lg rounded"
                    />
                    <button
                      className={darkMode ? ' bg-[#ededed] text-base my-auto text-[#292929] p-3 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 mr-2'
                        : ' bg-[#292929] text-white p-3 my-auto text-base hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* You may also like and product slider */}
        <div className='mt-[50px] relative'>
          <div className={darkMode ? 'bg-[#292929] text-white text-xl font-bold  duration-[200ms] rounded-lg'
            : 'bg-[#ededed] text-black text-xl font-bold duration-[200ms] rounded-lg'}>
            <h2 className='text-2xl text-center font-bold p-5 underline-offset-[10px] underline '>
              You may also like
            </h2>
            <hr className={darkMode ? 'border-[#ededed] mt-[-16px] text-2xl font-bold' : 'border-[#292929] mt-[-16px] text-2xl font-bold'} />

            <div className="custom-scrollbar-container mx-1 my-4 pb-4">
              {/* Product Slider */}
              <Slider {...settings} ref={sliderRef}>
                {product.map((item, index) => (
                  <div key={index} className='bgblur max-md:mt-[20px] rounded-[10px] w-[70%] max-md:mx-0'>
                    <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] mx-auto border-2 w-[70%] border-[#F3F3F3]' alt="" />
                    <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black w-[70%] rounded-b-[10px] max-md:w-[70%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                      <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                          {item.title}
                        </h1>

                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                          {renderStars(item.rating)}
                        </h1>



                      </div>
                      <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                        <h2 className='text-[#668] text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                        {"$"}{item.price}
                        </h2>
                        <button className="bg-black text-white max-md:w-[60%] text-base max-md:font-bold max-lg:mt-1 py-2 max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-black border-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* scrollbar */}
              <div className="slider-scrollbar">
                <div
                  className="slider-thumb"
                  style={{
                    width: `${(sliderPosition + 1) * (100 / product.length)}%`,
                  }}
                />
              </div>

              <style jsx>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar-container {
          position: relative;
          // margin-top: 20px;
        }

        .slider-scrollbar {
          position: absolute;
          bottom: 10px;
          left: 0;
          // width: 100%;
          height: 10px;
          background-color: #f1f1f1;
          border-radius: 5px;
        }

        .slider-thumb {
          height: 100%;
          background-color: #07679D;
          border-radius: 5px;
        }

        /* Optional: Smooth scrolling */
        .custom-scrollbar-container {
          scroll-behavior: smooth;
        }

        /* Custom Arrow Styles */
        .slick-prev, .slick-next {
          position: absolute;
          // top: 50%;
          // transform: translateY(-50%);
          z-index: 1;
          background-color: #07679D;
          // color: white;
          border: none;
          padding: 10px;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>

            </div>
          </div>
        </div>
      </div>

      <div className='mt-[50px]'>
        <Footer />
      </div>
    </div>
  )
}
export default AddToCartPage