import { Metadata } from 'next';
import WebinarRegistrationForm from '@/components/WebinarRegistrationForm';

export const metadata: Metadata = {
  title: 'SKILLVERSE Webinar Registration | India\'s First Skill-Focused Awareness Webinar for Parents',
  description: 'Register for India\'s first skill-focused awareness webinar for parents. Discover why marks are no longer enough and how the right skills shape your child\'s future. Date: 28 December 2025.',
  keywords: ['webinar', 'parenting', 'education', 'skills', 'life skills', 'child development', 'India'],
  openGraph: {
    title: 'SKILLVERSE Webinar - India\'s First Skill-Focused Awareness Webinar for Parents',
    description: 'Register now for the FREE webinar on 29th December 2025. Learn why marks are no longer enough for your child\'s success.',
    type: 'website',
  },
};

export default function WebinarRegistrationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a73] to-[#1e3a5f] text-white py-16 md:py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Registration Open</span>
            </div>

            {/* Logo/Brand */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SKILLVERSE
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              India's First Skill-Focused Awareness Webinar for Parents
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl">📅</span>
                <div className="text-left">
                  <p className="text-xs text-white/70">Date</p>
                  <p className="font-semibold">28 December 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <div className="text-left">
                  <p className="text-xs text-white/70">For</p>
                  <p className="font-semibold">Parents of Students</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl">🎥</span>
                <div className="text-left">
                  <p className="text-xs text-white/70">Mode</p>
                  <p className="font-semibold">Live Online Webinar</p>
                </div>
              </div>
            </div>

            {/* Key Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl">
                Discover why <span className="font-bold text-yellow-300">marks are no longer enough</span> and 
                how the right skills, mindset, and habits shape your child's confidence, clarity, and future direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              What You'll Discover in This Webinar
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: '🎯', text: 'Why academic marks alone don\'t guarantee success in life' },
                { icon: '🧠', text: 'The essential life skills every child needs but schools don\'t teach' },
                { icon: '💡', text: 'How to build confidence, focus, and emotional strength in your child' },
                { icon: '🚀', text: 'Practical strategies to prepare your child for the real world' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Register Now – It's FREE!
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Complete the form below to secure your spot. Limited seats available.
            </p>
          </div>
          
          <WebinarRegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-bold mb-2">SKILLVERSE</p>
          <p className="text-gray-400 text-sm">
            Transforming education through life skills
          </p>
          <p className="text-gray-500 text-xs mt-4">
            © {new Date().getFullYear()} Skillverse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
