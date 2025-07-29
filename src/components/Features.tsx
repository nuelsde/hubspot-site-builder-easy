
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Target, Users, Zap, Sparkles } from "lucide-react";
import { useFeatures } from "@/hooks/useWebsiteContent";

const iconMap: { [key: string]: JSX.Element } = {
  rocket: <Rocket className="h-12 w-12 text-blue-600" />,
  target: <Target className="h-12 w-12 text-blue-600" />,
  handshake: <Users className="h-12 w-12 text-blue-600" />,
  bolt: <Zap className="h-12 w-12 text-blue-600" />,
  default: <Sparkles className="h-12 w-12 text-blue-600" />
};

export const Features = () => {
  const { features, loading, error } = useFeatures();

  if (loading) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Services...</p>
        </div>
      </section>
    );
  }

  if (error || !features.length) {
    return (
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>Fehler beim Laden der Services</p>
        </div>
      </section>
    );
  }
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
          {features.map((feature) => (
            <Card key={feature.id} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  {iconMap[feature.icon] || iconMap.default}
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
