import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Linux Administration", level: 90, category: "Systems" },
  { name: "Network Configuration", level: 85, category: "Networking" },
  { name: "Azure Cloud", level: 80, category: "Cloud" },
  { name: "Bash Scripting", level: 85, category: "Scripting" },
  { name: "Python", level: 75, category: "Programming" },
  { name: "Docker", level: 80, category: "DevOps" },
  { name: "Kubernetes", level: 70, category: "DevOps" },
  { name: "Troubleshooting", level: 95, category: "Support" },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={skillRef}
      className="space-y-2 opacity-0 animate-fade-in"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        opacity: isVisible ? 1 : 0 
      }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1500 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 0.1}s`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expertise across multiple domains of IT and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <Card
              key={category}
              className="p-6 card-gradient border-border/50 hover-lift"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => (
                    <SkillBar key={skill.name} skill={skill} index={idx} />
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
