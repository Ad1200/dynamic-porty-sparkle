import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "antony.princeton@email.com",
    href: "mailto:antony.princeton@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/antony-princeton",
    href: "https://linkedin.com/in/antony-princeton",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@antonyprinceton",
    href: "https://github.com/antonyprinceton",
  },
];

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss how I can help with your technical challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="p-6 card-gradient border-border/50 hover-lift animate-on-scroll group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 glow-effect group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="text-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <Card className="p-8 card-gradient border-border/50 inline-block">
            <p className="text-lg mb-6">
              Open to new opportunities and collaborations
            </p>
            <Button size="lg" className="animate-pulse-glow">
              <Mail className="mr-2 h-5 w-5" />
              Send a Message
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
