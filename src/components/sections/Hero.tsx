import React from 'react'; // eslint-disable-line

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="mb-8">
          {/* Profile image */}
          <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/30">
            <img src="/images/profile.jpg" alt="Ayyoub El-Hyani" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Ayyoub El-Hyani</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-4">Data Scientist & Data Engineer</h2>
        <div className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block mb-6">
          <p className="font-semibold">Seeking Apprenticeship Position for September 2025</p>
        </div>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          Transforming complex data into actionable insights and building robust data pipelines
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
