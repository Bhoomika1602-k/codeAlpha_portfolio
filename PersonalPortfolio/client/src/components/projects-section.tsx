import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "EchoMuse - AI Powered Song Lyric Analyzer",
    description: "A smart web app that compares how AI and humans interpret song lyrics. Built using HTML, CSS, and Python (Flask), it analyzes the emotional tone and meaning of any song, giving both user and AI perspectives on the lyrics in a unique and interactive way.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["HTML", "CSS", "Python", "Flask"],
    techColors: ["bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">My Project</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my development work demonstrating technical skills and creative problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${project.techColors[techIndex]} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
