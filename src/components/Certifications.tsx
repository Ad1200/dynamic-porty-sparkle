import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    year: "2023",
    credentialId: "AZ-104",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2022",
  },
  {
    name: "Linux Professional Institute LPIC-1",
    issuer: "LPI",
    year: "2021",
  },
  {
    name: "ITIL Foundation",
    issuer: "AXELOS",
    year: "2020",
  },
];

const Certifications = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional credentials and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 card-gradient border-border/50 hover-lift animate-on-scroll group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 glow-effect group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {cert.name}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{cert.year}</Badge>
                    {cert.credentialId && (
                      <Badge variant="secondary" className="text-xs">
                        {cert.credentialId}
                      </Badge>
                    )}
                  </div>
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
