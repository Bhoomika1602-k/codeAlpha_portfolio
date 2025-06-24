import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "10th Grade",
    institution: "Sun Valley International School",
    year: "2021",
    percentage: "92%",
    description: "Completed secondary education with excellent academic performance."
  },
  {
    degree: "12th Grade", 
    institution: "Sun Valley International School",
    year: "2023",
    percentage: "75%",
    description: "Completed higher secondary education focusing on science and mathematics."
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Education</h2>
          <p className="text-xl text-slate-600">My academic background and achievements</p>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          
          {educationData.map((education, index) => (
            <div key={index} className="relative pl-16 pb-12 timeline-item">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">{education.degree}</h3>
                    <p className="text-blue-600 font-medium">{education.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-600 font-medium">{education.year}</span>
                    <p className="text-green-600 font-semibold text-lg">{education.percentage}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}