import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold animate-slide-in">
            <span className="text-gradient">Antony Princeton</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-slide-in" style={{ animationDelay: "0.2s" }}>
            Technical Support Engineer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground animate-slide-in" style={{ animationDelay: "0.3s" }}>
            Linux | Networking | Cloud Solutions
          </p>
        </div>

        <p className="text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Passionate about solving complex technical challenges and optimizing IT infrastructure. 
          Specialized in Linux systems, network administration, and cloud technologies.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Button size="lg" className="animate-pulse-glow group">
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
          <Button size="lg" variant="outline" className="hover-lift">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="hover-lift">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>

        <div className="pt-8 animate-float" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block text-muted-foreground">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
