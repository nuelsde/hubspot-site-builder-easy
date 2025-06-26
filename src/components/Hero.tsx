
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ihr Erfolg ist unser{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Auftrag
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Wir helfen Unternehmen dabei, ihre digitale Präsenz zu stärken und 
            nachhaltiges Wachstum zu erzielen. Mit maßgeschneiderten Lösungen 
            bringen wir Ihr Business auf das nächste Level.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Kostenloses Erstgespräch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Unsere Services entdecken
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Über 500 zufriedene Kunden",
              "98% Kundenzufriedenheit",
              "5+ Jahre Erfahrung"
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-700">
                <CheckCircle className="text-green-500" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
