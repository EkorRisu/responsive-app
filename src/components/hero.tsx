import React from "react";
import { Lexend_Deca } from "next/font/google";
import { FiArrowRight } from "react-icons/fi"; // Import icon arrow

// Perbaikan impor font dan penulisan subset yang benar
const font = Lexend_Deca({ subsets: ['latin'], weight: '400' });

const Hero = () => {
    return (
        <div className={`bg-[url('/hero.png')] bg-center bg-cover h-screen w-full pt-16 md:pt-20 lg:pt-24 z-10 relative ${font.className}`}>
            <div className="container py-4 px-6 sm:px-8 mx-auto xl:px-0 text-left">
                <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-[100px]">
                    Instant collaboration <br /> for remote teams
                </h1>
                <p className="text-white mt-4 text-base sm:text-lg">
                    All-in-one place for your remote team to <br className="hidden sm:block"/> chat, collaborate, and track project progress.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="px-4 py-2 rounded-l-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 pr-12"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <FiArrowRight className="text-gray-400" />
                        </span>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-2 bg-purple-700 text-white rounded-r-md hover:bg-purple-800 transition">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
