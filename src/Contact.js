import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/mwppwnag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-50/50 to-white py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
          <p className="text-xl text-gray-600 mb-2">
            I'm here to help bring your ideas to life.
          </p>
          <p className="text-xl text-gray-600">
            Have a project or question? Just drop me a message below, and I'll get back to you promptly.
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 rounded-lg bg-teal-50 text-teal-700 border border-teal-200">
            <p className="font-medium">Thank you for your message!</p>
            <p>I'll get back to you as soon as possible.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-700 border border-red-200">
            <p className="font-medium">Oops! Something went wrong.</p>
            <p>Please try again or contact me directly via email.</p>
          </div>
        )}

        <form 
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-8 space-y-6"
        >
          <div>
            <label 
              htmlFor="email" 
              className="block text-gray-700 font-medium mb-2"
            >
              Email <span className="text-teal-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label 
              htmlFor="subject" 
              className="block text-gray-700 font-medium mb-2"
            >
              Subject <span className="text-teal-600">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors"
              placeholder="What would you like to discuss?"
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className="block text-gray-700 font-medium mb-2"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:border-teal-700 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about your project, needs, and timeline..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all
                ${isSubmitting 
                  ? 'bg-teal-400 cursor-not-allowed'
                  : 'bg-teal-700 hover:bg-teal-600 active:bg-teal-800 hover:shadow-lg'
                }
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
