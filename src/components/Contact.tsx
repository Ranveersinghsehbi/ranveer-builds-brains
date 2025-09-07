import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">singh.sehbiranveer07@gmail.com</p>
                  </div>
                </div>
              </Card>
              
              
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Phagwara, Punjab, India</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Your first name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Your last name" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="What's this about?" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello..." 
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full hero-glow bg-gradient-to-r from-primary to-secondary hover:scale-105 transform transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;