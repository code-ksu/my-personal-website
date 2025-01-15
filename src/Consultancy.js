import React from 'react';
import { Link } from 'react-router-dom';

function Consultancy() {
  const services = [
    {
      title: "Data-Driven Startup Strategy Development",
      description: "Transform your ideas into scalable business models by leveraging data analytics and customer insights. We help startups identify target audiences and refine market positioning through quantitative surveys, customer behavior analysis, and actionable clustering.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Chart/Analytics icon */}
          <path d="M21 21H4a2 2 0 0 1-2-2V3" />
          <path d="M7 14l4-4 4 4 4-4" />
          <path d="M3 9h18" className="animate-pulse" />
          <path d="M3 15h18" className="animate-pulse" />
        </svg>
      )
    },
    {
      title: "AI and Tech-Driven Growth Solutions",
      description: "Harness the power of AI and data-driven technologies for business growth. From fine-tuning large language models to building RAG systems, we create scalable AI solutions tailored to your industry needs.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* AI/Brain icon */}
          <path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
          <path d="M9 19h6" />
          <path d="M12 14v5" />
          <circle cx="12" cy="8" r="2" className="animate-pulse" />
          <path d="M12 2v2" className="animate-pulse" />
        </svg>
      )
    },
    {
      title: "Business Process Optimization",
      description: "Unlock new levels of efficiency with thorough analysis of your business workflows. Using advanced analytics and data engineering, we identify bottlenecks, streamline processes, and design solutions aligned with your goals.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Process/Workflow icon */}
          <path d="M4 4h16" />
          <path d="M4 12h16" />
          <path d="M4 20h16" />
          <circle cx="8" cy="4" r="1" className="animate-pulse" />
          <circle cx="12" cy="12" r="1" className="animate-pulse" />
          <circle cx="16" cy="20" r="1" className="animate-pulse" />
        </svg>
      )
    },
    {
      title: "Digital Transformation",
      description: "Empower your business to thrive in an ever-changing digital environment. Leveraging expertise in AI, cloud solutions, and automation, we guide organizations through modernized infrastructures and processes.",
      icon: (
        <svg className="w-12 h-12 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Digital Transformation/Network icon */}
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <path d="M6 10v4" />
          <path d="M12 10v4" />
          <path d="M18 10v4" />
          <path className="animate-pulse" d="M8 6h.01" />
          <path className="animate-pulse" d="M16 18h.01" />
        </svg>
      )
    }
  ];

  const consultingSteps = [
    {
      title: "Understanding Your Goals",
      description: "We begin by discussing your challenges, goals, and vision to ensure a clear understanding of your business needs."
    },
    {
      title: "Data-Driven Insights",
      description: "I analyze your workflows, customer data, and market position using proven methodologies to uncover opportunities and solutions."
    },
    {
      title: "Customized Strategy",
      description: "I create a tailored roadmap with actionable steps, whether it's market entry, AI integration, or process optimization."
    },
    {
      title: "Implementation Support",
      description: "I guide you through implementing the strategy, from deploying AI models to refining business processes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-50/50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Empowering Startups and Businesses with Data-Driven Strategies and Scalable Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leverage my expertise in AI, SaaS, and product development to overcome challenges, scale operations, and achieve sustainable growth.
              </p>
              <div className="flex gap-4 mb-12">
                <Link
                  to="/contact"
                  className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Get Started
                </Link>
                <a
                  href="#services"
                  className="border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
              {/* About Me Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    With a strong foundation in social sciences and a specialized focus on machine learning, I am a seasoned professional with extensive experience in AI-driven innovation. As the founder and Head of AI Innovations at mexb.ai, I've led efforts in fine-tuning large language models, developing AI-driven chatbots, and building retrieval-augmented generation (RAG) systems. My expertise extends to data engineering, advanced analytics, and the evaluation of open-source GenAI models for diverse use cases.
                  </p>
                  <p>
                    Beyond the technical realm, I've successfully combined business strategy and AI development. My work includes conducting market analyses, designing go-to-market strategies, and presenting at renowned industry events. I have also spearheaded recruitment, built high-performing teams, and collaborated with stakeholders to ensure alignment with business objectives.
                  </p>
                  <p>
                    Driven by curiosity and a commitment to impact, I thrive at the intersection of technology, business, and research. My passion lies in leveraging AI to solve real-world challenges and create value for organizations and communities alike.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
              <img
                src="/images/consultancy.jpg"
                alt="Business Strategy Consultant"
                className="relative z-10 rounded-lg shadow-xl w-full max-w-md mx-auto h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 pl-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How Consultancy Works Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          How Consultancy with Me Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultingSteps.map((step, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-teal-700 text-white rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Scale Your Business with AI-Driven Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's collaborate to transform your challenges into opportunities through data-driven strategies and innovative technology solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
