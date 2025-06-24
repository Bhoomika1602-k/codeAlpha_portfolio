import { Github, Linkedin, Twitter } from "lucide-react";

const skills = [
  { name: "HTML", color: "bg-orange-100 text-orange-800" },
  { name: "CSS", color: "bg-blue-100 text-blue-800" },
  { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" },
  { name: "Python", color: "bg-green-100 text-green-800" },
  { name: "SQL", color: "bg-purple-100 text-purple-800" },
  { name: "Java", color: "bg-red-100 text-red-800" },
  { name: "Prompt Engineering", color: "bg-indigo-100 text-indigo-800" },
  { name: "UI/UX Design", color: "bg-pink-100 text-pink-800" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I am a fresher passionate about digital marketing and emerging technologies. Currently pursuing my education with a focus on programming and data management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              I completed my first year with the SQL course at Integrated Institute of Learning and Management University. As a digital marketing enthusiast, I'm excited about the evolution of AI and new technologies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My strengths include being creative, hardworking, and having excellent time management skills. I'm eager to apply my knowledge and grow in the technology field.
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Twitter size={28} />
              </a>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with laptop and code" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Technical Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`skill-badge ${skill.color} px-4 py-3 rounded-lg text-center font-semibold cursor-pointer`}
              >
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
