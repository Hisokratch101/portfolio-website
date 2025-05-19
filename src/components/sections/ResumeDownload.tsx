import React from 'react'; // eslint-disable-line

const ResumeDownload: React.FC = () => {
  return (
    <section id="resume-download" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Download My Resume</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Data Scientist Resume</h3>
            <p className="text-gray-700 mb-6">Resume highlighting my experience and skills in data science, machine learning, and predictive modeling.</p>
            <div className="flex flex-col space-y-3">
              <a 
                href="/resumes/data_scientist_en_updated.pdf" 
                download
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download in English
              </a>
              <a 
                href="/resumes/data_scientist_fr_updated.pdf" 
                download
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Télécharger en Français
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Data Engineer Resume</h3>
            <p className="text-gray-700 mb-6">Resume highlighting my experience and skills in data engineering, ETL pipelines, and database optimization.</p>
            <div className="flex flex-col space-y-3">
              <a 
                href="/resumes/data_engineer_en_updated.pdf" 
                download
                className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download in English
              </a>
              <a 
                href="/resumes/data_engineer_fr_updated.pdf" 
                download
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Télécharger en Français
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;
