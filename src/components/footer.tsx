"use client";

import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-purple-700 w-full text-white mt-auto">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4 lg:col-span-1 md:col-span-2">
          <Image src="/Logo.svg" width={138} height={52} alt="Company Logo" />
          <p className="text-off-white text-sm leading-relaxed">
            Collaboration platform for modern teams. Join us and make teamwork more effective!
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li>
              <a href="#product" className="hover:underline">Product</a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">Blog</a>
            </li>
            <li>
              <a href="#support" className="hover:underline">Support</a>
            </li>
          </ul>
        </div>

        {/* Features Links */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-semibold">Features</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li>
              <a href="#screensharing" className="hover:underline">Screen Sharing</a>
            </li>
            <li>
              <a href="#ios-android" className="hover:underline">iOS & Android Apps</a>
            </li>
            <li>
              <a href="#filesharing" className="hover:underline">File Sharing</a>
            </li>
            <li>
              <a href="#usermanagement" className="hover:underline">User Management</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h3 className="text-white text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-2 text-off-white text-sm">
            <li>
              <a href="mailto:info@teamapp.com" className="hover:underline">
                info@teamapp.com
              </a>
            </li>
            <li>
              <a href="tel:1-800-200-300" className="hover:underline">
                1-800-200-300
              </a>
            </li>
            <li>
              1010 Sunset Blvd.
              <br />
              Palo Alto, California
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-semibold">Stay up to date</h3>
          <p className="text-off-white text-sm">Subscribe to our newsletter to receive the latest updates.</p>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              className="w-full py-3 pl-4 pr-20 text-sm font-semibold text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-4 text-center text-off-white text-sm">
        &copy; {new Date().getFullYear()} Team Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
