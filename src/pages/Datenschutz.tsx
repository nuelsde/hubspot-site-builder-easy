
import { contactData } from "../data/contact";

export const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Datenschutzerklärung</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-brand-primary mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-brand-primary mb-3">Allgemeine Hinweise</h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold text-brand-primary mb-3">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">2. Verantwortliche Stelle</h2>
          <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">{contactData.companyName}</p>
            <p>{contactData.address.street}</p>
            <p>{contactData.address.postalCode} {contactData.address.city}</p>
            <p><strong>Telefon:</strong> {contactData.contact.phone}</p>
            <p><strong>E-Mail:</strong> {contactData.contact.email}</p>
          </div>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">3. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-brand-primary mb-3">Cookies</h3>
          <p className="mb-4">
            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
            Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
            und sicherer zu machen.
          </p>

          <h3 className="text-xl font-semibold text-brand-primary mb-3">Server-Log-Dateien</h3>
          <p className="mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">4. Kontaktformular</h2>
          <p className="mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
            von Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-semibold text-brand-primary mb-4">5. Ihre Rechte</h2>
          <p className="mb-4">Sie haben jederzeit das Recht:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
            <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
            <li>der Datenverarbeitung zu widersprechen</li>
            <li>sich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
