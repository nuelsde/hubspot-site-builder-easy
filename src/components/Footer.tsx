
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useFooterConfig, useContactInfo } from "@/hooks/useWebsiteContent";

export const Footer = () => {
  const { footerConfig, loading: footerLoading } = useFooterConfig();
  const { contactInfo, loading: contactLoading } = useContactInfo();
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">
              {footerConfig?.company_name || "KI-Transformation"}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {footerConfig?.company_description || "Ihr Experte für systematische KI-Transformation. Von der Unklarheit zum Innovationstreiber - mit unserem bewährten 5-Stufen-Modell bringen wir Ihr Unternehmen sicher in die KI-Zukunft."}
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
              {footerConfig?.services ? 
                footerConfig.services.map((service: any, index: number) => (
                  <li key={index}>
                    <a href={service.link} className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </a>
                  </li>
                )) : 
                <>
                  <li><a href="#methodology" className="text-gray-300 hover:text-white transition-colors">5-Stufen-Modell</a></li>
                  <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Standortbestimmung</a></li>
                  <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Schnellstart</a></li>
                  <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">KI-Transformation</a></li>
                  <li><a href="#downloads" className="text-gray-300 hover:text-white transition-colors">Kostenlose Ressourcen</a></li>
                </>
              }
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              {contactInfo?.phone && (
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
              )}
              {contactInfo?.email && (
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
              )}
              {contactInfo?.address && (
                <div className="flex items-start text-gray-300">
                  <MapPin size={16} className="mr-2 mt-1" />
                  <span dangerouslySetInnerHTML={{ __html: contactInfo.address }} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {footerConfig?.copyright_text || "© 2024 KI-Transformation. Alle Rechte vorbehalten."}
            </p>
            <div className="flex space-x-6">
              <a href="/datenschutz" className="text-gray-400 hover:text-white text-sm">Datenschutz</a>
              <a href="/impressum" className="text-gray-400 hover:text-white text-sm">Impressum</a>
              <a href="/agb" className="text-gray-400 hover:text-white text-sm">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
