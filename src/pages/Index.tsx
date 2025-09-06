import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-background/50 backdrop-blur border-t border-border">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Ranveer Singh. Built with ❤️ using React and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
