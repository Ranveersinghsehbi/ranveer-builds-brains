import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import ranveerPortrait from "@/assets/ranveer-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              BCA student at Lovely Professional University, Phagwara, passionate about 
              artificial intelligence and machine learning. Building the future through code and innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
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
          
          <div className="flex gap-6">
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
        
        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={ranveerPortrait}
              alt="Ranveer Singh"
              className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl hover:scale-105 transform transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;