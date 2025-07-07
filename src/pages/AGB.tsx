
import { contactData } from "../data/contact";

export const AGB = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 1 Geltungsbereich</h2>
          <p className="mb-4">
            Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der 
            {contactData.companyName} (nachfolgend "Anbieter") und dem Kunden über die Erbringung von 
            Beratungsdienstleistungen im Bereich Künstliche Intelligenz.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 2 Vertragsgegenstand</h2>
          <p className="mb-4">
            Gegenstand der Verträge sind Beratungsleistungen, Workshops, Analysen und sonstige Dienstleistungen 
            im Bereich der KI-Transformation von Unternehmen. Der konkrete Leistungsumfang ergibt sich aus dem 
            jeweiligen Angebot bzw. der Leistungsbeschreibung.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 3 Vertragsschluss</h2>
          <p className="mb-4">
            Ein Vertrag kommt durch die Annahme eines Angebots des Anbieters durch den Kunden zustande. 
            Die Annahme kann schriftlich, per E-Mail oder durch konkludentes Handeln erfolgen.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 4 Leistungserbringung</h2>
          <p className="mb-4">
            Die Leistungen werden nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand der Technik erbracht. 
            Der Anbieter ist berechtigt, sich zur Erfüllung seiner Verpflichtungen sachkundiger Dritter zu bedienen.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 5 Mitwirkungspflichten des Kunden</h2>
          <p className="mb-4">
            Der Kunde stellt alle für die Leistungserbringung erforderlichen Informationen, Unterlagen und 
            Zugänge unentgeltlich zur Verfügung. Er benennt kompetente Ansprechpartner und sorgt für deren 
            Verfügbarkeit.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 6 Vergütung und Zahlungsbedingungen</h2>
          <p className="mb-4">
            Die Vergütung richtet sich nach der vereinbarten Leistungsbeschreibung. Soweit nicht anders vereinbart, 
            sind die Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 7 Vertraulichkeit</h2>
          <p className="mb-4">
            Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen 
            vertraulichen Informationen streng vertraulich zu behandeln und nicht an Dritte weiterzugeben.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 8 Haftung</h2>
          <p className="mb-4">
            Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei leicht 
            fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den typischen, 
            vorhersehbaren Schaden begrenzt.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 9 Kündigung</h2>
          <p className="mb-4">
            Beide Parteien können den Vertrag mit einer Frist von 4 Wochen zum Monatsende kündigen, 
            sofern nicht abweichende Regelungen getroffen wurden.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">§ 10 Schlussbestimmungen</h2>
          <p className="mb-4">
            Es gilt deutsches Recht. Gerichtsstand ist {contactData.address.city}. 
            Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-2">Kontakt bei Fragen zu den AGB:</p>
            <p>{contactData.companyName}</p>
            <p>{contactData.address.street}</p>
            <p>{contactData.address.postalCode} {contactData.address.city}</p>
            <p><strong>E-Mail:</strong> {contactData.contact.email}</p>
            <p><strong>Telefon:</strong> {contactData.contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
