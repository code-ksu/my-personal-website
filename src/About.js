/* conda activate react-env */
import React from 'react';

const startupProjects = [
    {
        id: 1,
        image: "/images/public speaking.jpg",
        title: "GenAI Consulting",
        description: "Empowering enterprises with custom GenAI solutions. Bridging the gap between cutting-edge AI technology and business value.",
    },
    {
        id: 2,
        image: "/images/podcast.png",
        title: "Startup Sl*ts Podcast",
        description: "Leading candid conversation about the world of startups, innovation, and the journey of building something extraordinary.",
        link: "https://www.youtube.com/@Startupslts"
    },
    {
        id: 3,
        image: "/images/tagesspiegel.jpg",
        title: "MVP Development & Leadership",
        description: "From concept to code: Building scalable MVPs. Expertise in Building SaaS Solution for Customers and Investors.",
        link: "https://www.mexb.ai/post/mexb-ai-im-tagesspiegel"
    }
];

const About = () => {
    return (
        <>
            {/* Content Container */}
            <div className="container mx-auto px-6">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between py-12">
                    {/* Profile Image */}
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
                        <div className="relative w-96 h-96">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="/images/ich.jpg"
                                    alt="Professional Portrait"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 md:pl-12">
                        <h1 className="text-4xl font-serif mb-6">
                            Kseniia Brauer is a startup founder, creator, and machine learning specialist.
                        </h1>

                        <p className="text-xl mb-6">
                            She has worked on numerous projects including
                            <span className="underline decoration-yellow-300 decoration-4">
                                {" "}innovative startup
                            </span>
                            {" "}that make a difference.
                        </p>

                        <p className="text-xl mb-12">
                            Her latest podcast
                            <span className="italic"> [Startup Sl*ts] </span>
                            explores technology and entrepreneurship.
                        </p>
                    </div>
                </div>
            </div>


            {/* Startup Projects Section */}

            <div className="py-12 mb-12">
                <div className="mx-auto px-12"> {/* Added container with generous padding */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {startupProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative h-[280px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white"
                            >
                                <div className="flex h-full">
                                    {/* Image Side */}
                                    <div className="w-1/2 h-full">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className="w-1/2 p-4 flex flex-col justify-center">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-3">{project.description}</p>
                                        <a
                                            href={project.link}
                                            className="text-teal-700 text-sm font-medium hover:text-teal-600"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn more →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
