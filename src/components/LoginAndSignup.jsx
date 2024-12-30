import React from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import animationData from "../loginlottie.json"; // Import the JSON file

const LoginAndSignup = ({ darkMode }) => {
    return (
        <div className={darkMode ? "lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50%  max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t" : "lg:bg-gradient-to-r lg:from-indigo-950 lg:from-50% lg:to-white lg:to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"}>
            <div className={darkMode ? "px-2" : "px-2"}>
                <div className="flex items-center justify-center h-screen lg:bg-gradient-to-r lg:from-indigo-950 lg:from-50% lg:to-white to-50%">
                    <div className="w-full max-md:flex-wrap md:max-w-[1440px] md:h-[600px] shadowbox flex bg-white overflow-hidden">
                        {/* Left Section */}
                        <div className="w-1/2 max-md:w-full bggrd p-10 flex z-auto items-center justify-center">

                            {/* lottie animation */}
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                className="max-md:w-full md:w-[100%]"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="w-1/2 md:p-[100px] md:px-[120px] md:flex items-center max-md:w-full">
                            <div className="md:p-[50px] shadowbox w-full">
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
                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
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
                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white py-3 text-[18px] font-semibold rounded-md hover:bg-indigo-900"
                                    >
                                        Sign In
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-3 bg-indigo-100 text-indigo-600 py-3 text-[18px] font-semibold rounded-md hover:bg-white hover:text-indigo-600 hover:bordefocus:outline-none focus:ring hover:border-indigo-300 hover:border-[2.6px]"
                                    >
                                        <FcGoogle  className="text-[25px]"/> Conntinue with google
                                    </button>

                                    <p className="text-sm text-center text-gray-950">
                                        Already have an account?{" "}
                                        <a href="#" className="text-indigo-600 hover:underline">
                                            Login here
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignup;