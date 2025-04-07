"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'; // تأكد من تثبيت heroicons

export default function Nav() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white shadow-lg p-4 md:p-6 flex justify-between items-center transition-colors duration-300 ease-in-out relative">
            <div className="flex items-center pl-12">
                <img src="logo222.png" alt="Logo" className="h-16 md:h-20 lg:h-14 w-auto" />
            </div>
            <nav className="hidden md:flex">
                <ul className="flex space-x-8 pr-12 text-black">
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        <Link href="/Mens">Mens</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        <Link href="/Womens">Womens</Link>
                    </li>
                    <li className="hover:text-gray-400 transition-colors duration-300">
                        <Link href="/Kids">Kids</Link>
                    </li>
                    <li className="relative group">
                        <button 
                            className="focus:outline-none hover:text-gray-300 transition-colors duration-300"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        >
                            Pages
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-50">
                                <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                    <Link href="/About">About Us</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                    <Link href="/Contact">Contact Us</Link>
                                </li>
                                <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                    <Link href="/products">Products</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <button className="md:hidden text-black" onClick={toggleMobileMenu}>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
                    <ul className="flex flex-col space-y-2 p-4 text-black">
                        <li className="hover:text-gray-400 transition-colors duration-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-gray-400 transition-colors duration-300">
                            <Link href="/Mens">Mens</Link>
                        </li>
                        <li className="hover:text-gray-400 transition-colors duration-300">
                            <Link href="/Womens">Womens</Link>
                        </li>
                        <li className="hover:text-gray-400 transition-colors duration-300">
                            <Link href="/Kids">Kids</Link>
                        </li>
                        <li className="relative group">
                            <button 
                                className="focus:outline-none hover:text-gray-300 transition-colors duration-300"
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                            >
                                Pages
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md z-50">
                                    <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                        <Link href="/About">About Us</Link>
                                    </li>
                                    <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                        <Link href="/Contact">Contact Us</Link>
                                    </li>
                                    <li className="p-2 hover:bg-gray-200 rounded-md transition-colors duration-200">
                                        <Link href="/products">Products</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}