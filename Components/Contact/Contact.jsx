import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative z-0 mb-8">
                <img src="about-us-page-heading.jpg" alt="Contact Us" className="w-full h-auto object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold text-center z-10">
                    Contact Us
                </h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center w-full p-6 md:p-8 space-y-8 md:space-y-0">
                {/* Left Section - Google Map */}
                <section className="left-sec w-full md:w-1/2 flex flex-col items-center">
                    <div className="w-full mb-4">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090967!2d144.95373531531562!3d-37.81720997975122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11a5b9%3A0x5045675218ceed30!2sNewport%20Sailing%20Pier!5e0!3m2!1sen!2sau!4v1612547123456!5m2!1sen!2sau"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

                {/* Right Section - Form and Greeting */}
                <section className="right-sec w-full md:w-1/2 p-4 flex flex-col items-center">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Say Hello. Don't Be Shy!</h2>
                    <form className="w-full max-w-md">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">Your Name:</label>
                            <input type="text" id="name" name="name" required className="border rounded p-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Your Email:</label>
                            <input type="email" id="email" name="email" required className="border rounded p-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-semibold mb-1">Your Message:</label>
                            <textarea id="message" name="message" required className="border rounded p-2 w-full" />
                        </div>
                        <button type="submit" className="bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                            <FontAwesomeIcon icon={faPaperPlane} className="h-5 w-5 mr-2" />
                            Send
                        </button>
                    </form>
                </section>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full p-8 bg-gray-100">
                {/* Left Section */}
                <section className="left w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                    <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border rounded p-2 w-full md:w-1/2"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="border rounded p-2 w-full md:w-1/2"
                            required
                        />
                        <button type="submit" className="bg-gray-700 text-white rounded p-2 flex items-center justify-center">
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Send
                        </button>
                    </form>
                </section>

                {/* Right Section */}
                <section className="right w-full md:w-1/2 p-4">
                    <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                    <ul className="list-none space-y-4">
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Store Location:</strong>
                            <span>Sunny Isles Beach, FL 33160, United States</span>
                        </li>
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Phone:</strong>
                            <span>010-020-0340</span>
                        </li>
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Office Location:</strong>
                            <span>North Miami Beach</span>
                        </li>
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Work Hours:</strong>
                            <span>07:30 AM - 9:30 PM Daily</span>
                        </li>
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Email:</strong>
                            <span>info@company.com</span>
                        </li>
                        <li className="flex items-start">
                            <strong className="mr-3 text-lg">Social Media:</strong>
                            <span>Facebook, Instagram, Behance, LinkedIn</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}