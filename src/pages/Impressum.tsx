
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { contactData } from "../data/contact";

export const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-brand-primary mb-8">Impressum</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-6">
              <p className="font-semibold text-lg">{contactData.companyName}</p>
              <p>{contactData.address.street}</p>
              <p>{contactData.address.postalCode} {contactData.address.city}</p>
              <p>{contactData.address.country}</p>
            </div>

            <h3 className="text-xl font-semibold text-brand-primary mb-3">Kontakt</h3>
            <div className="mb-6">
              <p><strong>Telefon:</strong> {contactData.contact.phone}</p>
              <p><strong>E-Mail:</strong> {contactData.contact.email}</p>
              <p><strong>Website:</strong> {contactData.contact.website}</p>
            </div>

            <h3 className="text-xl font-semibold text-brand-primary mb-3">Handelsregister</h3>
            <div className="mb-6">
              <p><strong>Geschäftsführer:</strong> {contactData.legal.managing_director}</p>
              <p><strong>Registergericht:</strong> {contactData.legal.register_court}</p>
              <p><strong>Registernummer:</strong> {contactData.legal.register_number}</p>
              <p><strong>Umsatzsteuer-ID:</strong> {contactData.legal.vat_id}</p>
            </div>

            <h3 className="text-xl font-semibold text-brand-primary mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <div className="mb-6">
              <p>{contactData.legal.managing_director}</p>
              <p>{contactData.address.street}</p>
              <p>{contactData.address.postalCode} {contactData.address.city}</p>
            </div>

            <h3 className="text-xl font-semibold text-brand-primary mb-3">Haftungsausschluss</h3>
            <h4 className="text-lg font-medium mb-2">Haftung für Inhalte</h4>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h4 className="text-lg font-medium mb-2">Haftung für Links</h4>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h4 className="text-lg font-medium mb-2">Urheberrecht</h4>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
