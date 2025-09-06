import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and innovation, I'm on a journey to become a skilled Machine Learning Engineer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm currently pursuing my Bachelor of Computer Applications (BCA) at Lovely Professional University 
              in Phagwara, India. My fascination with artificial intelligence and machine learning drives me to 
              explore the endless possibilities of technology.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in the power of continuous learning and hands-on experience. Through my academic journey 
              and personal projects, I'm building a solid foundation in programming, data science, and machine 
              learning algorithms.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech trends, working on personal projects, 
              or collaborating with fellow developers to create innovative solutions.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Bachelor of Computer Applications</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-secondary/20">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">University</h3>
                  <p className="text-muted-foreground">Lovely Professional University, Phagwara</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/20">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Focus Area</h3>
                  <p className="text-muted-foreground">Machine Learning & AI</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;