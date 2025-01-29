import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center p-4 md:p-6 sticky top-0 z-50 bg-white shadow-sm">
            <div className="text-2xl font-bold">
                <span className="inline-block rounded-full border-2 border-gray-800 p-2">
                    KB
                </span>
            </div>

            {/* Mobile menu button */}
            <button 
                className="md:hidden relative z-50 p-2 -mr-2 text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg transition-colors"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? 
                    <FaTimes className="w-6 h-6 transition-transform duration-200" /> : 
                    <FaBars className="w-6 h-6" />
                }
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
                <a href="/" className="hover:text-gray-600 transition-colors">about</a>
                <a href="/podcast" className="hover:text-gray-600 transition-colors">podcast</a>
                <a href="/blog" className="hover:text-gray-600 transition-colors">blog</a>
                <a href="/consultancy" className="hover:text-gray-600 transition-colors">consultancy</a>
                <a href="https://instagram.com" className="hover:text-gray-600 transition-colors">
                    <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-600 transition-colors">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com" className="hover:text-gray-600 transition-colors">
                    <FaGithub size={20} />
                </a>
                <a href="/contact" className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                    get in touch
                </a>
            </div>

            {/* Mobile menu overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } md:hidden`}
                onClick={toggleMenu}
                aria-hidden={!isMenuOpen}
            />

            {/* Mobile menu panel */}
            <div 
                className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 ease-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile menu header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-xl font-semibold">Menu</span>
                    </div>

                    {/* Mobile menu links */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col py-4">
                            <a href="/" 
                                className="px-6 py-3 text-lg hover:bg-gray-50 transition-colors" 
                                onClick={toggleMenu}
                            >
                                about
                            </a>
                            <a href="/podcast" 
                                className="px-6 py-3 text-lg hover:bg-gray-50 transition-colors" 
                                onClick={toggleMenu}
                            >
                                podcast
                            </a>
                            <a href="/blog" 
                                className="px-6 py-3 text-lg hover:bg-gray-50 transition-colors" 
                                onClick={toggleMenu}
                            >
                                blog
                            </a>
                            <a href="/consultancy" 
                                className="px-6 py-3 text-lg hover:bg-gray-50 transition-colors" 
                                onClick={toggleMenu}
                            >
                                consultancy
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="px-6 py-4 border-t">
                            <div className="flex justify-start space-x-8">
                                <a href="https://instagram.com" 
                                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors" 
                                    onClick={toggleMenu}
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://linkedin.com" 
                                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors" 
                                    onClick={toggleMenu}
                                >
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="https://github.com" 
                                    className="p-2 text-gray-700 hover:text-gray-900 transition-colors" 
                                    onClick={toggleMenu}
                                >
                                    <FaGithub size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Contact button */}
                        <div className="p-6 border-t">
                            <a href="/contact" 
                                className="block w-full text-center bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors" 
                                onClick={toggleMenu}
                            >
                                get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;