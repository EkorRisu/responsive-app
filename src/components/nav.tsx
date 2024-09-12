"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolling(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-20 transition-all duration-500 ease-in-out ${
                isScrolling ? "bg-purple-700 shadow-md" : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-10 font-sans">
                <Image src="/Logo.svg" alt="logo" width={100} height={25} />

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    {["Product", "Blog", "Support", "Log In"].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase().replace(" ", "")}`}
                            className="text-white hover:text-purple-700 transition duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="bg-purple-500 bg-opacity-50 text-white pb-2 pt-1 px-8 rounded-lg hover:bg-opacity-70 transition duration-200 transform hover:-translate-y-1">
                        Get Access
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-gray-800 text-white space-y-6 py-8 transition-all duration-500 ease-in-out">
                    {["Product", "Blog", "Support", "Log In"].map((item, index) => (
                        <Link
                            key={index}
                            href={`/${item.toLowerCase().replace(" ", "")}`}
                            className="text-lg"
                            onClick={toggleMenu}
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        className="bg-purple-500 bg-opacity-50 text-white py-2 px-8 rounded-lg hover:bg-opacity-70 transition duration-200 transform hover:-translate-y-1"
                        onClick={toggleMenu}
                    >
                        Get Access
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
