import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      degree: "Software Engineering",
      institution: "Moringa School",
      status: "Graduate",
      description: "Comprehensive program covering full-stack development, algorithms, and software design patterns. Built multiple projects and collaborated on real-world applications.",
      skills: ["JavaScript", "React", "Python", "Database Design", "Agile Development"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      degree: "Diploma in Computer Science and IT",
      institution: "East African University",
      status: "Graduate",
      description: "Computer Science focuses on the theory and development of software and systems, while an IT Diploma emphasizes practical skills in managing, supporting, and applying technology.",
      skills: ["Java", "C#", "System Analysis", "Computer Repair and maintenance"]
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      degree: "Python Programming",
      institution: "Inceptor Institute of Technology",
      status: "Graduate",
      description: "Building APIs using Python language and SQL tables",
      skills: ["Python", "SQL"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      degree: "Robotics",
      institution: "STEMLens Networks",
      status: "Currently Studying",
      description: "Advanced coursework in robotics engineering, automation systems, and AI integration. Focusing on the intersection of software and hardware solutions.",
      skills: ["Robot Programming", "Sensors & Actuators", "Control Systems", "Machine Learning", "Hardware Integration"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational journey reflects my commitment to continuous learning and staying at the forefront of technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-xl text-purple-400 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        edu.status === 'Graduate' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-600/50 hover:to-blue-600/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;