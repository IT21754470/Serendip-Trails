import Image from 'next/image'

export default function Services() {
  return (
    <main className="min-h-screen  bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center ">
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/services-hero2.jpg"
            alt="Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-2xl">
            Discover the best of Sri Lanka with our comprehensive services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            {services.map((service, index) => (
              <div key={index} className="group bg-black-to-br from-blue-100 via-indigo-400 to-purple-200 rounded-xl shadow-xl overflow-hidden border-2 border-blue-200 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                  <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 flex items-center justify-center mr-3 flex-shrink-0 group-hover:from-blue-300 group-hover:to-indigo-300 transition-colors duration-300">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Sri Lanka?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to start planning your perfect Sri Lankan adventure
          </p>
          <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "Tour Planning",
    description: "Customized tour packages tailored to your preferences and interests.",
    image: "/services2.jpg",
    features: [
      "Personalized itinerary planning",
      "Local expert guides",
      "Flexible scheduling",
      "Transportation arrangements",
      "Accommodation booking"
    ]
  },
  {
    title: "Adventure Tours",
    description: "Exciting adventure activities and outdoor experiences across Sri Lanka.",
    image: "/hikes.jpg",
    features: [
      "Hiking and trekking",
      "Wildlife safaris",
      "Water sports",
      "Camping experiences",
      "Adventure photography"
    ]
  },
  {
    title: "Cultural Experiences",
    description: "Immerse yourself in Sri Lanka's rich cultural heritage and traditions.",
    image: "/culturual.jpg",
    features: [
      "Temple visits",
      "Traditional ceremonies",
      "Local cooking classes",
      "Cultural workshops",
      "Heritage site tours"
    ]
  },
  {
    title: "Luxury Travel",
    description: "Premium travel experiences with exclusive amenities and services.",
    image: "/ella.jpg",
    features: [
      "Luxury accommodation",
      "Private transportation",
      "VIP experiences",
      "Fine dining arrangements",
      "Personal concierge service"
    ]
  }
] 