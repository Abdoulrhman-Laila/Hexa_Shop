import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div>
            <div className="relative z-0">
                <img src="about-us-page-heading.jpg" alt="About Us" className="w-full h-auto object-cover" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold text-center z-10">
                    About Our Company
                </h1>
            </div>
            <div className="flex flex-col md:flex-row p-6 md:p-8 space-y-6 md:space-y-0">
                <section className="left-sec w-full md:w-1/2 flex items-center justify-center">
                    <img src="about-left-image.jpg" alt="Description" className="w-full h-auto max-w-md" />
                </section>
                <section className="right-sec w-full md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Us & Our Skills</h2>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisl tortor, eu aliquam
                        nunc tincidunt sit amet.
                    </p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </blockquote>
                    <div className="flex space-x-4 md:space-x-6 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 md:h-8 md:w-8 text-black" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 md:h-8 md:w-8 text-black" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 md:h-8 md:w-8 text-black" />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}