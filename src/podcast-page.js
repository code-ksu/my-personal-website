import React from 'react';
import { FaSpotify, FaYoutube } from "react-icons/fa";


const DollarBill = ({ className }) => (
  <svg viewBox="0 0 24 12" className={`${className} icon-small`}>
    <rect x="0.5" y="0.5" width="23" height="11" rx="1" fill="#85BB65"></rect>
    <rect x="2" y="2" width="20" height="8" rx="0.5" stroke="#2F4F2F" stroke-width="0.25" fill="none"></rect>
    <circle cx="12" cy="6" r="3.5" fill="#FFFFFF" fill-opacity="0.9"></circle>
    <g transform="translate(12, 7) scale(0.2)">
      <text x="0" y="0" 
        fill="#1B4F72" text-anchor="middle" 
        font-size="1" font-family="Arial, sans-serif" 
        dominant-baseline="middle">
      $
    </text>
    </g>
  </svg>
);

const EuroBill = ({ className }) => (
  <svg viewBox="0 0 24 12" className={`${className} icon-small text-white`}>
    <rect x="0.5" y="0.5" width="23" height="11" rx="1" fill="#4F94CD"></rect>
    <rect x="2" y="2" width="20" height="8" rx="0.5" stroke="#1B4F72" stroke-width="0.25" fill="none"></rect>
    <g transform="translate(12, 7) scale(0.2)">
      <text x="0" y="0" 
        fill="#FFFFFF" text-anchor="middle" 
        font-size="1" font-family="Arial, sans-serif" 
        className="fill-white"
        dominant-baseline="middle">
      €
    </text>
    </g>
  </svg>
);

const Computer = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`${className} icon-small`} fill="none" stroke="#666666" strokeWidth="0.5">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const Mic = ({ className }) => (
  <svg viewBox="0 0 12 12" className={`${className} icon-small`} fill="none" stroke="#666666" strokeWidth="0.5">
    <path d="M6 0.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0V2a1.5 1.5 0 0 0-1.5-1.5z" />
    <path d="M9.5 5v1a3.5 3.5 0 0 1-7 0V5" />
    <line x1="6" y1="9.5" x2="6" y2="11.5" />
    <line x1="4" y1="11.5" x2="8" y2="11.5" />
  </svg>
);

const Headphones = ({ className }) => (
  <svg viewBox="0 0 12 12" className={`${className} icon-small`} fill="none" stroke="#666666" strokeWidth="0.5">
    <path d="M1.5 9V6a4.5 4.5 0 0 1 9 0v3" />
    <path d="M10.5 9.5a1 1 0 0 1-1 1h-0.5a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h1.5z" />
    <path d="M1.5 9.5a1 1 0 0 0 1 1h0.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1H1.5z" />
  </svg>
);

const PodcastPage = () => {
  const fallingElements = Array.from({ length: 40 }, () => ({
    type: ['dollar', 'euro', 'mic', 'headphones', 'computer'][Math.floor(Math.random() * 5)],
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    left: Math.random() * 100,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        <style>
          {`
            @keyframes fall {
              0% {
                transform: translateY(-10%) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(120vh) rotate(360deg);
                opacity: 0;
              }
            }

            .falling-element {
              position: fixed;
              will-change: transform;
            }
          `}
        </style>

        {fallingElements.map((element, index) => (
          <div
            key={index}
            className="falling-element"
            style={{
              top: '-20px',
              left: `${element.left}%`,
              animation: `fall ${element.duration}s linear infinite`,
              animationDelay: `${element.delay}s`,
              zIndex: 1,
            }}
          >
            <div className={`w-10 opacity-80`}>
              {element.type === 'mic' ? (
                <Mic className="w-10 h-10" />
              ) : element.type === 'headphones' ? (
                <Headphones className="w-10 h-10" />
              ) : element.type === 'computer' ? (
                <Computer className="w-10 h-10" />
              ) : element.type === 'dollar' ? (
                <DollarBill className="w-10 h-10" />
              ) : (
                <EuroBill className="w-10 h-10" />
              )}
            </div>
          </div>
        ))}

        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="text-center mb-4">
            <h1
              className="text-8xl font-bold mb-4"
              style={{
                color: '#FFD700',
                WebkitTextStroke: '1px black',
                textShadow: '0 0 10px rgba(255,215,0,0.9), 0 0 20px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.5)'
              }}
            >
              Startup Sl*ts
            </h1>
            <p
              className="text-3xl font-bold max-w-3xl mx-auto leading-relaxed"
              style={{
                color: '#FFFF00',
                textShadow: '0 0 10px rgba(255,255,0,0.9), 0 0 20px rgba(255,255,0,0.7), 0 0 30px rgba(255,255,0,0.5)'
              }}
            >
              The raw, unfiltered truth about f*cking up your startup.
              <br />
              New episodes every two weeks!
            </p>
          </div>
        </div>

      {/* Episodes Grid */}
      <div className="container mx-auto px-6 pb-16 relative z-10">
        <div className="grid gap-8">
          {/* Latest Episodes */}
          <div className="container mx-auto px-4 py-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Latest Episodes</h1>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              {/* Episode 13 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative aspect-video">
                      <img 
                        src="https://i3.ytimg.com/vi/HuwtABBW8_4/maxresdefault.jpg" 
                        alt="How to Build an AI Startup in 2024? #13" 
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">How to Build an AI Startup in 2024? #13</h2>
                      <span className="text-gray-600">15.01.2025</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      A comprehensive guide to building an AI startup in today's competitive landscape. From ideation to execution, we cover the essential steps and strategies.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.youtube.com/watch?v=HuwtABBW8_4" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <FaYoutube className="mr-2" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Episode 12 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative aspect-video">
                      <img 
                        src="https://i3.ytimg.com/vi/iVGO3sj1t6g/maxresdefault.jpg" 
                        alt="The Future of AI Startups #12" 
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">The Future of AI Startups #12</h2>
                      <span className="text-gray-600">14.12.2024</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Exploring the evolving landscape of AI startups and what the future holds for entrepreneurs in this space. We discuss trends, opportunities, and challenges.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.youtube.com/watch?v=iVGO3sj1t6g" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <FaYoutube className="mr-2" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Episode 11 */}
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative aspect-video">
                      <img 
                        src="https://i3.ytimg.com/vi/K0pLriqRcRU/maxresdefault.jpg" 
                        alt="What Investors Do Not Know About AI? #11" 
                        className="rounded-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">What Investors Do Not Know About AI? #11</h2>
                      <span className="text-gray-600">13.11.2024</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We dive deep into some of the toughest questions about AI, mental health, and data security that every investor and AI enthusiast should understand – but likely doesn't.
                    </p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.youtube.com/watch?v=K0pLriqRcRU" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <FaYoutube className="mr-2" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center relative">
          <h3 className="text-3xl font-bold mb-6">Show More & Never Miss an Episode!</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* YouTube Button */}
            <a
              href="https://www.youtube.com/@Startupslts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors duration-300 font-bold text-lg"
            >
              <FaYoutube className="mr-2"/>
              Watch on YouTube
            </a>
            {/* Spotify Button */}
            <a
              href="https://open.spotify.com/show/2uSmZHz35r9LGq6vVrzD3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-400 transition-colors duration-300 font-bold text-lg"
            >
              <FaSpotify className="mr-2"/>
              Listen on Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;