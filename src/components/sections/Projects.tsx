import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Neuroblastoma Cancer Outcome Prediction</h3>
              <p className="text-gray-700 mb-4">
                Developed ML models to predict survival and recurrence using integrated clinical and genomic data. 
                Conducted high-dimensional data analysis using PCA, t-SNE, and clustering.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Healthcare</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Agricultural Chatbot with RAG</h3>
              <p className="text-gray-700 mb-4">
                Built a chatbot tailored for Moroccan farmers using LLMs and a RAG pipeline.
                Performed vector indexing (FAISS + SentenceTransformers) on official documents and guides.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">LLM</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">RAG</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Master Data Management Platform</h3>
              <p className="text-gray-700 mb-4">
                Designed and deployed centralized PostgreSQL models unifying clients, products, and suppliers across multiple departments.
                Implemented OpenMetadata for data governance: quality, traceability, and auditing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MDM</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Governance</span>
              </div>
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-blue-800 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Data Pipeline Monitoring Framework</h3>
              <p className="text-gray-700 mb-4">
                Developed an automated pipeline monitoring system with Airflow and Prometheus to detect bottlenecks and failures.
                Created a Grafana dashboard for real-time alerts on latency, retry rates, and SLAs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Airflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Prometheus</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Grafana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
