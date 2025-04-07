"use client";
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col lg:flex-row items-center py-10 pr-2 pl-2">
            {/* Left Section */}
            <div className="relative w-full lg:w-1/2">
                <img src="left-banner-image.jpg" alt="Hexashop" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-4">
                    <h1 className="text-4xl font-bold mb-2">We Are Hexashop</h1>
                    <p className="text-lg mb-4">Awesome, clean & creative HTML5 Template</p>
                    <Link href="/shop" className="bg-black text-white py-2 px-4 rounded-lg">
                        Purchase Now
                    </Link>
                </div>
            </div>
            
            {/* Right Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
                {/* Image 1 */}
                <div className="relative bg-gray-200 rounded-lg overflow-hidden group p-2">
                    <img src="baner-right-image-01.jpg" alt="Women" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2>Women</h2>
                        <p>Best Clothes for Women</p>
                    </div>
                </div>
                {/* Image 2 */}
                <div className="relative bg-gray-200 rounded-lg overflow-hidden group p-2">
                    <img src="baner-right-image-02.jpg" alt="Men" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2>Men</h2>
                        <p>Best Clothes for Men</p>
                    </div>
                </div>
                {/* Image 3 */}
                <div className="relative bg-gray-200 rounded-lg overflow-hidden group p-2">
                    <img src="baner-right-image-03.jpg" alt="Kids" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2>Kids</h2>
                        <p>Best Clothes for Kids</p>
                    </div>
                </div>
                {/* Image 4 */}
                <div className="relative bg-gray-200 rounded-lg overflow-hidden group p-2">
                    <img src="baner-right-image-04.jpg" alt="Accessories" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2>Accessories</h2>
                        <p>Best Trend Accessories</p>
                    </div>
                </div>
            </div>
        </div>
    );
}