// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProductList from "./ProductList.json";
import { ImArrowUpRight2 } from "react-icons/im";
import Footer from './Footer';
// eslint-disable-next-line react/prop-types
const HomePage = ({ darkMode }) => {

    const product = ProductList.products

    const renderStars = (rating) => {
        const totalStars = 5; // Total stars in the rating system
        const filledStars = '★'.repeat(rating); // Filled stars based on the rating
        const emptyStars = '☆'.repeat(totalStars - rating); // Remaining empty stars
        return filledStars + emptyStars; // Combine filled and empty stars
    };

    return (
        <div className={darkMode ? "text-white transition-all bg-black" : "bg-white transition-all text-black "}>
            <div className='pt-[65px] max-w-[1440px] mx-auto max-lg:px-[15px]'>

                {/* main container section */}
                <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-auto'>

                    <div className='max-lg:mx-auto'>
                        <img src="mainbanner.png" className='w-[90%] max-lg:mx-auto' alt="" />

                    </div>

                    <div className=' self-center'>
                        <h1 className='text-6xl font-bold my-7 max-md:text-[40px] max-md:text-center'>Bring the warmth.</h1>
                        <p className='my-7 text-[25px] max-md:text-[14px] max-md:text-center'>
                            Everyone needs a good winter jacket. <br />
                            Find yours with our collection and more.</p>
                        <div className='max-md:w-full flex'>
                            <button className='bg-blue-700 text-white h-[70px] px-[90px] max-lg:mx-auto rounded-[18px] text-[20px] font-semibold items-center hover:bg-blue-800 max-md:h-[55px] max-md:px-[45px] max-md:text-[18px]'>
                                Shopping Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* shirt section */}
                <div className='mt-[50px]'>

                    <div className='flex w-full md:justify-between max-md:justify-center'>
                        <h1 className='text-6xl cursive font-bold my-7 max-md:text-center max-md:justify-center'>Shirt</h1>
                        <button className={darkMode ? 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-white hover:text-black rot max-md:text-[17px] border-white font-semibold' : 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[23px] rotsub' />
                        </button>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:w-full max-md:gap-0 gap-[40px]'>
                        {product.filter(item => item.category === "Shirt").slice(0, 4).map((item, index) =>
                            <div key={index} className='bgblur max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full'>
                                <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' alt="" />
                                <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                    <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                            {item.title}
                                        </h1>

                                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                            {renderStars(item.rating)}
                                        </h1>



                                    </div>
                                    <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                        <h2 className='text-red-500 text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                            -{item.offers}
                                        </h2>
                                        <button className="bg-black text-white max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] transition-all font-semibold hover:bg-white hover:text-black border-black border-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile view */}
                    <div className='flex justify-end pr-5'>
                        <button className={darkMode ? 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-white hover:text-black rot max-md:text-[17px] border-wwhite font-semibold ' : 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[25px] rotsub max-md:text-[20px] max-md:pt-1' />
                        </button>
                    </div>
                </div>


                {/* pant section */}
                <div className='mt-[50px]'>

                    <div className='flex w-full md:justify-between max-md:justify-center'>
                        <h1 className='text-6xl cursive font-bold my-7 max-md:text-center'>Pant</h1>
                        <button className={darkMode ? 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-white hover:text-black rot max-md:text-[17px] border-white font-semibold' : 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[23px] rotsub' />
                        </button>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:w-full max-md:gap-0 gap-[40px]'>
                        {product.filter(item => item.category === "Pant").slice(0, 4).map((item, index) =>
                            <div key={index} className='bgblur max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full'>
                                <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' alt="" />
                                <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                    <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                            {item.title}
                                        </h1>

                                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                            {renderStars(item.rating)}
                                        </h1>
                                    </div>
                                    <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                        <h2 className='text-red-500 text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                            -{item.offers}
                                        </h2>
                                        <button className="bg-black text-white max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] transition-all font-semibold hover:bg-white hover:text-black border-black border-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile view */}
                    <div className='flex justify-end pr-5'>
                        <button className={darkMode ? 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-white hover:text-black rot max-md:text-[17px] border-wwhite font-semibold ' : 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[25px] rotsub max-md:text-[20px] max-md:pt-1' />
                        </button>
                    </div>
                </div>


                {/* shoes section */}
                <div className='mt-[50px]'>

                    <div className='flex w-full md:justify-between max-md:justify-center'>
                        <h1 className='text-6xl cursive font-bold my-7 max-md:text-center'>Shoes</h1>
                        <button className={darkMode ? 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-white hover:text-black rot max-md:text-[17px] border-white font-semibold' : 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[23px] rotsub' />
                        </button>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:w-full max-md:gap-0 gap-[40px]'>
                        {product.filter(item => item.category === "Shoes").slice(0, 4).map((item, index) =>
                            <div key={index} className='bgblur max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full'>
                                <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' alt="" />
                                <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                    <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                            {item.title}
                                        </h1>

                                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                            {renderStars(item.rating)}
                                        </h1>



                                    </div>
                                    <div className='grid grid-cols-2 items-center align-middle mt-3 max-md:grid-cols-1 max-lg:mt-0'>
                                        <h2 className='text-red-500 text-start text-xl max-lg:mx-auto'>
                                            -{item.offers}
                                        </h2>
                                        <button className="bg-black text-white max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] transition-all font-semibold hover:bg-white hover:text-black border-black border-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile view */}
                    <div className='flex justify-end pr-5'>
                        <button className={darkMode ? 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-white hover:text-black rot max-md:text-[17px] border-wwhite font-semibold ' : 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[25px] rotsub max-md:text-[20px] max-md:pt-1' />
                        </button>
                    </div>
                </div>

                {/* Accessories */}
                <div className='mt-[50px]'>

                    <div className='flex w-full md:justify-between max-md:justify-center'>
                        <h1 className='text-6xl cursive font-bold my-7 max-md:text-center'>Accessories</h1>
                        <button className={darkMode ? 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-white hover:text-black rot max-md:text-[17px] border-white font-semibold' : 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[23px] rotsub' />
                        </button>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:w-full max-md:gap-0 gap-[40px]'>
                        {product.filter(item => item.category === "Accessories").slice(0, 4).map((item, index) =>
                            <div key={index} className='bgblur max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full'>
                                <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' alt="" />
                                <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                    <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                            {item.title}
                                        </h1>

                                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                            {renderStars(item.rating)}
                                        </h1>
                                    </div>
                                    <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                        <h2 className='text-red-500 text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                            -{item.offers}
                                        </h2>
                                        <button className="bg-black text-white max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] transition-all font-semibold hover:bg-white hover:text-black border-black border-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile view */}
                    <div className='flex justify-end pr-5'>
                        <button className={darkMode ? 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-white hover:text-black rot max-md:text-[17px] border-wwhite font-semibold ' : 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[25px] rotsub max-md:text-[20px] max-md:pt-1' />
                        </button>
                    </div>
                </div>

                {/* other */}
                <div className='mt-[50px]'>

                    <div className='flex w-full md:justify-between max-md:justify-center'>
                        <h1 className='text-6xl cursive font-bold my-7 max-md:text-center'>Other</h1>
                        <button className={darkMode ? 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-white hover:text-black rot max-md:text-[17px] border-white font-semibold' : 'self-center flex gap-1 text-[18px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:hidden hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[23px] rotsub' />
                        </button>
                    </div>

                    <div className='grid grid-cols-4 max-lg:grid-cols-2 max-md:w-full max-md:gap-0 gap-[40px]'>
                        {product.filter(item => item.category === "Other").slice(0, 4).map((item, index) =>
                            <div key={index} className='bgblur max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full'>
                                <img src={item.imgs} className='rounded-t-[10px] bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' alt="" />
                                <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                                    <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                                        <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                                            {item.title}
                                        </h1>

                                        <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                                            {renderStars(item.rating)}
                                        </h1>



                                    </div>
                                    <div className='grid grid-cols-2 mt-3 max-md:grid-cols-1 max-md:mt-0'>
                                        <h2 className='text-red-500 text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                                            -{item.offers}
                                        </h2>
                                        <button className="bg-black text-white max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] transition-all font-semibold hover:bg-white hover:text-black border-black border-2">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* mobile view */}
                    <div className='flex justify-end pr-5'>
                        <button className={darkMode ? 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-white hover:text-black rot max-md:text-[17px] border-wwhite font-semibold ' : 'md:hidden flex gap-1 text-[20px] px-5 border-2 pr-4 py-2 rounded-[25px] max-md:mt-5 hover:bg-black hover:text-white rot max-md:text-[17px] border-black font-semibold'}>
                            See  More <ImArrowUpRight2 className='pt-2 text-[25px] rotsub max-md:text-[20px] max-md:pt-1' />
                        </button>
                    </div>

                </div>
            </div>

            <div className="mt-[50px]">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage