import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData1 from "../loginlottie.json";
import animationData2 from "../signuplottie.json";
import "./styles.css"; // Import the CSS file for animations

const LoginAndSignup = ({ darkMode }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div
            className={
                darkMode
                    ? "lg:bg-gradient-to-r lg:from-indigo-950 from-50% lg:to-white to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
                    : "lg:bg-gradient-to-r lg:from-indigo-950 lg:from-50% lg:to-white lg:to-50% max-lg:lg:from-white max-lg:bg-indigo-950 max-lg:bg-gradient-to-t"
            }
        >
            <div className="flex items-center justify-center h-screen max-md:px-2">
                <div className="flip-container">
                    <div className={`flipper ${isLogin ? "" : "flipped"}`}>
                        {/* Login Form */}
                        <div className="front">
                            <div className="form-container">
                                <div className="lg:w-1/2 max-md:w-full p-10 flex items-center justify-center">
                                    <Lottie animationData={animationData1} loop autoplay />
                                </div>
                                <div className="lg:w-1/2 md:p-[100px] md:px-[120px] rounded-lg max-md:p-2">
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
                                            Login Now
                                        </button>
                                        <p className="text-sm text-center text-gray-950">
                                            Don't have an account?{" "}
                                            <button
                                                type="button"
                                                onClick={handleToggle}
                                                className="text-indigo-600 hover:underline"
                                            >
                                                Sign up
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Signup Form */}
                        <div className="back">
                            <div className="form-container">
                                <div className="lg:w-1/2 md:p-[100px] md:px-[120px] rounded-lg max-md:p-2">
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
                                        <div>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirm your password"
                                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-600 text-white py-3 text-[18px] font-semibold rounded-md hover:bg-indigo-800"
                                        >
                                            Create Account
                                        </button>
                                        <p className="text-sm text-center text-white">
                                            Already have an account?{" "}
                                            <button
                                                type="button"
                                                onClick={handleToggle}
                                                className="text-indigo-500 hover:underline"
                                            >
                                                Login here
                                            </button>
                                        </p>
                                    </form>
                                </div>
                                <div className="lg:w-1/2 p-10 flex items-center justify-center">
                                    <Lottie animationData={animationData2} loop autoplay />
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
