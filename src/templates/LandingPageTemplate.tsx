
import React from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface TemplateSection {
  id: string;
  component: React.ComponentType<any>;
  props?: any;
}

interface LandingPageTemplateProps {
  title: string;
  description: string;
  heroConfig: {
    badge?: {
      text: string;
      icon?: React.ReactNode;
    };
    title: string;
    subtitle: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
    stats?: Array<{
      number: string;
      label: string;
    }>;
    backgroundImage?: string;
  };
  sections: TemplateSection[];
  navigationItems?: Array<{
    name: string;
    href: string;
  }>;
  brandColors: {
    primary: string;
    secondary: string;
  };
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  title,
  description,
  heroConfig,
  sections,
  navigationItems,
  brandColors
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation navigationItems={navigationItems} brandColors={brandColors} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {heroConfig.backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.84), rgba(255, 255, 255, 0.85)), url('${heroConfig.backgroundImage}')`
            }}
          />
        )}
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {heroConfig.badge && (
              <div className="inline-flex items-center px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full text-brand-secondary text-sm font-medium mb-6">
                {heroConfig.badge.icon}
                {heroConfig.badge.text}
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6">
              {heroConfig.title}{" "}
              <span className="text-brand-primary font-black">
                {heroConfig.subtitle}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {heroConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                {heroConfig.primaryButton.text}
              </button>
              {heroConfig.secondaryButton && (
                <button className="border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors">
                  {heroConfig.secondaryButton.text}
                </button>
              )}
            </div>

            {heroConfig.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {heroConfig.stats.map((stat, index) => (
                  <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg border-l-4 border-brand-secondary backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-brand-primary mb-2">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section) => {
        const Component = section.component;
        return (
          <div key={section.id}>
            <Component {...section.props} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
