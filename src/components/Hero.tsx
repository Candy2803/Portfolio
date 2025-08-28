import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Engineer",
    "Robotics Student", 
    "Tech Enthusiast",
    "Problem Solver"
  ];
  
  useEffect(() => {
    let index = 0;
    const currentText = roles[currentRole];
    
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setText(currentText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, [currentRole]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background with Geometric Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-blue-900/20">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-blue-500/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-purple-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating Code Symbols */}
        <div className="absolute top-1/4 left-1/3 text-purple-400/30 text-2xl animate-float">{'<>'}</div>
        <div className="absolute bottom-1/3 right-1/4 text-blue-400/30 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>{'{ }'}</div>
        <div className="absolute top-1/2 left-1/5 text-purple-300/20 text-xl animate-float" style={{ animationDelay: '2s' }}>{'</>'}</div>
      </div>
      
      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="mb-12 relative">
          {/* Decorative Elements around name */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Candy
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Wawuda Mzungu
            </span>
          </h1>
          
          {/* Dynamic Role Display */}
          <div className="h-12 mb-8 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Code className="w-6 h-6 text-purple-400" />
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                {text}
                {isTyping && <span className="animate-pulse text-blue-400">|</span>}
              </p>
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
        
        {/* Description Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Moringa Graduate</h3>
            <p className="text-gray-400 text-sm">Software Engineering Excellence</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">STEMLENS Student</h3>
            <p className="text-gray-400 text-sm">Robotics & Innovation</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Hackathon Veteran</h3>
            <p className="text-gray-400 text-sm">Tech for Good & Innovation</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about bridging the gap between <span className="text-purple-400 font-semibold">software engineering</span> and 
            <span className="text-blue-400 font-semibold"> cutting-edge robotics</span>, creating solutions that shape the future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2 group"
            >
              <span>Let's Connect</span>
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex space-x-4">
              <a href="https://github.com/Candy2803" className="p-3 rounded-full bg-slate-800/50 border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110 group">
                <Github className="w-6 h-6 text-purple-400 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/candy-mzungu-52216b203" className="p-3 rounded-full bg-slate-800/50 border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 group">
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 group-hover:text-gray-300">Discover More</span>
            <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;