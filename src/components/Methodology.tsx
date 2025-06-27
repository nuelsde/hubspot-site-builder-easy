
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const stages = [
  {
    stage: "Phase 0",
    title: "Unklarheit",
    color: "bg-red-200 border-red-400 text-red-800",
    icon: "🚫",
    description: "KI ist kein Thema, Angst oder Unsicherheit herrscht vor.",
    focus: "Erstes Bewusstsein schaffen, Mythen abbauen, Ängste ansprechen."
  },
  {
    stage: "Phase 1",
    title: "Verstehen & Probieren",
    color: "bg-orange-200 border-orange-400 text-orange-800",
    icon: "🔍",
    description: "Erste Neugier, experimentelles Ausprobieren von KI-Tools.",
    focus: "Raum für Experimente schaffen, Neugier belohnen, Fehler feiern."
  },
  {
    stage: "Phase 2",
    title: "Strategische Ausrichtung",
    color: "bg-yellow-200 border-yellow-400 text-yellow-800",
    icon: "🎯",
    description: "Geschäftsleitung gibt Richtung vor, Use Cases identifizieren.",
    focus: "Orientierung statt Aktionismus, klare Leitplanken definieren."
  },
  {
    stage: "Phase 3",
    title: "KI-Assistenz im Alltag",
    color: "bg-lime-200 border-lime-400 text-lime-800",
    icon: "🤝",
    description: "KI-Tools sind Teil des Arbeitsalltags, hoher Dialog-/Kontrollgrad.",
    focus: "Akzeptanz sichern, Routine etablieren, Erfolge erfassen."
  },
  {
    stage: "Phase 4",
    title: "Spezialisierung & Automation",
    color: "bg-green-200 border-green-400 text-green-800",
    icon: "🚀",
    description: "Spezialisierte Copiloten, KI-Automation bis hin zu Agentenschwärmen.",
    focus: "4.1 Copiloten → 4.2 Automation → 4.3 Agenten → 4.4 Agentenschwärme"
  },
  {
    stage: "Phase 5",
    title: "Innovationstreiber",
    color: "bg-green-300 border-green-500 text-green-900",
    icon: "💎",
    description: "KI als Sparringspartner für neue Geschäftsmodelle und Innovationen.",
    focus: "Systematische Innovation, Mitarbeiter als Mitgestalter, Zeitvorsprung."
  }
];

export const Methodology = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="methodology" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Unser bewährtes 5-Phasen-Vorgehensmodell
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Von KI-Unklarheit zum Innovationstreiber: Systematisch, messbar und nachhaltig. 
            Jede Phase baut auf der vorherigen auf und schafft solides Fundament für die nächste.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${stage.color}`}>
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{stage.icon}</div>
                <div className="text-sm font-medium mb-2">{stage.stage}</div>
                <CardTitle className="text-xl font-bold">
                  {stage.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  {stage.description}
                </p>
                <div className="border-t pt-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">
                      <strong>Fokus:</strong> {stage.focus}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-brand-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Wo steht Ihr Unternehmen heute?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie uns gemeinsam herausfinden, auf welcher Phase Sie stehen und 
              wie wir Sie systematisch zur nächsten Phase führen können.
            </p>
            <button 
              className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => scrollToSection('#meeting')}
            >
              Kostenlose Standortbestimmung
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
