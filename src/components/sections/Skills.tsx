import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "MATLAB", "Scala", "Java", "C"]
    },
    {
      title: "Machine Learning/AI",
      skills: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Random Forests", "Survival Analysis"]
    },
    {
      title: "NLP/LLM",
      skills: ["Transformers", "RAG", "SentenceTransformers", "FAISS", "OpenAI API"]
    },
    {
      title: "Data Engineering",
      skills: ["SQL", "PostgreSQL", "MongoDB", "dbt", "Dataiku", "Apache Superset", "Talend"]
    },
    {
      title: "Data Analysis",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau"]
    },
    {
      title: "Distributed Systems",
      skills: ["Apache Kafka", "Airflow", "Redshift", "Spark"]
    },
    {
      title: "Tools",
      skills: ["Jupyter", "Git", "Docker", "REST APIs"]
    }
  ];

  const softSkills = [
    "Clear communication", "Critical thinking", "Autonomy", 
    "Teamwork", "Adaptability", "Time management"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Skills</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
