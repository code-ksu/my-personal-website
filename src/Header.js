import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const header = () => (
    <nav className="flex justify-between items-center p-6 sticky top-0 z-50 backdrop-blur-sm bg-white/80 transition-all duration-300">
        <div className="text-2xl font-bold">
            <span className="inline-block rounded-full border-2 border-gray-800 p-2">
                KB
            </span>
        </div>

        <div className="flex items-center space-x-6">
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
    </nav>
);
export default header;