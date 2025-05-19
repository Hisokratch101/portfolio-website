import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Education Item 1 */}
          <div className="mb-12 relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">Université Paris Cité</h3>
              <p className="text-lg font-semibold text-gray-700">Master 2 – Distributed Systems and Data Science Technologies (Apprenticeship)</p>
              <p className="text-gray-600 italic">Starting September 2025 | Paris, France</p>
            </div>
            <p className="mt-4 text-gray-700">
              Apprenticeship-based program focused on distributed systems, artificial intelligence, big data, and cloud architectures.
            </p>
          </div>
          
          {/* Education Item 2 */}
          <div className="mb-12 relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">École des Sciences de l'Information (ESI)</h3>
              <p className="text-lg font-semibold text-gray-700">Engineering Degree – Data Science and Knowledge Engineering</p>
              <p className="text-gray-600 italic">2022 – 2025 | Rabat, Morocco</p>
            </div>
            <p className="mt-4 text-gray-700">
              Advanced courses in machine learning, data engineering, and statistical modeling.
            </p>
          </div>
          
          {/* Education Item 3 */}
          <div className="relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">Preparatory Classes for Engineering Schools</h3>
              <p className="text-lg font-semibold text-gray-700">Mathematics-Physics and Industrial Sciences Track (MPSI/MP)</p>
              <p className="text-gray-600 italic">2020 – 2022 | Marrakesh, Morocco</p>
            </div>
            <p className="mt-4 text-gray-700">
              Intensive preparation in mathematics, physics, and engineering sciences for competitive entrance to top engineering schools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
