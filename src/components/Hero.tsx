
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-brand-secondary text-sm font-medium mb-6">
            <Sparkles className="mr-2" size={16} />
            KI wird zur DNA Ihres Unternehmens
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">
            Von KI-Unsicherheit zu{" "}
            <span className="bg-gradient-to-r from-brand-secondary to-orange-600 bg-clip-text text-transparent">
              KI-Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unser bewährtes 5-Stufen-Vorgehensmodell führt etablierte Unternehmen (50-250 MA) 
            systematisch von KI-Unklarheit zu strategischem KI-Vorteil. Ohne Risiko, mit messbaren Ergebnissen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-lg px-8 py-4">
              Kostenlose KI-Potenzialanalyse
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white">
              5-Stufen-Modell entdecken
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">150+</h3>
              <p className="text-gray-600">Erfolgreich begleitete Unternehmen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">98%</h3>
              <p className="text-gray-600">Kundenzufriedenheit</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">10+</h3>
              <p className="text-gray-600">Jahre KI-Beratungserfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
