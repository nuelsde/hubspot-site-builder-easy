
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";

const painpoints = [
  {
    icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
    title: "KI-Unsicherheit lähmt",
    description: "Ihre Mitarbeiter haben Angst vor KI oder nutzen sie unkontrolliert. Es fehlt eine klare Strategie und Orientierung."
  },
  {
    icon: <Clock className="h-12 w-12 text-red-500" />,
    title: "Zeitverschwendung durch Tool-Hopping",
    description: "Ständig neue KI-Tools, aber keine nachhaltigen Ergebnisse. Ihre Teams verlieren sich in unkoordinierten Experimenten."
  },
  {
    icon: <Users className="h-12 w-12 text-red-500" />,
    title: "Mitarbeiter werden abgehängt",
    description: "Während die Konkurrenz KI nutzt, bleiben Ihre Prozesse ineffizient. Ihre Fachkräfte verlieren den Anschluss."
  },
  {
    icon: <TrendingDown className="h-12 w-12 text-red-500" />,
    title: "Wettbewerbsnachteil droht",
    description: "Unternehmen mit systematischer KI-Nutzung überholen Sie. Zeit und Kosten laufen davon."
  }
];

export const Painpoints = () => {
  return (
    <section id="painpoints" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Kennen Sie diese Herausforderungen?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Viele etablierte Unternehmen stehen vor denselben KI-Problemen. 
            Sie sind nicht allein – aber Sie müssen jetzt handeln.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painpoints.map((painpoint, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-500 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {painpoint.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-primary mb-3">
                      {painpoint.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {painpoint.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-brand-secondary/10 border border-brand-secondary/20 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Die Lösung: Systematische KI-Transformation
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Unser 5-Phasen-Modell bringt Klarheit in das KI-Chaos und macht Ihr Unternehmen 
              systematisch fit für die KI-Zukunft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
