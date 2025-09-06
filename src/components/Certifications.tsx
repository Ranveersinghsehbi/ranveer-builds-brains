import { Card } from "@/components/ui/card";
import javascriptCert from "@/assets/javascript-certificate.png";
import pythonCert from "@/assets/python-certificate.png";

const Certifications = () => {
  const certifications = [
    {
      title: "JavaScript Essentials 1",
      description: "Successfully completed JavaScript Essentials 1 course offered by Networking Academy through the Cisco Networking Academy program.",
      image: javascriptCert,
      issuer: "Cisco Networking Academy",
      date: "April 12, 2025"
    },
    {
      title: "Python Essentials 1",
      description: "Successfully completed Python Essentials 1 course offered by Networking Academy through the Cisco Networking Academy program.",
      image: pythonCert,
      issuer: "Cisco Networking Academy",
      date: "November 20, 2024"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical skills and knowledge.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-primary">{cert.issuer}</span>
                  <span className="text-muted-foreground">{cert.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;