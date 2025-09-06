import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, BarChart3, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "House Price Prediction Model",
      description: "A machine learning project which predicts house prices based on numerous features from dataset imported from kaggle and the model used is Linear Regression.",
      tech: ["Python", "Scikit-learn", "Pandas", "Linear Regression"],
      icon: Brain,
      status: "Completed"
    },
    {
      title: "Question Bank Setup",
      description: "An interactive C++ project where students can answer multiple questions and get feedback on whether their answers were correct or not.",
      tech: ["C++", "Object-Oriented Programming", "Interactive Design"],
      icon: Database,
      status: "Completed"
    },
    {
      title: "MovieFlix",
      description: "Built a frontend web application which shows multiple movies and some info on them like ratings.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: Globe,
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing my projects and skills. Built with React and modern web technologies.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: BarChart3,
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've been working on to apply my knowledge and skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                   <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-primary/10"
                      onClick={() => window.open('https://github.com/Ranveersinghsehbi', '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-primary/10">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('https://github.com/Ranveersinghsehbi', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;