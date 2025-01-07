import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import Slider from "react-slick";
import ProductList from "./ProductList.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

import { FaAmazonPay } from "react-icons/fa6";
import { PiDotsThreeBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

// payments
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { BiLogoPaypal } from "react-icons/bi";

// card
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

// bank
import { FaPiggyBank } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { GiBank } from "react-icons/gi";

// wallet
import { LiaWalletSolid } from "react-icons/lia";
const PaymentMethodPage = ({ darkMode }) => {

  const [showInput, setShowInput] = React.useState(false);
  const [isChacked, setIsChacked] = React.useState(true)


  return (
    <div className={darkMode ? 'bg-black text-white duration-300' : 'bg-white text-black duration-300'}>
      <div className={darkMode ? 'mt-[60px] pt-3' : 'mt-[60px] pt-3'}>
        {/* main screen */}
        <div className='container'>

          {/* page title */}
          <div className='text-3xl uppercase font-bold mt-5'>
            Payment
          </div>

          {/* page navigation */}
          <div className="flex space-x-7 mt-5 uppercase text-[18px] overflow-x-auto">
            <p className="font-bold text-center w-[80px]"> <Link to="/AddToCartPage"> Cart </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[100%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[100%]'} /></p>
            <p className="font-bold text-center w-[140px]"> <Link to="/ChackOutPage"> Shopping </Link> <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[100%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[100%]'} /></p>
            <p className="font-bold text-center w-[140px]" disabled> Payment <hr className={darkMode ? 'border-[1.58px] mt-[5px] border-white justify-center w-[100%]' : 'border-[1.58px] mt-[5px] border-black justify-center w-[100%]'} /></p>
            <p className="text-[#a5a5a5] font-bold text-center w-[140px] cursor-not-allowed"><Link to="/OrderSummaryPage"> Summary </Link> <hr className='border-[1.58px] mt-[5px] border-[#a5a5a5] justify-center w-[100%]' /></p>
          </div>


          <div className="flex mt-5 max-md:flex-wrap lg:space-x-5">
            {/* addresses */}
            <div className="w-[70%] mt-5">

              {/* address */}
              <div className={darkMode ? 'bg-[#292929] text-lg p-5 flex text-[#ededed] justify-between'
                : 'bg-[#ededed] text-lg p-5 text-[#292929] flex justify-between'}>
                <p>
                  1. ADDRESSES
                </p>

                <p>
                  <Link to="/ChackOutPage"> EDIT </Link>
                </p>
              </div>


              {/* payment method */}
              <div className={darkMode ? 'bg-[#292929] text-lg p-5 mt-5 '
                : 'bg-[#ededed] text-lg p-5 text-[#292929] mt-5'}>
                2. PAYMENT METHOD
              </div>

              {/* payment */}
              <div className={darkMode ? 'border border-[#ededed] px-10 py-9 mt-5'
                : 'border border-[#292929] px-10 py-9 mt-5'}>
                <div className='space-x-3'>
                  <input type="radio" id="cardandupi" name="payment"
                    className={darkMode ? ' accent-[#ededed]'
                      : ' accent-[#292929]'}
                    checked={isChacked}
                    onChange={() => setIsChacked(!isChacked)}
                  />
                  <label htmlFor="cardandupi">
                    UPI, Cards & Paylater - Extra 5% off
                  </label>
                </div>
              </div>

              {/* plce order button */}
              <div className='mt-10'>
                <button className={darkMode ? 'bg-[#fff] py-3 text-xl font-semibold w-[35%] text-[#292929]'
                  : 'text-[#fff] py-3 text-xl font-semibold w-[35%] bg-[#292929]'}>
                  Place Order
                </button>
              </div>

              {/* Terms and Conditions */}
              <div className='mt-3'>
                <div className='text-[11px]'>
                  By continuing, I confirm that I have read and accept the {' '}
                  <span className='underline'>Terms and Conditionsand</span> {' '}
                  the {' '}
                  <span className='underline'>Privacy Policy</span> .
                </div>
              </div>
            </div>


            {/* product summary and payment details */}
            <div className="w-[30%] mt-5">

              <div className={darkMode ? 'text-[#ededed] text-lg p-5 bg-[#252525]'
                : 'text-black text-lg p-[20px] bg-[#ededed]'}>
                OEDER DETAILS <span className='font-normal text-[17px]'> {" ❲ 3 ❳ "} </span>
              </div>

              <div className='mt-5'>
                <div className={darkMode ? 'w-full max-h-[400px] overflow-y-auto pr-3 space-y-5 dark-custom-scrollbar'
                  : 'w-full max-h-[400px] overflow-y-auto pr-3 space-y-5 custom-scrollbar'}>

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
                          <div className='text-[13px]'>
                            <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                            <p className=''> Colour: Product color</p>
                            <p className=''>Product star</p>
                            <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                          </div>

                          {/* Quantity and delete */}
                          <div className='flex'>
                            {/* Quantity */}
                            <div className="flex items-center space-x-2">
                              <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                onClick={() => { }}>
                                <FaMinus />
                              </button>
                              <p className="text-lg font-semibold"> 1 </p>
                              <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
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
                      <div className='w-[38%] mx-auto my-auto'>
                        <img src="https://placehold.co/150x150" alt="" />
                        {/* prodduct name */}
                      </div>

                      {/* product details, quantity and delete */}
                      <div className='w-[62%]'>
                        <div className="space-y-3">
                          {/* product details */}
                          <div className='text-[13px]'>
                            <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                            <p className=''> Colour: Product color</p>
                            <p className=''>Product star</p>
                            <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                          </div>

                          {/* Quantity and delete */}
                          <div className='flex'>
                            {/* Quantity */}
                            <div className="flex items-center space-x-2">
                              <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                onClick={() => { }}>
                                <FaMinus />
                              </button>
                              <p className="text-lg font-semibold"> 1 </p>
                              <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
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
                      <div className='w-[38%] mx-auto my-auto'>
                        <img src="https://placehold.co/150x150" alt="" />
                        {/* prodduct name */}
                      </div>

                      {/* product details, quantity and delete */}
                      <div className='w-[62%]'>
                        <div className="space-y-3">
                          {/* product details */}
                          <div className='text-[13px]'>
                            <h2 className='text-lg font-semibold text-[#07679D]'>Product Name</h2>
                            <p className=''> Colour: Product color</p>
                            <p className=''>Product star</p>
                            <p className=''>Price: Product price <span className={darkMode ? 'text-[12px] text-[#ccc]' : 'text-[12px] text-[#6a6a6a]'}>Inc GST</span> </p>
                          </div>

                          {/* Quantity and delete */}
                          <div className='flex'>
                            {/* Quantity */}
                            <div className="flex items-center space-x-2">
                              <button className="bg-[#b5b5b5] text-white text-xs p-[6px] rounded-md"
                                onClick={() => { }}>
                                <FaMinus />
                              </button>
                              <p className="text-lg font-semibold"> 1 </p>
                              <button className=" bg-[#b5b5b5] text-white p-[6px] text-xs rounded-md"
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
            </div>
          </div>

        </div>


        {/* mobile and tablet screen */}
        <div className='flex mt-5 max-md:flex-wrap lg:space-x-5'>
        </div>
      </div>


      {/* payments and methods*/}
      <div className='w-full paymentblur h-full hidden  absolute top-0 z-50 overflow-hidden overflow-y-hidden flex justify-center items-center '>
        <div className={darkMode ? 'bg-[#222] p-2'
          : ' bg-[#eee] p-4 h-[600px] overflow-scroll'}>
          <div className='flex space-x-5'>

            <div className='w-fit pt-3 p-5'>
              <div>
                {/* logo */}
                <div className='flex space-x-3'>
                  <img src="letter-m.png" className='w-[60px] bg-[#eee] rounded-full  border ' />
                  <div className='flex-col items-center'>
                    {/* letter */}
                    <p>Mini Mart</p>
                    <div className='text-xs flex space-x-2 mt-1'> <FaAmazonPay className='text-2xl items-center mr-1' /> Pay Trusted Business</div>
                  </div>
                </div>

                {/* price summary */}
                <div className={darkMode ? 'bg-[gray] p-5 mt-5 rounded-xl font-semibold w-full'
                  : 'bg-[#bbb] p-5 mt-5 rounded-xl font-semibold w-full'}>

                  {/* title */}
                  <div className='font-normal'>
                    Price Summay
                  </div>

                  {/* total */}

                  <div className='text-[30px] items-center font-[600]'>
                    $ price
                  </div>
                </div>
                {/* bottom image */}
                <div className='mt-5 h-[300px] shoppingbg'>
                </div>
              </div>
            </div>


            {/* payment options */}
            <div className='w-auto h-auto bg-slate-300 pr-5  pt-3'>

              {/* title and other options */}
              <div className='flex w-auto mb-5'>

                {/* title */}
                <div className='text-2xl font-bold text-center mx-auto'>
                  Payment Options
                </div>

                <div className='flex space-x-5 text-2xl items-center ml-auto'>
                  <PiDotsThreeBold className='' />
                  <IoMdClose />
                </div>
              </div>


              <div className='flex w-auto space-x-1'>

                {/* payment options */}
                <div className=' space-y-10 p-5'>

                  {/* first option ( Recommended) */}
                  <div className='flex space-x-10 justify-between'>
                    Recommended
                  </div>

                  {/* second option ( UPI ) */}
                  <div className='flex space-x-10 justify-between'>
                    <div>
                      UPI
                    </div>

                    <div className='flex space-x-2 text-[20px] font-bold'>
                      <FaGooglePay />
                      <BiLogoPaypal />
                      <SiPaytm />
                    </div>
                  </div>

                  {/* third option ( Cards ) */}
                  <div className='flex space-x-10 justify-between'>
                    <div>
                      Card
                    </div>

                    <div className='flex space-x-2 text-[20px] font-bold'>
                      <RiVisaFill />
                      <FaCcMastercard />
                      <SiAmericanexpress />
                    </div>
                  </div>

                  {/* forth option ( Net Banking ) */}
                  <div className='flex space-x-10 justify-between'>
                    <div>
                      Netbanking
                    </div>

                    <div className='flex space-x-2 text-[20px] font-bold'>
                      <FaPiggyBank />
                      <CiBank />
                      <GiBank />
                    </div>
                  </div>

                  {/* fifth option ( Wallet ) */}
                  <div className='flex space-x-10 justify-between'>
                    <div>
                      Wallet
                    </div>

                    <div className='flex space-x-2 text-[20px] font-bold'>

                      <LiaWalletSolid />
                    </div>
                  </div>
                </div>


                {/* paayment options discriptions */}
                <div className=''>
                  <div className={darkMode ? 'bg-[#292929] p-5 overflow-y-scroll'
                    : ' bg-[#ededed] p-5 h-full overflow-y-scroll'}>

                    {/* first option ( Recommended) */}
                    <div className='h-auto bg-[#aaa]'>

                      {/* title */}
                      <div className='mt-5'>
                        UPI QR
                      </div>

                      {/* qr code and other */}
                      <div className={darkMode ? 'bg-[#292929] flex m-5 p-5' : 'bg-[#ededed] rounded-xl  space-x-5 flex m-5 p-5'}>

                        {/* qr code */}
                        <div>
                          <img src="QR.png" className='w-[100px]' />
                        </div>

                        <div className='my-auto'>
                          <div className='text-[10px]'>
                            SCAN WITH ANY APP
                          </div>

                          <div className='flex space-x-3 items-center'>
                            <div>
                              <img src="amazonpay.svg" className='w-[50px]' />
                            </div>
                            <div>
                              <img src="gpay.svg" className='w-[30px]' />
                            </div>
                            <div>
                              <img src="paypal.svg" className='w-[50px]' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* second option ( UPI ) */}
                    <div className='h-auto mt-10 bg-[#aaa]'>

                      {/* title */}
                      <div className='mt-5'>
                        UPI QR
                      </div>

                      {/* qr code and other */}
                      <div className={darkMode ? 'bg-[#292929] flex m-5 p-5' : 'bg-[#ededed] rounded-xl  space-x-5 flex m-5 p-5'}>

                        {/* qr code */}
                        <div>
                          <img src="QR.png" className='w-[100px]' />
                        </div>

                        <div className='my-auto'>
                          <div className='text-[10px]'>
                            SCAN WITH ANY APP
                          </div>

                          <div className='flex space-x-3 items-center'>
                            <div>
                              <img src="amazonpay.svg" className='w-[50px]' />
                            </div>
                            <div>
                              <img src="gpay.svg" className='w-[30px]' />
                            </div>
                            <div>
                              <img src="paypal.svg" className='w-[50px]' />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* UPI ID / Number title */}
                      <div className='mt-5'>
                        <div>
                          UPI ID / Number
                        </div>

                        <div className='justify-center border rounded-xl mt-5 p-5'>
                          <div className='w-[80%] mx-auto'>
                            <input type="text" className={darkMode ? ' p-3  bg-transparent placeholder:text-[gray] border rounded-xl'
                              : " p-3 w-full bg-transparent placeholder:text-[gray] border rounded-xl"}
                              placeholder="example@okhdfcbank" />
                          </div>
                          <div className='w-[80%] mx-auto mt-5'>
                            <button className={darkMode ? ''
                              : 'w-full bg-[#292929] text-lg py-2 rounded-xl text-[#ededed] px-5'}>
                              verify and pay
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodPage