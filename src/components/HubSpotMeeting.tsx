
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle, Video } from "lucide-react";

export const HubSpotMeeting = () => {
  return (
    <section id="meeting" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihre KI-Transformation?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Buchen Sie jetzt Ihr kostenloses Erstgespräch und erfahren Sie, 
            wie Ihr Unternehmen von KI profitieren kann. Ohne Verkaufsdruck, mit konkreten Insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Meeting Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Was Sie in unserem Gespräch erwartet:</h3>
            
            <div className="space-y-4">
              {[
                "KI-Reifegrad Ihres Unternehmens analysieren",
                "Konkrete Use Cases für Ihre Branche",
                "Roadmap für Ihre KI-Transformation",
                "Kostenschätzung und Zeitplanung",
                "Antworten auf alle Ihre KI-Fragen"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-secondary flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-lg p-6 mt-8">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="h-6 w-6 text-brand-secondary" />
                <span className="text-lg font-semibold">30 Minuten Ihrer Zeit</span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-brand-secondary" />
                <span className="text-lg font-semibold">100% kostenfrei & unverbindlich</span>
              </div>
            </div>
          </div>

          {/* HubSpot Meeting Widget */}
          <div>
            <Card className="bg-white text-brand-primary">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-2">
                  Kostenloses KI-Erstgespräch buchen
                </CardTitle>
                <p className="text-gray-600">
                  Wählen Sie einen passenden Termin für Ihr persönliches KI-Gespräch
                </p>
              </CardHeader>
              <CardContent>
                {/* HubSpot Meeting Widget - Replace with actual HubSpot embed code */}
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    HubSpot Meeting Widget
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Hier wird das HubSpot Meeting-Widget eingebettet
                  </p>
                  <div className="bg-brand-secondary text-white px-6 py-3 rounded-lg inline-block">
                    <strong>Integration erforderlich:</strong><br />
                    HubSpot Meeting Link einfügen
                  </div>
                </div>
                
                {/* Alternative: Direct booking button */}
                <div className="mt-6 text-center">
                  <button className="w-full bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                    Jetzt Termin buchen
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Sichere Terminbuchung über HubSpot
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Über 150 Unternehmen vertrauen bereits auf unsere KI-Expertise
            </h3>
            <p className="text-lg opacity-90">
              Werden Sie Teil der KI-Revolution. Der erste Schritt ist nur einen Klick entfernt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
