import { Download } from "lucide-react";

const experiences = [
  {
    title: "Reseller",
    company: "Meesho App",
    duration: "2020-2021",
    description: "Worked as a reseller on Meesho app, gaining valuable experience in e-commerce and digital marketing strategies.",
    technologies: ["E-commerce", "Digital Marketing"],
    techColors: ["bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800"]
  }
];

const certifications = [
  {
    title: "The Retailer Course",
    issuer: "Infosys Springboard",
    year: "2024",
    description: "Completed comprehensive course on retail management and e-commerce strategies.",
    technologies: ["Retail Management", "E-commerce"],
    techColors: ["bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "DBMS Course",
    issuer: "Great Learning",
    year: "2024",
    description: "Completed database management systems course with certification.",
    technologies: ["Database", "SQL"],
    techColors: ["bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "The SQL Basics Course",
    issuer: "Simple Learn",
    year: "2025",
    description: "Completed foundational SQL course covering database querying and management.",
    technologies: ["SQL", "Database"],
    techColors: ["bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800"]
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "Simple Learn",
    year: "2025",
    description: "Completed course on AI prompt engineering techniques and best practices.",
    technologies: ["AI", "Prompt Engineering"],
    techColors: ["bg-indigo-100 text-indigo-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    year: "2025",
    description: "Completed foundational networking course covering network protocols and administration.",
    technologies: ["Networking", "IT"],
    techColors: ["bg-orange-100 text-orange-800", "bg-red-100 text-red-800"]
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "2025",
    description: "Completed comprehensive Java programming course with certification.",
    technologies: ["Java", "Programming"],
    techColors: ["bg-red-100 text-red-800", "bg-yellow-100 text-yellow-800"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Experience & Certifications</h2>
          <p className="text-xl text-slate-600">My professional journey and educational achievements</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          
          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Work Experience</h3>
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-16 pb-12 timeline-item">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">{experience.title}</h4>
                    <span className="text-blue-600 font-medium">{experience.duration}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{experience.company}</p>
                  <p className="text-slate-600 leading-relaxed">{experience.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`${experience.techColors[techIndex]} px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="relative pl-16 pb-12 timeline-item">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-slate-800">{cert.title}</h4>
                    <span className="text-blue-600 font-medium">{cert.year}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`${cert.techColors[techIndex]} px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
