import React, { useState } from "react";
import Logo from "../assets/logo.png"

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo and Brand */}
                        <div className="flex items-center">
                            <a className="flex items-center space-x-3" href="#">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="object-contain max-w-[90%] max-h-[90%] rounded"
                                    />
                                </div>
                                <span className="font-bold text-xl text-gray-800">FoundIt</span>
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Report
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                About us
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Profile
                            </a>
                        </div>

                        {/* Search Bar */}
                        <div className="hidden md:flex items-center">
                            <form className="flex">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="w-64 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                />
                                <button
                                    className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-r-md hover:bg-yellow-500 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2 rounded-md"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isOpen ? "block" : "hidden"} pb-4`}>
                        <div className="flex flex-col space-y-4 pt-2 pb-3">
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Report
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                About us
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium px-3 py-2">
                                Profile
                            </a>
                            {/* Mobile Search */}
                            <form className="flex px-3">
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                />
                                <button
                                    className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-r-md hover:bg-yellow-500 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer for fixed navbar */}
            <div className="h-16"></div>
        </div>
    );
};

export default HomePage;