
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Herausforderungen", href: "#painpoints" },
    { name: "5 Phasen", href: "#methodology" },
    { name: "Erfolgsgeschichten", href: "#case-studies" },
    { name: "Pakete", href: "#packages" },
    { name: "Downloads", href: "#downloads" },
  ];

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
            <h1 className="text-2xl font-bold text-brand-primary">
              KI-<span className="text-brand-secondary">Transformation</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-brand-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="ml-4 bg-brand-secondary hover:bg-orange-600"
                onClick={() => scrollToSection('#meeting')}
              >
                Termin buchen
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
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="text-gray-700 hover:text-brand-secondary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="w-full mt-2 bg-brand-secondary hover:bg-orange-600"
                onClick={() => {
                  scrollToSection('#meeting');
                  setIsOpen(false);
                }}
              >
                Termin buchen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
