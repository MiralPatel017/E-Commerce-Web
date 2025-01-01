import React, { useState } from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import animationData1 from "../loginlottie.json";
import animationData2 from "../signuplottie.json";

const LoginAndSignup = ({ darkMode }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className=
            {
                darkMode ? "lg:bg-gradient-to-r max-md:h-full lg:from-indigo-950 from-50% lg:to-white to-50% lg:text-black max-lg:lg:from-white text-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
                    : "lg:bg-gradient-to-r max-md:h-full lg:from-indigo-950 from-50% lg:to-white to-50% lg:text-black max-lg:lg:from-white text-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
            }
        >
            <div className="px-2 max-md:px-2  lg:bg-gradient-to-r lg:text-black lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                <div className="bg-gradient-to-r  from-indigo-950 lg:text-black from-50% to-white to-50% max-lg:pt-7 max-lg:bg-gradient-to-t max-md:from-60% max-md:to-60%">
                    <div className="flip-container  lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                        <div className={`flipper ${isLogin ? 'lg:bg-gradient-to-r max-md:h-full lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t' : 'flipped max-md:h-full lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t'}`}>
                            {/* Login Form */}
                            <div className="front lg:bg-gradient-to-r max-md:h-full lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                <div className="flex items-center justify-center md:h-screen lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t max-md:px-2">
                                    <div className="w-full max-lg:flex-wrap lg:max-w-[1440px] lg:h-[600px] shadowbox flex bg-transparent md:overflow-hidden">
                                        {/* Left Section */}
                                        <div className="lg:w-1/2 max-md:w-full bggrd p-10 flex max-lg:z-[0px] items-center max-md:px-2 justify-center">
                                            <Lottie
                                                animationData={animationData1}
                                                loop={true}
                                                autoplay={true}
                                                className="max-md:w-full md:w-[100%] max-lg:z-[0px] max-md:px-2"
                                            />
                                        </div>

                                        {/* Right Section */}
                                        <div className="lg:w-1/2 md:p-[100px] md:px-[120px] md:flex rounded-lg max-md:p-2 items-center max-lg:w-full">
                                            <div className="md:p-[50px]  shadowbox w-full max-md:p-5 rounded-lg">
                                                <h2 className="text-3xl font-bold mb-6">Login to your Account</h2>
                                                <form className="space-y-5">
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            placeholder="Enter your email"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus: ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="block text-sm font-medium">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            placeholder="Enter your password"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                                                    >
                                                        Login
                                                    </button>
                                                </form>
                                                <p className="mt-4 text-sm">
                                                    Don't have an account?{" "}
                                                    <button onClick={toggleForm} className="text-indigo-600 hover:underline">
                                                        Sign up
                                                    </button>
                                                </p>

                                                <div className="flex items-center justify-center mt-3">
                                                    <hr className=" text-gray-500 rounded-md hover:bg-gray-200 w-full " />
                                                    <span className="text-gray-600 mx-2 text-sm">OR</span>
                                                    <hr className=" text-gray-500 rounded-md hover:bg-gray-200 w-full " />
                                                </div>

                                                <div>
                                                    <button
                                                        className="text-black w-full border-2 rounded-lg py-2 mt-4 hover:bg-gray-100 max-md:text-white hover:max-md:text-black">
                                                        <FcGoogle className="inline-block text-[18px]" /> {" "} Login with Google
                                                    </button>
                                                </div>

                                                {/* <div>
                                                        <button
                                                            className="text-black w-full border-2 rounded-lg py-2 mt-4 hover:bg-gray-100">
                                                            <FaFacebookSquare className="inline-block text-[18px]" /> {" "} Login with Facebook
                                                        </button>
                                                    </div> */}

                                                {/* <div>
                                                    <button
                                                        className="text-black w-full border-2 rounded-lg py-2 mt-4 hover:bg-gray-100">
                                                        <IoLogoApple className="inline-block text-[18px]" /> {" "} Login with Apple
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Signup Form */}
                            <div className="back lg:bg-gradient-to-r max-md:h-full lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                <div className="flex items-center lg:text-black justify-center md:h-screen max-md:px-2 lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                    <div className="w-full max-lg:flex-wrap lg:max-w-[1440px] lg:h-[600px] shadowbox flex  md:overflow-hidden">
                                        {/* Left Section */}
                                        <div className="lg:w-1/2 max-md:w-full bggrd p-10 flex max-lg:z-[0px] items-center max-md:px-2 justify-center">
                                            <Lottie
                                                animationData={animationData2}
                                                loop={true}
                                                autoplay={true}
                                                className="max-md:w-full md:w-[100%] max-lg:z-[0px] max-md:px-2"
                                            />
                                        </div>

                                        {/* Right Section */}
                                        <div className="lg:w-1/2 lg:text-black md:p-[100px] md:px-[120px] md:flex rounded-lg max-md:p-2 items-center max-lg:w-full">
                                            <div className="md:p-[50px] lg:text-black shadowbox w-full max-md:p-5 rounded-lg">
                                                <h2 className="text-3xl font-bold mb-6">Create an Account</h2>
                                                <form className="space-y-4">
                                                    <div>
                                                        <label htmlFor="username" className="block text-sm font-medium">
                                                            Username
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="username"
                                                            placeholder="Enter Username"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium">
                                                            Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            placeholder="Enter your email"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="mono" className="block text-sm font-medium">
                                                            Mobile Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="mono"
                                                            placeholder="Enter your Mobile Number"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="block text-sm font-medium">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            placeholder="Create a password"
                                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <button
                                                            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                                                            onClick={toggleForm}
                                                        >
                                                            Create Account
                                                        </button>
                                                    </div>
                                                </form>
                                                <p className="mt-4 text-sm lg:text-black">
                                                    Already have an account?{" "}
                                                    <button onClick={toggleForm} className="text-indigo-600 hover:underline">
                                                        Login
                                                    </button>
                                                </p>

                                                <div className="flex items-center justify-center mt-1">
                                                    <hr className=" text-gray-500 rounded-md hover:bg-gray-200 w-full " />
                                                    <span className="text-gray-600 mx-2 text-sm">OR</span>
                                                    <hr className=" text-gray-500 rounded-md hover:bg-gray-200 w-full " />
                                                </div>

                                                <div>
                                                    <button
                                                        className="text-black gap-1 w-full border-2 flex justify-center rounded-lg py-2 mt-2 max-md:text-white hover:bg-gray-100 hover:max-md:text-black">
                                                        <FcGoogle className=" text-[21.5px] items-center pt-1" /> Signup with Google
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
    );
};

export default LoginAndSignup;