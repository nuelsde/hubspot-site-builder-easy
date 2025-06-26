
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const packages = [
  {
    name: "KI-Standortbestimmung",
    subtitle: "Wo stehen Sie heute?",
    price: "Kostenlos",
    duration: "2 Stunden",
    description: "Ermitteln Sie Ihre aktuelle KI-Reife und erhalten Sie eine klare Roadmap.",
    features: [
      "KI-Reifegrad-Assessment",
      "Potenzialanalyse für Ihr Unternehmen", 
      "Individuelle KI-Roadmap",
      "Konkrete nächste Schritte",
      "Kostenschätzung für KI-Projekte"
    ],
    highlight: false,
    cta: "Kostenlos buchen"
  },
  {
    name: "KI-Schnellstart",
    subtitle: "Von Stufe 0 zu Stufe 2",
    price: "ab 15.000€",
    duration: "3 Monate",
    description: "Systematischer Einstieg mit Quick Wins und strategischer Ausrichtung.",
    features: [
      "Alles aus Standortbestimmung",
      "KI-Strategie Workshop",
      "Mitarbeiter-Schulungen (Stufe 1)",
      "First Use Cases implementieren",
      "KI-Guidelines & Governance",
      "3 Monate Begleitung"
    ],
    highlight: true,
    cta: "Beratung anfragen"
  },
  {
    name: "KI-Transformation",
    subtitle: "Bis Stufe 4 & darüber hinaus",
    price: "ab 50.000€",
    duration: "6-12 Monate",
    description: "Vollständige KI-Transformation zu einem innovativen, KI-getriebenen Unternehmen.",
    features: [
      "Alles aus KI-Schnellstart",
      "Spezialisierte KI-Copiloten entwickeln",
      "Prozess-Automatisierung",
      "KI-Agenten implementieren",
      "Change Management",
      "Kontinuierliche Optimierung"
    ],
    highlight: false,
    cta: "Projekt besprechen"
  }
];

export const Packages = () => {
  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Unsere KI-Transformationspakete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Egal auf welcher Stufe Sie stehen – wir haben das passende Paket 
            für Ihre KI-Transformation. Transparent, messbar, erfolgsorientiert.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 h-full ${
              pkg.highlight ? 'border-2 border-brand-secondary shadow-lg scale-105' : ''
            }`}>
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Beliebtestes Paket
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-brand-primary mb-2">
                  {pkg.name}
                </CardTitle>
                <p className="text-brand-secondary font-medium mb-4">{pkg.subtitle}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-brand-primary">{pkg.price}</span>
                  <p className="text-gray-600 text-sm mt-1">{pkg.duration}</p>
                </div>
                <p className="text-gray-700">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    pkg.highlight 
                      ? 'bg-brand-secondary hover:bg-orange-600' 
                      : 'bg-brand-primary hover:bg-brand-primary/90'
                  }`}
                  size="lg"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Maßgeschneiderte Lösungen
            </h3>
            <p className="text-gray-700 mb-6">
              Jedes Unternehmen ist einzigartig. Gerne erstellen wir Ihnen ein individuelles Angebot, 
              das exakt zu Ihren Anforderungen und Zielen passt.
            </p>
            <Button variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
              Individuelles Angebot anfordern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
