import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="mb-4 flex flex-col items-center md:items-start">
                    <img src="logo.png" alt="Logo" className="h-16 mb-4" />
                    <p className="text-sm mb-2">1661 Collins Ave, Sunny Isles Beach, FL 33160</p>
                    <p className="text-sm mb-2">
                        Email: <a href="mailto:hexashopcompany@gmail.com" className="hover:underline">hexashopcompany@gmail.com</a>
                    </p>
                    <p className="text-sm">
                        Phone: <a href="tel:+012-0340" className="hover:underline">012-0340</a>
                    </p>
                </div>
                {/* Shopping & Categories */}
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-lg font-bold mb-4 border-b-2 border-gray-600 pb-2">Shopping & Categories</h5>
                    <ul className="space-y-2">
                        <li><a href="/Mens" className="hover:underline transition duration-300">Men's Shopping</a></li>
                        <li><a href="/Womens" className="hover:underline transition duration-300">Women's Shopping</a></li>
                        <li><a href="/Kids" className="hover:underline transition duration-300">Kid's Shopping</a></li>
                    </ul>
                </div>
                {/* Useful Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-lg font-bold mb-4 border-b-2 border-gray-600 pb-2">Useful Links</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline transition duration-300">About Us</a></li>
                        <li><a href="#" className="hover:underline transition duration-300">Help</a></li>
                        <li><a href="#" className="hover:underline transition duration-300">Tracking ID</a></li>
                    </ul>
                </div>
                {/* Follow Us */}
                <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-lg font-bold mb-4 border-b-2 border-gray-600 pb-2">Follow Us</h5>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-600 pt-4">
                <p className="text-sm">&copy; 2025 Hexashop Co. All rights reserved.</p>
            </div>
        </div>
    );
}