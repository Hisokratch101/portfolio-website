import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-gray-700">
            I am a data professional with expertise in both Data Science and Data Engineering, 
            currently pursuing an Engineering Degree in Data Science and Knowledge Engineering at 
            École des Sciences de l'Information (ESI) in Rabat, Morocco. In September 2025, I will 
            be starting my Master's in Distributed Systems and Data Science Technologies at 
            Université Paris Cité in France as an apprenticeship program.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            My experience spans predictive maintenance, ETL pipeline development, and machine learning 
            model implementation. I've worked with various technologies including Dataiku, PostgreSQL, 
            MongoDB, and Apache Superset, and I'm proficient in Python, R, and several other programming 
            languages.
          </p>
          
          <p className="text-lg mb-10 text-gray-700">
            I'm passionate about transforming complex data into actionable insights and building robust 
            data pipelines that drive business value. My background in both data science and engineering 
            allows me to bridge the gap between analytical insights and production-ready implementations.
          </p>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2">French</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-right text-sm mt-1 text-gray-600">C2 - Proficient</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2">English</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-right text-sm mt-1 text-gray-600">C1 - Advanced</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2">Arabic</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-right text-sm mt-1 text-gray-600">Native</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
