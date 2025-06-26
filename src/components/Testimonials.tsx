
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mueller",
    position: "Geschäftsführerin, TechStart GmbH",
    content: "Die Zusammenarbeit mit BusinessPro hat unser Unternehmen komplett transformiert. Der ROI war bereits nach 3 Monaten spürbar.",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Michael Schmidt",
    position: "Marketing Director, Innovation AG",
    content: "Professionell, zuverlässig und mit einem echten Verständnis für unsere Branche. Absolute Empfehlung!",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Lisa Weber",
    position: "CEO, Digital Solutions",
    content: "Dank der strategischen Beratung konnten wir unseren Umsatz um 150% steigern. Ein fantastisches Team!",
    rating: 5,
    avatar: "LW"
  }
];

export const Testimonials = () => {
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
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0">
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
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
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
