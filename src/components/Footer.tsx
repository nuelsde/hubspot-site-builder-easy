
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">
              KI-Transformation
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr Experte für systematische KI-Transformation. Von der Unklarheit zum Innovationstreiber - 
              mit unserem bewährten 5-Stufen-Modell bringen wir Ihr Unternehmen sicher in die KI-Zukunft.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#methodology" className="text-gray-300 hover:text-white transition-colors">5-Stufen-Modell</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Standortbestimmung</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Schnellstart</a></li>
              <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Transformation</a></li>
              <li><a href="#downloads" className="text-gray-300 hover:text-white transition-colors">Kostenlose Ressourcen</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span>ki@transformation.de</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Musterstraße 123<br />12345 München</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 KI-Transformation. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
