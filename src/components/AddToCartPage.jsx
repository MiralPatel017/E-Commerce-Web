import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const AddToCartPage = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'bg-black text-white duration-[200ms]' : 'bg-white text-black duration-[200ms]'}>
      <div className='pt-[70px] pb-5 container'>
        <div>
          <h1 className='text-3xl font-bold'>
            My Shopping Cart <span className='font-normal text-2xl'> {" ❲ 2 ❳ "} </span>
          </h1>
        </div>

        <div className='flex mt-5 max-md:flex-wrap lg:space-x-5'>

          <div className='w-[70%] max-md:w-full h-[500px] overflow-y-auto rounded-lg px-5 space-y-5 custom-scrollbar'>

            {/* first product */}
            <div className='border-x-0 border-[gray] bg-[#ededed] border p-5'>
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
            <div className='border-x-0 border-[gray] bg-[#ededed] border p-5'>

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
            <div className='border-x-0 border-[gray] bg-[#ededed] border p-5'>

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
          <style jsx>{`
                      /* Custom Scrollbar */
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 8px;
                      background-color: #ededed;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb {
                        background-color: #292929;
                      }
                      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background-color: #292929;
                      }
            `}
          </style>

          <div className={darkMode ? 'bg-[#292929] text-white text-2xl font-bold w-[30%] duration-[200ms]' : 'bg-[#ededed] text-black text-2xl font-bold w-[30%] duration-[200ms]'}>
            <div className='rounded-lg p-5'>
              <h2 className={darkMode ? 'text-2xl font-bold bg-[#ededed] text-[#292929] text-center p-4 rounded-lg duration-[200ms]' : ' text-2xl font-bold bg-[#292929] text-white text-center p-4 rounded-lg duration-[200ms]'}>Order Summary</h2>

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

              <button className={darkMode ? 'w-full bg-[#ededed] text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75'
                : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75'}>
                Checkout
              </button>

              <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-6 text-2xl font-bold'} />

              <button className={darkMode ? 'w-full bg-[#ededed] text-lg text-[#292929] p-3 rounded-lg mt-5 hover:border-[#ededed] hover:border hover:text-[#ededed] hover:bg-[#292929] duration-75 flex justify-between px-6 btnplus'
                : 'w-full bg-[#292929] text-white p-3 rounded-lg mt-5 text-lg hover:border-[#292929] hover:border hover:text-[#292929] hover:bg-[#ededed] duration-75 flex justify-between px-6 btnplus'}>
                Apply Coupon <FaPlus className='my-auto text-lg plusrot duration-[50ms]' />
              </button>
            </div>
          </div>

        </div>

        <div className='mt-[50px]'>
          <div className={darkMode ? 'bg-[#292929] text-white text-2xl font-bold  duration-[200ms]' : 'bg-[#ededed] text-black text-2xl font-bold duration-[200ms]'}>
            <h2 className='text-3xl font-bold p-5 underline-offset-[11px] underline'>
              You may also like
            </h2>
            <hr className={darkMode ? 'border-[#ededed] mt-6 text-2xl font-bold' : 'border-[#292929] mt-[-12px] text-2xl font-bold'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartPage