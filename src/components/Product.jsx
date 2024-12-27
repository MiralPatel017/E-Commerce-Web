import React from 'react'
import Footer from './Footer'
import ProductList from "./ProductList.json";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

// import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Product = ({ darkMode }) => {

  // const [openDropdown, setOpenDropdown] = React.useState(null);

  // const navigation = useNavigate()

  // const toggleDropdown = (id) => {
  //   setOpenDropdown(openDropdown === id ? null : id);
  // };
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(totalStars - rating);
    return filledStars + emptyStars;
  };

  const [viewProduct, setViewProduct] = React.useState(null)
  const [selectedFilter, setSelectedFilter] = React.useState(null);
  const [filteredItems, setFilteredItems] = React.useState(ProductList.products);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilter === selectedCategory) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(selectedCategory);
    }
  };

  React.useEffect(() => {
    filterItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  const filterItems = () => {
    if (selectedFilter) {
      const tempItems = ProductList.products.filter((item) => item.category === selectedFilter);
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...ProductList.products]);
    }
  };

  const viewDatails = (prod) => {
    setViewProduct(prod)
  }

  // close

  const closeModel = () => {
    setViewProduct(null)
  }

  const categories = ["Shirt", "Pant", "Shoes", "Accessories", "Other"];


  return (
    <div className={darkMode ? 'bg-black text-white pt-[70px]' : 'bg-white text-black pt-[70px]'}>

      <div className={darkMode ? 'bg-black text-white w-full md:max-w-[1440px] mx-auto ' : 'bg-white  w-full md:max-w-[1440px] mx-auto text-black'}>

        <div className="grid grid-cols-5 max-md:grid-cols-2 md:gap-10 max-md:mx-4 max-md:gap-2">
          {categories.map((category, index) => (
            <div key={index}>
              <button
                className={`button ${selectedFilter === category
                  ? "active bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white text-black dark:text-white dark:bg-black"
                  } ${darkMode
                    ? "text-white md:px-10 md:text-[20px] font-semibold p-3 w-full border-[2.5px] mt-5 rounded-lg border-white"
                    : "bg-white md:px-10 md:text-[20px] font-semibold w-full p-3 border-[2.5px] mt-5 rounded-lg border-gray-900 text-black"
                  }`}
                onClick={() => handleFilterButtonClick(category)}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
        
        <div className="grid md:gap-10 grid-cols-4 max-lg:grid-cols-2 max-md:px-2 pt-[50px] max-w-[1440px] w-full md:mx-auto">
          {filteredItems.map((product, id) => (
            <div key={id} className='max-md:mt-[7px] rounded-[10px] max-md:mx-0 max-md:w-full '>
              <img src={product.imgs} onClick={() => viewDatails(product)}
                alt={product.title} className='rounded-t-[10px] cursor-pointer bg-[#F3F3F3] max-md:w-[96%] mx-auto border-2 border-[#F3F3F3]' />
              <div className='px-[10px] pt-[10px] pb-[15px] bg-[#F3F3F3] text-black rounded-b-[10px] max-md:w-[96%] max-md:mx-auto border-2 border-[#F3F3F3] max-md:pt-0'>
                <div>
                  <div className='grid grid-cols-2 max-lg:grid-cols-1 max-lg:mt-1'>
                    <h1 className='text-lg line-clamp-2 font-bold max-lg:mx-auto max-md:line-clamp-1'>
                      {product.title}
                    </h1>

                    <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end items-center max-lg:mx-auto max-lg:mt-0'>
                      {renderStars(product.rating)}
                    </h1>
                  </div>

                  <div className='grid grid-cols-2 mt-3 max-md:hidden max-md:grid-cols-1 max-md:mt-0'>
                    <h2 className='text-red-500 text-start max-md:text-[16px] text-lg max-lg:mx-auto'>
                      -{product.offers}
                    </h2>
                    <button className="bg-black text-white max-md:hidden max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-black border-2">
                      Buy Now
                    </button>
                  </div>
                </div>

                <div className='md:hidden mx-auto text-center'>
                  <h2 className='text-red-500 max-md:text-[16px] text-lg max-lg:mx-auto '>
                    -{product.offers}
                  </h2>
                  <button className="bg-black text-white md:hidden max-md:font-bold max-lg:mt-1 max-md:w-full py-2 max-lg:mx-auto rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-black border-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* View Product Details */}
      {viewProduct && (
        <div className={darkMode ? " text-white z-20 max-md:overflow-y-auto bg-black overflow-x-hidden justify-center items-center fixed inset-0 flex bg-opacity-90" : "bg-black z-20 max-md:overflow-y-auto max-md:h-full text-black fixed inset-0 flex justify-center items-center bg-opacity-85"}>

          <div className='w-full dark:bg-black pt-auto dark:text-white rounded-[20px] md:mt-[30px] max-md:rounded-none max-md:pt-5 dark:bg-opacity-100  max-w-[800px] bg-opacity-100  justify-center items-center max-md:mt-[400px] px-6 max-md:px-2 mx-auto '>

            {/* close button */}
            <div className='pl-[90%] max-md:pl-[90%] md:mt-[20px]'>
              <button
                className=' bg-red-600 dark:bg-red-600 dark:text-white text-white max-md:w-fit max-md:px-[10px] max-md:py-[5px] max-md:text-[16px] max-md:p-[10px] p-[10px] px-[18px] font-bold hover:bg-red-700 rounded-full mb-[20px]'
                onClick={closeModel}
              >
                X
              </button>
            </div>
            <div className='overflow-y-auto gap-10 max-md:flex-wrap max-md:justify-center flex'>
              {/* image */}
              <div className='w-[40%] my-auto max-md:w-full'>
                <img src={viewProduct.imgs} alt="" className='w-[400px] rounded-[20px] max-md:w-[190px] max-md:mx-auto' />

                <button className="bg-black text-white mt-5 text-center justify-center flex mx-auto max-md:hidden w-[60%] py-2 rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-white border-2">
                  Buy Now
                </button>

              </div>

              {/* visite product details */}
              <div className='w-[60%] max-md:w-full max-md:px-2 max-md:mx-auto text-[18px]'>

                {/* link of product brand */}
                <p className=' my-[5px] font-semibold text-[gray]'>
                  visite the {viewProduct.title} Store
                </p>
                {/* title of product */}
                <h2 className='max-md:text-2xl text-[20px] font-bold my-[10px]'>
                  {viewProduct.fullname}
                </h2>

                {/* star rating */}
                <div className='gap-9 flex font-semibold max-md:my-[10px] max-md:flex-wrap'>
                  <div className='flex gap-2'>
                    <h1 className='text-2xl max-md:text-[17px] gap-1 text-[gold] text-end max-lg:mx-auto font-normal max-lg:mt-0'>
                      {renderStars(viewProduct.rating)}
                    </h1>
                  </div>

                  <div className='gap-2 max-md:flex-wrap text-[gray] items-center flex'>
                    <div>
                      {viewProduct.rates} Reating
                    </div>

                    <div>
                      |
                    </div>

                    <div>
                      Search this page
                    </div>
                  </div>
                </div>

                <hr className='border-[1.5px] border-gray-500 my-2 max-md:hidden' />

                {/* offer & price */}
                <div className=''>
                  <div className=' text-[30px] max-md:mb-[5px]'>
                    <span className='font-light text-red-700 dark:text-red-700'> -{viewProduct.offers} </span> <span className='font-semibold '> {viewProduct.price} </span>
                  </div>
                </div>

                {/* MRP of product */}
                <div className=' text-[#9A9C9C] max-md:mb-[5px]'>
                  M.R.P. : <span className='line-through'> {viewProduct.mrp} </span>
                </div>

                <hr className='border-[1.5px] border-gray-500 my-2 max-md:hidden' />


                {/* tax and Other */}
                <div className='flex-wrap'>
                  <p className='max-md:mb-[5px]'>
                    Inclusive of all taxes
                  </p>
                  <p className='max-md:mb-[5px]'>
                    EMI starts at {viewProduct.emi} per month.
                  </p>
                  <p className='flex gap-2 hover:underline text-[gray] hover:cursor-pointer'>
                    <span className='font-bold'> EMI </span> options <RiArrowDropDownLine className='text-[30px]' />
                  </p>
                </div>

                <hr className='border-[1.5px] border-gray-500 md:my-2 max-md:hidden' />

                {/* Offres */}

                <div>
                  <div className='flex md:my-2 mt-4 max-md:mt-[5px] gap-5'>
                    <MdLocalOffer className='mt-[2px] text-[20px]' /> <span className='font-bold'> Offers </span>
                  </div>
                  <button className="bg-black text-white max-md:mt-[5px] text-center flex justify-center mx-auto md:hidden w-[60%] mb-5 py-2 rounded-[10px] duration-300 font-semibold hover:bg-white hover:text-black border-white border-2">
                    Buy Now
                  </button>
                </div>

                {/* bank offer card */}
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <div className='hover:cursor-pointer rounded-[18px] shadow-md mb-2'>
                      <div className='p-5 max-md:text-[15px] text-[16px] flex-wrap border rounded-[15px]'>
                        <p>
                          Bank Offer
                        </p>
                        <p className='mt-2 line-clamp-2'>
                          Upto ₹2,000.00 discount on select…
                        </p>
                        <p className='text-[#007A8E] hover:underline flex gap-1 mt-3'>
                          5 offers <FaGreaterThan className='text-[12px] mt-[7px] font-extralight' />
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* partner offer card */}
                  <div>
                    <div className='hover:cursor-pointer rounded-[18px] shadow-md mb-5'>
                      <div className='p-5 max-md:text-[15px] text-[16px] flex-wrap border rounded-[15px]'>
                        <p>
                          Partner Offer
                        </p>
                        <p className='mt-2 line-clamp-2'>
                          Get GST invoice and save up to 28% on…
                        </p>
                        <p className='text-[#007A8E] hover:underline  flex gap-1 mt-3'>
                          5 offers <FaGreaterThan className='text-[12px] mt-[7px] font-extralight' />
                        </p>
                      </div>
                    </div>

                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  )
}

export default Product