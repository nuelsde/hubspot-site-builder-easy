import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckSquare } from "lucide-react";

const downloads = [
  {
    title: "KI-Reifegrad Selbsttest",
    description: "Ermitteln Sie in 10 Minuten, auf welcher Stufe Ihr Unternehmen steht.",
    icon: <CheckSquare className="h-8 w-8 text-brand-secondary" />,
    type: "PDF Checkliste",
    size: "2.1 MB"
  },
  {
    title: "5-Stufen-Modell Übersicht",
    description: "Detaillierte Beschreibung aller Stufen mit Praxisbeispielen.",
    icon: <FileText className="h-8 w-8 text-brand-secondary" />,
    type: "PDF Guide", 
    size: "3.8 MB"
  },
  {
    title: "KI Use Cases nach Branchen",
    description: "50+ bewährte KI-Anwendungsfälle für verschiedene Industrien.",
    icon: <FileText className="h-8 w-8 text-brand-secondary" />,
    type: "PDF Sammlung",
    size: "5.2 MB"
  }
];

export const Downloads = () => {
  return (
    <section id="downloads" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Kostenlose KI-Ressourcen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Starten Sie Ihre KI-Transformation mit unseren bewährten Tools und Checklisten. 
            Sofort verfügbar, praxiserprobt, kostenfrei.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloads.map((item, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-brand-secondary/10 rounded-full w-fit group-hover:bg-brand-secondary/20 transition-colors">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-bold text-brand-primary mb-2">
                  {item.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">{item.type} • {item.size}</span>
                </div>
                <Button className="w-full bg-brand-secondary hover:bg-orange-600">
                  <Download className="mr-2 h-4 w-4" />
                  Kostenlos downloaden
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white border-2 border-brand-secondary rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-brand-primary mb-4">
              💡 Bonus: Exklusiver KI-Newsletter
            </h3>
            <p className="text-gray-700 mb-6">
              Erhalten Sie monatlich neue Use Cases, Best Practices und KI-Trends 
              direkt in Ihr Postfach. Nur für Entscheider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-secondary focus:border-transparent"
              />
              <Button className="bg-brand-primary hover:bg-brand-primary/90">
                Newsletter abonnieren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
