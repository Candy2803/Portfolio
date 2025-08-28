import { Code, Database, Cpu, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 70 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics & AI",
      skills: [
        { name: "Robot Programming", level: 75 },
        { name: "Sensor Integration", level: 70 },
        { name: "Control Systems", level: 65 },
        { name: "Machine Learning", level: 60 },
        { name: "Arduino/Raspberry Pi", level: 80 }
      ]
    }
  ];

  const ProgressBar = ({ skill, delay }: { skill: { name: string; level: number }; delay: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${delay}ms`,
            animation: 'slideIn 1s ease-out forwards'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse skill set spanning software engineering, robotics, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar 
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Additional Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Palette />, label: "UI/UX Design" },
                { icon: <Smartphone />, label: "Mobile Development" },
                { icon: <Server />, label: "DevOps" },
                { icon: <Code />, label: "API Development" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-b from-purple-600/10 to-blue-600/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-purple-400 mb-2 group-hover:text-blue-400 transition-colors duration-300 flex justify-center">
                    {item.icon}
                  </div>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;