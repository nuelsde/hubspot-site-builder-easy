
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Here you would integrate with HubSpot or your CRM
    toast({
      title: "Vielen Dank für Ihre Nachricht!",
      description: "Wir werden uns binnen 24 Stunden bei Ihnen melden.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bereit für den nächsten Schritt? Kontaktieren Sie uns für ein kostenloses Erstgespräch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Kostenloses Erstgespräch vereinbaren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <span>+49 (0) 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                  <span>kontakt@merkur-impulse.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <span>Musterstraße 123<br />12345 Berlin</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Warum MERKUR Impulse wählen?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Kostenlose Erstberatung</li>
                  <li>✓ Maßgeschneiderte Lösungen</li>
                  <li>✓ Erfahrenes Expertenteam</li>
                  <li>✓ Nachhaltige Ergebnisse</li>
                  <li>✓ Transparente Kommunikation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
