
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
  brandColors
}) => {
  return (
    <div className="min-h-screen bg-white" style={{
      '--brand-primary': brandColors.primary,
      '--brand-secondary': brandColors.secondary
    } as React.CSSProperties}>
      <Navigation />
      
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
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-600 text-sm font-medium mb-6">
                {heroConfig.badge.icon}
                {heroConfig.badge.text}
              </div>
            )}
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: brandColors.primary }}>
              {heroConfig.title}{" "}
              <span className="font-black" style={{ color: brandColors.primary }}>
                {heroConfig.subtitle}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              {heroConfig.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: brandColors.primary }}
              >
                {heroConfig.primaryButton.text}
              </button>
              {heroConfig.secondaryButton && (
                <button 
                  className="border-2 text-lg px-8 py-4 rounded-lg font-semibold transition-colors hover:text-white"
                  style={{ 
                    borderColor: brandColors.secondary, 
                    color: brandColors.secondary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = brandColors.secondary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {heroConfig.secondaryButton.text}
                </button>
              )}
            </div>

            {heroConfig.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {heroConfig.stats.map((stat, index) => (
                  <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg backdrop-blur-sm" style={{
                    borderLeft: `4px solid ${brandColors.secondary}`
                  }}>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: brandColors.primary }}>{stat.number}</h3>
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
