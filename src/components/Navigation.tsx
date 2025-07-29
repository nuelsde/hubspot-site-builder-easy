
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigationConfig } from "@/hooks/useWebsiteContent";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigationConfig, loading } = useNavigationConfig();

  const defaultNavItems = [
    { text: "Herausforderungen", link: "#painpoints" },
    { text: "Phasenmodell", link: "#methodology" },
    { text: "Erfolgsgeschichten", link: "#case-studies" },
  ];

  const navItems = navigationConfig?.nav_items || defaultNavItems;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-brand-primary">
              {navigationConfig?.brand_name || "KI-Transformation"}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.text}
                  onClick={() => scrollToSection(item.link)}
                  className="text-gray-700 hover:text-brand-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
                  {item.text}
                </button>
              ))}
              <Button 
                className="ml-4 bg-brand-secondary hover:bg-orange-600"
                onClick={() => scrollToSection(navigationConfig?.cta_button_link || '#meeting')}
              >
                {navigationConfig?.cta_button_text || "Termin buchen"}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.text}
                  onClick={() => {
                    scrollToSection(item.link);
                    setIsOpen(false);
                  }}
                  className="text-gray-700 hover:text-brand-secondary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.text}
                </button>
              ))}
              <Button 
                className="w-full mt-2 bg-brand-secondary hover:bg-orange-600"
                onClick={() => {
                  scrollToSection(navigationConfig?.cta_button_link || '#meeting');
                  setIsOpen(false);
                }}
              >
                {navigationConfig?.cta_button_text || "Termin buchen"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
