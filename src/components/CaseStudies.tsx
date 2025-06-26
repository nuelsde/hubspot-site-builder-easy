
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "Mittelständischer Maschinenbauer",
    industry: "Industrie 4.0",
    employees: "180 Mitarbeiter",
    challenge: "Komplexe Angebotserstellung dauerte 2-3 Wochen",
    solution: "KI-Copilot für Angebotserstellung (Stufe 4.1)",
    results: [
      "75% Zeitersparnis bei Angeboten",
      "40% mehr Angebote pro Monat",
      "95% Kundenzufriedenheit"
    ],
    quote: "In 6 Monaten von KI-Skepsis zu unserem wichtigsten Produktivitätstool.",
    person: "Thomas Müller, Geschäftsführer"
  },
  {
    company: "Beratungsunternehmen",
    industry: "Unternehmensberatung", 
    employees: "95 Mitarbeiter",
    challenge: "Mitarbeiter nutzten KI chaotisch und unsicher",
    solution: "Systematische Einführung nach 5-Stufen-Modell",
    results: [
      "100% Mitarbeiter nutzen KI täglich",
      "30% Effizienzsteigerung",
      "Neue KI-gestützte Services"
    ],
    quote: "Vom KI-Chaos zur KI-Exzellenz. Unsere Kunden merken den Unterschied.",
    person: "Dr. Sarah Weber, Managing Partner"
  },
  {
    company: "Software-Dienstleister",
    industry: "IT-Services",
    employees: "220 Mitarbeiter", 
    challenge: "Konkurrenz mit KI-gestützten Services voraus",
    solution: "KI-Agenten für Kundenservice (Stufe 4.3)",
    results: [
      "24/7 Kundenbetreuung",
      "60% weniger Support-Tickets",
      "Neue Geschäftsfelder erschlossen"
    ],
    quote: "KI hat uns nicht nur effizienter gemacht, sondern völlig neue Geschäfte ermöglicht.",
    person: "Michael Schmidt, CEO"
  }
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Erfolgsgeschichten unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echte Ergebnisse von Unternehmen, die den Weg von KI-Unsicherheit 
            zu strategischem KI-Vorteil erfolgreich gegangen sind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary mb-1">
                        {study.company}
                      </h3>
                      <p className="text-sm text-gray-600">{study.industry} • {study.employees}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Herausforderung:</h4>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-2">Lösung:</h4>
                      <p className="text-gray-700 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Ergebnisse:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-center">
                            <ArrowRight className="h-3 w-3 text-green-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto border-t pt-4">
                  <blockquote className="text-gray-700 italic text-sm mb-2">
                    "{study.quote}"
                  </blockquote>
                  <p className="text-xs text-gray-600 font-medium">
                    {study.person}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Weitere Erfolgsgeschichten anfordern
          </button>
        </div>
      </div>
    </section>
  );
};
