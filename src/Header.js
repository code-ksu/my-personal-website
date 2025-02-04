import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex justify-between items-center p-6 sticky top-0 z-50 backdrop-blur-sm bg-white/80 transition-all duration-300">
                <div className="text-2xl font-bold">
                    <a href="/" className="inline-block hover:opacity-80 transition-opacity duration-200">
                        <span className="inline-block rounded-full border-2 border-gray-800 p-2">
                            KB
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={`md:hidden z-50 p-2 transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'
                        }`}></span>
                        <span className={`absolute block h-0.5 w-6 bg-gray-800 top-3 transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                        <span className={`absolute block h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                            isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'
                        }`}></span>
                    </div>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="/" className="hover:text-gray-600">about</a>
                    <a href="/podcast" className="hover:text-gray-600">podcast</a>
                    <a href="/blog" className="hover:text-gray-600">blog</a>
                    <a href="/consultancy" className="hover:text-gray-600">consultancy</a>
                    <a href="https://www.instagram.com/jarofraspberry/" className="hover:text-gray-600">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in-kseniia-brauer/" className="hover:text-gray-600">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://github.com/code-ksu" className="hover:text-gray-600">
                        <FaGithub size={20} />
                    </a>
                    <a href="/contact" className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600">
                        get in touch
                    </a>
                </div>
            </nav>

            {/* Mobile Menu - Moved outside nav for better z-index handling */}
            <div className={`fixed inset-0 transition-all duration-500 ease-in-out z-[9999] ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } md:hidden`}>
                {/* Backdrop */}
                <div className={`fixed inset-0 bg-black transition-opacity duration-500 ${
                    isMenuOpen ? 'opacity-70' : 'opacity-0'
                }`} onClick={toggleMenu}></div>
                
                {/* Menu Content */}
                <div className={`fixed right-0 h-full w-[80%] max-w-sm transform transition-transform duration-500 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } flex flex-col bg-gradient-to-br from-white via-white to-teal-50 shadow-2xl`}>
                    <div className="flex flex-col h-full p-8">
                        {/* Close Button */}
                        <button 
                            className="absolute top-6 right-6 p-2 hover:text-teal-700 transition-colors duration-200 z-50"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className="absolute block h-0.5 w-6 bg-current transform rotate-45 top-3"></span>
                                <span className="absolute block h-0.5 w-6 bg-current transform -rotate-45 top-3"></span>
                            </div>
                        </button>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-repeat opacity-5" 
                                 style={{
                                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300897B' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                                     backgroundSize: '20px 20px'
                                 }}>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-6 mt-12 relative">
                            <a href="/" 
                               className="text-2xl font-medium text-gray-900 hover:text-teal-700 transform transition-all duration-200 hover:translate-x-2" 
                               onClick={toggleMenu}>about</a>
                            <a href="/podcast" 
                               className="text-2xl font-medium text-gray-900 hover:text-teal-700 transform transition-all duration-200 hover:translate-x-2" 
                               onClick={toggleMenu}>podcast</a>
                            <a href="/blog" 
                               className="text-2xl font-medium text-gray-900 hover:text-teal-700 transform transition-all duration-200 hover:translate-x-2" 
                               onClick={toggleMenu}>blog</a>
                            <a href="/consultancy" 
                               className="text-2xl font-medium text-gray-900 hover:text-teal-700 transform transition-all duration-200 hover:translate-x-2" 
                               onClick={toggleMenu}>consultancy</a>
                        </div>
                        
                        <div className="mt-auto relative">
                            <div className="flex justify-center space-x-8 mb-8">
                                <a href="https://www.instagram.com/jarofraspberry/" 
                                   className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                                    <FaInstagram size={28} />
                                </a>
                                <a href="https://www.linkedin.com/in-kseniia-brauer/" 
                                   className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                                    <FaLinkedin size={28} />
                                </a>
                                <a href="https://github.com/code-ksu" 
                                   className="text-gray-700 hover:text-teal-700 transition-colors duration-200">
                                    <FaGithub size={28} />
                                </a>
                            </div>
                            <a href="/contact" 
                               className="block w-full bg-teal-700 text-white text-center px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors duration-200 shadow-md"
                               onClick={toggleMenu}>
                                get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;