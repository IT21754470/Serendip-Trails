'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PlanJourney() {
  const [ setSelectedRegion] = useState('')

  const regions = [
    {
      name: 'Cultural Triangle',
      description: 'Explore ancient temples, palaces, and archaeological sites',
      highlights: ['Sigiriya', 'Anuradhapura', 'Polonnaruwa', 'Dambulla'],
      image: '/sigiriya.jpeg'
    },
    {
      name: 'Hill Country',
      description: 'Experience tea plantations, waterfalls, and cool mountain air',
      highlights: ['Nuwara Eliya', 'Ella', 'Kandy', 'Adam\'s Peak'],
      image: '/ella.jpg'
    },
    {
      name: 'Coastal Paradise',
      description: 'Discover pristine beaches and marine life',
      highlights: ['Mirissa', 'Galle', 'Bentota', 'Trincomalee'],
      image: '/beach.jpeg'
    },
    {
      name: 'Wildlife Safari',
      description: 'Encounter diverse wildlife in national parks',
      highlights: ['Yala', 'Wilpattu', 'Udawalawe', 'Minneriya'],
      image: '/wildlife.jpg'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/map4.jpg"
            alt="Sri Lanka Map"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
  
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            
          </p>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Our Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {region.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{region.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedRegion(region.name)}
                    className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Plan This Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Planning Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Best Time to Visit</h3>
              <p className="text-gray-600">Plan your visit during the dry season (December to April) for the best weather conditions.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Accommodation</h3>
              <p className="text-gray-600">Book accommodations in advance, especially during peak season and in popular tourist areas.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-xl border-2 border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Travel Documents</h3>
              <p className="text-gray-600">Ensure you have all necessary travel documents, including visas and travel insurance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 