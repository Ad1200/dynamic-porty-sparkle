import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Technical Support Engineer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: [
      "Provide L2/L3 technical support for enterprise clients with 99.5% satisfaction rate",
      "Manage Linux server infrastructure supporting 500+ users",
      "Implement automation scripts reducing resolution time by 40%",
      "Mentor junior team members on troubleshooting methodologies",
    ],
    technologies: ["Linux", "Azure", "Networking", "Python", "Bash"],
  },
  {
    title: "IT Support Specialist",
    company: "Global Networks Ltd.",
    period: "2019 - 2021",
    description: [
      "Administered network infrastructure for 200+ workstations",
      "Performed system upgrades and patch management",
      "Documented technical procedures and created knowledge base",
      "Collaborated with development teams on deployment issues",
    ],
    technologies: ["Windows Server", "Active Directory", "Networking", "VMware"],
  },
  {
    title: "Junior System Administrator",
    company: "DataCorp Services",
    period: "2017 - 2019",
    description: [
      "Maintained Linux and Windows server environments",
      "Monitored system performance and security",
      "Assisted in cloud migration projects",
      "Provided first-line technical support",
    ],
    technologies: ["Linux", "Windows", "AWS", "Docker"],
  },
];

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  return (
    <Card
      className="p-6 card-gradient border-border/50 hover-lift animate-on-scroll"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10 glow-effect">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {exp.period}
            </div>
          </div>
          <p className="text-primary font-medium mb-4">{exp.company}</p>
          <ul className="space-y-2 mb-4">
            {exp.description.map((item, idx) => (
              <li key={idx} className="text-sm text-foreground/80 flex items-start">
                <span className="text-primary mr-2">▹</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="hover-lift">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Building and maintaining robust IT infrastructure
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
