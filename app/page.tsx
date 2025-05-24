"use client";

import Image from "next/image";
import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, services.length - 3) : prevIndex - 3
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 -z-0  ">
          <Image
            src="/sri.jpg"
            alt="Sri Lanka Landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6">
        
          </div>
          <h1 className={`${playfair.className} text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r text-white  text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-fade-in tracking-wide`}>
          Serendip Trails
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Partner in Sri Lankan Travel & Recreation
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
            Our Services
          </h2>
          <div className="relative">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
              {services.slice(currentIndex, currentIndex + 3).map((service, index) => (
                <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200">
                  <div className="relative h-72 mb-2 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black">{service.title}</h3>
                  <p className="text-gray-600 text-black">{service.description}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] animate-fade-in tracking-wide">
            About Serendip Trails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-4 text-white">
              Serendip Trails is dedicated to providing exceptional travel and recreation services
                throughout Sri Lanka. With years of experience and local expertise, we ensure
                memorable experiences for all our clients.
              </p>
              <p className="text-gray-600 text-white">
                Our team of professionals is committed to delivering personalized service and
                creating unforgettable journeys that showcase the beauty and culture of Sri Lanka.
              </p>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/trp-logo.png"
                alt="About TRP"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Tour Planning",
    description: "Customized tour packages tailored to your preferences and interests.",
    image: "/services.jpg"
  },
  {
    title: "Adventure Tours",
    description: "Exciting adventure activities and outdoor experiences across Sri Lanka.",
    image: "/sigiriya.jpeg"
  },
  {
    title: "Cultural Experiences",
    description: "Immerse yourself in Sri Lanka's rich cultural heritage and traditions.",
    image: "/beach.jpeg"
  },
  {
    title: "Wildlife Safaris",
    description: "Experience the diverse wildlife of Sri Lanka's national parks and sanctuaries.",
    image: "/wildlife.jpg"
  },
  {
    title: "Beach Getaways",
    description: "Relax and unwind at Sri Lanka's pristine beaches and coastal destinations.",
    image: "/beach2.jpeg"
  },
  {
    title: "Tea Estate Tours",
    description: "Visit world-famous tea plantations and learn about Ceylon tea production.",
    image: "/teaestate.jpeg"
  },
  {
    title: "Ayurvedic Retreats",
    description: "Rejuvenate your mind and body with traditional Ayurvedic treatments.",
    image: "/ayurwedic.jpg"
  },
  {
    title: "Photography Tours",
    description: "Capture the beauty of Sri Lanka with guided photography expeditions.",
    image: "/tours.jpg"
  },
  {
    title: "Culinary Adventures",
    description: "Discover the rich flavors of Sri Lankan cuisine through cooking classes and food tours.",
    image: "/culinary.jpeg"
  }
]
