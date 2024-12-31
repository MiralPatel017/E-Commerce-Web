import React, { useState } from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import animationData1 from "../loginlottie.json"; // Import the JSON file
import animationData2 from "../signuplottie.json"; // Import the JSON file

const LoginAndSignup = ({ darkMode }) => {
    const [isLogin, setIsLogin] = useState(true); // Manage form toggle

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className=
            {
                darkMode ? "lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white text-black max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
                    : "lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white text-black max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
            }
        >
            <div className="px-2 max-md:px-2 lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                <div className="bg-gradient-to-r from-indigo-950 from-50% to-white to-50% max-lg:pt-7 max-lg:bg-gradient-to-t max-md:from-60% max-md:to-60%">
                    <div className="flip-container lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                        <div className={`flipper ${isLogin ? 'lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t' : 'flipped lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t'}`}>
                            {/* Login Form */}
                            <div className="front lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                <div className="flex items-center justify-center h-screen lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t max-md:px-2">
                                    <div className="w-full max-lg:flex-wrap lg:max-w-[1440px] lg:h-[600px] shadowbox flex bg-transparent overflow-hidden">
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
                                            <div className="md:p-[50px] shadowbox w-full max-md:p-5 rounded-lg">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Signup Form */}
                            <div className="back lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                <div className="flex items-center justify-center h-screen max-md:px-2 lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t">
                                    <div className="w-full max-lg:flex-wrap lg:max-w-[1440px] lg:h-[600px] shadowbox flex lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white text-black max-lg:bg-indigo-950 max-lg:bg-gradient-to-t overflow-hidden">
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
                                        <div className="lg:w-1/2 md:p-[100px] md:px-[120px] md:flex rounded-lg max-md:p-2 items-center max-lg:w-full">
                                            <div className="md:p-[50px] shadowbox w-full max-md:p-5 rounded-lg">
                                                <h2 className="text-3xl font-bold mb-6">Create an Account</h2>
                                                <form className="space-y-5">
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
                                                    <button onClick={toggleForm}
                                                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                                                    >
                                                        Sign Up
                                                    </button>
                                                </form>
                                                <p className="mt-4 text-sm">
                                                    Already have an account?{" "}
                                                    <button onClick={toggleForm} className="text-indigo-600 hover:underline">
                                                        Login
                                                    </button>
                                                </p>
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