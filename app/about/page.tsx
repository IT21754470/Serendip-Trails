import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="About TRP"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Serendip Trails
          </h1>
          <p className="text-xl">
            Your trusted partner in Sri Lankan travel and recreation
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, TRP Organization has been at the forefront of providing
                exceptional travel and recreation services in Sri Lanka. What started as a
                small team of passionate travel enthusiasts has grown into a comprehensive
                travel service provider trusted by thousands of visitors.
              </p>
              <p className="text-gray-600">
                Our journey has been marked by a commitment to excellence, sustainable
                tourism practices, and a deep understanding of Sri Lanka s rich cultural
                heritage and natural beauty.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/trp-logo.png"
                alt="Our Story"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every aspect of our services, ensuring the highest quality experiences for our clients.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Sustainability",
    description: "We are committed to sustainable tourism practices that preserve Sri Lanka's natural and cultural heritage.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We continuously innovate our services to provide unique and memorable experiences for our clients.",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
]

const team = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    description: "With over 20 years of experience in the travel industry, John leads our organization with passion and vision.",
    image: "/profile.jpg"
  },
  {
    name: "Sarah Johnson",
    position: "Operations Director",
    description: "Sarah ensures smooth operations and maintains the highest standards of service delivery.",
    image: "/profile2.jpg"
  },
  {
    name: "Michael Chen",
    position: "Customer Experience Manager",
    description: "Michael is dedicated to creating exceptional experiences for our valued clients.",
    image: "/profile3.jpg"
  }
] 