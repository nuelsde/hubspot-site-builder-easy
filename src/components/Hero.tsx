
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useHeroContent } from "@/hooks/useWebsiteContent";

export const Hero = () => {
  const { heroContent, loading, error } = useHeroContent();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Inhalte...</p>
        </div>
      </section>
    );
  }

  if (error || !heroContent) {
    return (
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p>Fehler beim Laden der Inhalte</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-brand-secondary text-sm font-medium mb-6">
            <Sparkles className="mr-2" size={16} />
            KI wird zur DNA Ihres Unternehmens
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">
            {heroContent.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-lg px-8 py-4"
              onClick={() => scrollToSection(heroContent.cta_button_link)}
            >
              {heroContent.cta_button_text}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
              onClick={() => scrollToSection('#methodology')}
            >
              5-Phasen-Modell entdecken
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">150+</h3>
              <p className="text-gray-600">Erfolgreich begleitete Unternehmen</p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">98%</h3>
              <p className="text-gray-600">Kundenzufriedenheit</p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-brand-primary mb-2">10+</h3>
              <p className="text-gray-600">Jahre KI-Beratungserfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
