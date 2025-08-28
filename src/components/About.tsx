import { Code, Cpu, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Engineering",
      description: "Graduate from Moringa School with a passion for clean, efficient code"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics Student",
      description: "Currently studying at STEMLENS, exploring the future of automation"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Tech Volunteer",
      description: "Active participant in hackathons and tech community events"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Driven",
      description: "Always seeking new challenges and creative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi! I'm Candy, a passionate software engineer who believes technology can transform the world. 
              As a proud graduate of Moringa School, I've built a strong foundation in software development 
              and problem-solving.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I'm expanding my horizons by studying robotics at STEMLENS, where I'm exploring 
              the fascinating intersection of software and hardware. My goal is to create intelligent 
              systems that can make a positive impact on society.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm deeply involved in the tech community, having participated in various hackathons 
              including the Tech for Good hackathon as a volunteer and the Ctrl+Alt+Create hackathon. 
              These experiences have taught me the value of collaboration and rapid innovation.
            </p>
            <div className="pt-6">
              <a 
                href="https://ik.imagekit.io/candy28/Candy%20Wawuda%20CV%20(1).pdf?updatedAt=1756402009992" // put your PDF file path here
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  View Resume
                </button>
              </a>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-purple-400 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;