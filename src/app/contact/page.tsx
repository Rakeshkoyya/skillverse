import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Section } from '@/components';
// Commented out for webinar - uncomment after webinar ends
// import { ContactFormTabs } from '@/components';

export const metadata: Metadata = {
  title: 'Contact Us - Skillverse',
  description: 'Get in touch with Skillverse. Subscribe for updates, join upcoming webinars, or send us a message.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="40" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Join the movement. Subscribe for updates, attend our webinars, or reach out with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <Section id="webinar">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Upcoming Event
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Join Our Next Webinar
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Learn about the Skillverse movement, the 4L Transformation System, and how you can be part of India&apos;s largest education revolution.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#1e3a5f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 font-semibold">29 December 2025</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#1e3a5f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Duration: 60 minutes</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#1e3a5f] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">Live Online Webinar</span>
              </div>
            </div>
            
            {/* Register Button - redirects to webinar page */}
            <Link 
              href="/webinar"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl"
            >
              Register for FREE Webinar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">What You&apos;ll Learn</h3>
            <div className="space-y-4">
              {[
                'The education crisis and why Skillverse matters',
                'How the 4L Transformation System works',
                'The EduWarrior micro-franchise opportunity',
                'How to get involved as a parent, student, or entrepreneur',
                'Live Q&A with the Skillverse team',
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form - COMMENTED OUT DURING WEBINAR PERIOD */}
      {/* Uncomment the section below after webinar ends on 29 December 2025 */}
      {/*
      <Section background="light" id="form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-4">
              Subscribe & Connect
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to subscribe for updates or register for our webinar.
            </p>
          </div>

          <ContactFormTabs />
        </div>
      </Section>
      */}

      {/* Webinar Registration CTA - Remove after webinar */}
      <Section background="light" id="form">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Don't Miss This Webinar!
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              India's First Skill-Focused Awareness Webinar for Parents. Discover why marks are no longer enough for your child's success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl mr-2">📅</span>
                <span className="font-semibold">29 December 2025</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl mr-2">🎥</span>
                <span className="font-semibold">Live Online</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-2xl mr-2">🆓</span>
                <span className="font-semibold">FREE Entry</span>
              </div>
            </div>
            <Link 
              href="/webinar"
              className="inline-flex items-center px-10 py-4 bg-white text-[#1e3a5f] font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Register Now - It's FREE!
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Email Us</h3>
            <a href="mailto:hello@skillverse.co.in" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
              hello@skillverse.co.in
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">Instagram</a>
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Response Time</h3>
            <p className="text-gray-600">
              We respond within 24-48 hours
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
