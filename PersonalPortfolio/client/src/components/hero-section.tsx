import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <img 
            src="/attached_assets/Screenshot 2025-04-17 130817_1749655363001.png" 
            alt="Bhoomika Gautam - Professional photo" 
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-white/20 shadow-2xl object-cover"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Bhoomika Gautam
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up font-light">
            Fresher | Digital Marketing Enthusiast
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            I am a fresher who completed my first year with the SQL course in Integrated Institute of learning and Management University. I have shown my interest as a digital marketing enthusiast, with the evolution of AI and new technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
