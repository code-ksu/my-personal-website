import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-6 sticky top-0 z-50 backdrop-blur-sm bg-white/80 transition-all duration-300">
            <div className="text-2xl font-bold">
                <span className="inline-block rounded-full border-2 border-gray-800 p-2">
                    KB
                </span>
            </div>

            {/* Mobile menu button */}
            <button 
                className="md:hidden z-50 text-2xl"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="hover:text-gray-600">about</a>
                <a href="/podcast" className="hover:text-gray-600">podcast</a>
                <a href="/blog" className="hover:text-gray-600">blog</a>
                <a href="/consultancy" className="hover:text-gray-600">consultancy</a>
                <a href="https://instagram.com" className="hover:text-gray-600">
                    <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-600">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com" className="hover:text-gray-600">
                    <FaGithub size={20} />
                </a>
                <a href="/contact" className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600">
                    get in touch
                </a>
            </div>

            {/* Mobile menu */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
                    <a href="/" className="hover:text-gray-600" onClick={toggleMenu}>about</a>
                    <a href="/podcast" className="hover:text-gray-600" onClick={toggleMenu}>podcast</a>
                    <a href="/blog" className="hover:text-gray-600" onClick={toggleMenu}>blog</a>
                    <a href="/consultancy" className="hover:text-gray-600" onClick={toggleMenu}>consultancy</a>
                    <div className="flex space-x-8 mt-4">
                        <a href="https://instagram.com" className="hover:text-gray-600" onClick={toggleMenu}>
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-gray-600" onClick={toggleMenu}>
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com" className="hover:text-gray-600" onClick={toggleMenu}>
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <a href="/contact" className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600" onClick={toggleMenu}>
                        get in touch
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;