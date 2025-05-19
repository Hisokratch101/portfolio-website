import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Item 1 */}
          <div className="mb-12 relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">Somei by Veolia</h3>
              <p className="text-lg font-semibold text-gray-700">Data Science Intern – Predictive Maintenance</p>
              <p className="text-gray-600 italic">February 2025 – Present | Rabat, Morocco</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Developed predictive models (Random Forest, XGBoost) on Dataiku to anticipate pipe failures using historical, sensor, and geospatial data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Implemented survival analysis algorithms (Random Survival Forest) to estimate remaining equipment lifetime</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Built ETL workflows integrating maintenance logs, sensor data, and GIS data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Collaborated with business teams for model interpretation and integration into management tools</span>
              </li>
            </ul>
          </div>
          
          {/* Experience Item 2 */}
          <div className="mb-12 relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">Nucleon Security</h3>
              <p className="text-lg font-semibold text-gray-700">Data Engineering Intern</p>
              <p className="text-gray-600 italic">June 2024 – August 2024 | Rabat, Morocco</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Migrated 10M+ malware records from MongoDB to PostgreSQL, improving performance and data integrity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Designed Python scripts (pandas, SQLAlchemy) for ETL with 35% reduction in processing time</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Built real-time threat dashboards using Apache Superset</span>
              </li>
            </ul>
          </div>
          
          {/* Experience Item 3 */}
          <div className="relative pl-8 border-l-2 border-blue-900">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-900 rounded-full"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-blue-800">Broccoli Data</h3>
              <p className="text-lg font-semibold text-gray-700">Data Engineering Intern</p>
              <p className="text-gray-600 italic">July 2023 – September 2023 | Remote</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Created dbt models to automate transformation of complex statistical data</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">•</span>
                <span>Improved query performance by converting datasets to Parquet format, enhancing accessibility and query speed by 40%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
