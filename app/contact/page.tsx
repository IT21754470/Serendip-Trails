'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Let s Plan Your Perfect Sri Lankan Adventure
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="tour-inquiry">Tour Inquiry</option>
                    <option value="booking">Booking</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                      <p className="text-gray-600">123 Travel Street</p>
                      <p className="text-gray-600">Colombo, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                      <p className="text-gray-600">+94 11 234 5678</p>
                      <p className="text-gray-600">+94 77 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">info@serendiptrails.com</p>
                      <p className="text-gray-600">support@serendiptrails.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-semibold text-gray-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-semibold text-gray-800">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 