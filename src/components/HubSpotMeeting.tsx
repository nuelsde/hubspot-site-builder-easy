
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export const HubSpotMeeting = () => {
  useEffect(() => {
    // Load HubSpot Meetings Embed Script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
                {/* HubSpot Meeting Widget */}
                <div 
                  className="meetings-iframe-container" 
                  data-src="https://www.merkur-impulse.com/meetings/nschadewald?embed=true"
                  style={{ minHeight: '600px' }}
                ></div>
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
