
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTestimonials } from "@/hooks/useWebsiteContent";

export const Testimonials = () => {
  const { testimonials, loading, error } = useTestimonials();

  if (loading) {
    return (
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Lade Kundenstimmen...</p>
        </div>
      </section>
    );
  }

  if (error || !testimonials.length) {
    return (
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>Keine Kundenstimmen verfügbar</p>
        </div>
      </section>
    );
  }
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von den Erfolgsgeschichten unserer zufriedenen Kunden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author_name.charAt(0)}{testimonial.author_name.split(' ')[1]?.charAt(0) || ''}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author_name}</p>
                    <p className="text-sm text-gray-600">{testimonial.author_position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
