
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Rocket className="h-12 w-12 text-blue-600" />,
    title: "Digitale Transformation",
    description: "Modernisieren Sie Ihr Unternehmen mit innovativen digitalen Lösungen, die Ihre Effizienz steigern und neue Wachstumsmöglichkeiten schaffen."
  },
  {
    icon: <Target className="h-12 w-12 text-blue-600" />,
    title: "Strategische Beratung",
    description: "Entwickeln Sie mit uns eine maßgeschneiderte Strategie, die Ihre Unternehmensziele optimal unterstützt und messbare Ergebnisse liefert."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Team Development",
    description: "Stärken Sie Ihr Team durch professionelle Schulungen und Workshops, die die Produktivität und Motivation Ihrer Mitarbeiter erhöhen."
  },
  {
    icon: <Zap className="h-12 w-12 text-blue-600" />,
    title: "Process Optimization",
    description: "Optimieren Sie Ihre Geschäftsprozesse durch intelligente Automatisierung und bewährte Best Practices aus der Branche."
  }
];

export const Features = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Von der strategischen Planung bis zur erfolgreichen Umsetzung – 
            wir begleiten Sie auf Ihrem Weg zum digitalen Erfolg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
