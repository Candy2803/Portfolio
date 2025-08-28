import { Trophy, Users, Code2, Lightbulb } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tech for Good Hackathon",
      role: "Volunteer",
      type: "Community Impact",
      description: "Contributed to organizing and supporting participants in creating technology solutions for social good. Mentored teams and helped facilitate collaborative problem-solving sessions.",
      impact: "Supported 50+ participants in developing impactful solutions",
      skills: ["Mentoring", "Event Organization", "Community Building", "Tech Leadership"]
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Ctrl+Alt+Create Hackathon",
      role: "Participant",
      type: "Competition",
      description: "Participated in this intensive hackathon, working with a team to develop innovative solutions under time pressure. Focused on creative problem-solving and rapid prototyping.",
      impact: "Developed full-stack application in 8 hours",
      skills: ["Rapid Prototyping", "Team Collaboration", "Full-Stack Development", "Innovation"]
    }
  ];

  const achievements = [
    { icon: <Trophy />, text: "Active participant in multiple hackathons" },
    { icon: <Lightbulb />, text: "Volunteer mentor for tech communities" },
    { icon: <Code2 />, text: "Experience in rapid software development" },
    { icon: <Users />, text: "Strong collaborative and leadership skills" }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through hackathons and community involvement has shaped my approach to collaborative innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-[1.02] group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-400 font-semibold">{exp.role}</span>
                    <span className="text-gray-500">•</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-3 mb-4">
                <p className="text-purple-300 font-semibold text-sm">Impact:</p>
                <p className="text-white">{exp.impact}</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:bg-purple-600/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg bg-gradient-to-b from-purple-600/10 to-blue-600/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-purple-400 mb-3 group-hover:text-blue-400 transition-colors duration-300 flex justify-center">
                  {achievement.icon}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;