import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "Python", level: 85, category: "Programming" },
    { name: "Java", level: 45, category: "Programming" },
    { name: "C", level: 75, category: "Programming" },
    { name: "C++", level: 75, category: "Programming" },
    { name: "Machine Learning", level: 75, category: "AI/ML" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "TensorFlow", level: 65, category: "AI/ML" },
    { name: "HTML", level: 90, category: "Web Development" },
    { name: "CSS", level: 80, category: "Web Development" },
    { name: "Javascript", level: 70, category: "Web Development" },
    { name: "React", level: 70, category: "Web Development" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Pandas", level: 80, category: "Framework and Libraries" },
    { name: "Numpy", level: 75, category: "Framework and Libraries" },
    { name: "Matplotlib", level: 70, category: "Framework and Libraries" },
    { name: "Seaborn", level: 70, category: "Framework and Libraries" },
    { name: "Scikit-learn", level: 75, category: "Framework and Libraries" },
    { name: "Problem Solving", level: 85, category: "Soft Skills" },
    { name: "Team Player", level: 90, category: "Soft Skills" },
    { name: "Communication", level: 70, category: "Soft Skills" },
    { name: "Adaptability", level: 85, category: "Soft Skills" },
  ];

  const categories = ["Programming", "AI/ML", "Framework and Libraries", "Web Development", "Database", "Tools", "Soft Skills"];
  
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Deep Learning", "Computer Vision", "Natural Language Processing", "Cloud Computing", "DevOps"].map((topic) => (
                <span 
                  key={topic}
                  className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;