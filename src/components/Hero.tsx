import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">
                Ranveer Singh
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Aspiring Machine Learning Engineer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              BCA student at Lovely Professional University, Phagwara, passionate about 
              artificial intelligence and machine learning. Building the future through code and innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="hero-glow bg-gradient-to-r from-primary to-secondary hover:scale-105 transform transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transform transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transform transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transform transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/20 hover:scale-110 transform transition-all duration-300"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;