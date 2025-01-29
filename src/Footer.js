const footer = () => (
    <>
        {/* Podcast Section with Wave */}
        <div className="relative">
            {/* Background */}
            <div className="absolute w-full h-full">
                {/* Wave SVG */}
                <div className="absolute bottom-0 w-full">
                    <svg
                        viewBox="0 0 1440 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,64L80,80C160,96,320,128,480,128C640,128,800,96,960,80C1120,64,1280,64,1360,64L1440,64L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>
            </div>

            {/* Content */}
            <div className="relative">
                {/* Wave marquee Animation */}
                <div className="relative overflow-hidden w-full">
                    <svg width="100%" height="200" viewBox="0 0 1880 200" xmlns="http://www.w3.org/2000/svg" className="transform-origin-center md:scale-100 scale-150"> 
                        <style>
                            {`
        text {
            font-size: 3rem;
            font-family: serif;
            fill: #1a1a1a;
        }
        @media (max-width: 768px) {
            text {
                font-size: 4rem;
            }
        }
    `}
                        </style>

                        <symbol id="wave-path">
                            {/* Increased amplitude by adjusting Y coordinates */}
                            <path id="path" d="M 0,100 
        C 240,60 480,140 720,100 
        C 960,60 1200,140 1440,100
        C 1680,60 1920,140 2160,100
        C 2400,60 2640,140 2880,100" /> {/* Extended path */}
                        </symbol>

                        <use href="#wave-path" stroke="transparent" strokeWidth="1" fill="none" />

                        <text>
                            <textPath href="#path" startOffset="100%">
                                Follow the Podcast • Follow the Podcast • Follow the Podcast • Follow the Podcast •
                                <animate
                                    attributeName="startOffset"
                                    from="100%"
                                    to="-100%"
                                    dur="30s"
                                    repeatCount="indefinite"
                                />
                            </textPath>
                        </text>

                        <text>
                            <textPath href="#path" startOffset="100%">
                                Follow the Podcast • Follow the Podcast • Follow the Podcast • Follow the Podcast •
                                <animate
                                    attributeName="startOffset"
                                    from="100%"
                                    to="-100%"
                                    dur="30s"
                                    begin="15s"
                                    repeatCount="indefinite"
                                />
                            </textPath>
                        </text>
                    </svg>

                    {/* Rest of the component remains the same */}
                </div>

                {/* Subscribe button */}
                <div className="text-center pb-32">
                    <button className="text-gray-800 hover:text-gray-600 font-medium">
                        subscribe here
                    </button>
                </div>
            </div>
        </div>
        <footer className="bg-white py-8 text-center">
            <p className="text-sm text-gray-600"> Kseniia Brauer {new Date().getFullYear()}</p>
            <a href="/impressum" className="text-sm text-gray-600 hover:text-gray-800 ml-4">
                Impressum
            </a>
        </footer>
    </>
);
export default footer;