import { Metadata } from 'next';
import { Button, Section, Card, CardIcon, CardTitle, CardDescription } from '@/components';

export const metadata: Metadata = {
  title: '4L Transformation System - Skillverse',
  description: 'Discover the 4L Transformation System: Learn, Live, Lead, Liberate. A holistic framework to transform students into confident, capable individuals.',
};

const pillars = [
  {
    title: 'Learn',
    subtitle: 'Cognitive Performance',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'The first pillar focuses on developing cognitive abilities that go beyond rote memorization. We train students to think critically, solve problems creatively, and learn how to learn.',
    details: [
      'Focus and concentration training',
      'Memory enhancement techniques',
      'Critical thinking frameworks',
      'Creative problem-solving methods',
      'Speed reading and comprehension',
    ],
    exercise: {
      title: 'The 5-Why Analysis',
      description: 'Students practice solving real-world problems by asking "why" five times to get to the root cause. This develops analytical thinking and prevents surface-level solutions.',
    },
  },
  {
    title: 'Live',
    subtitle: 'Bio-optimization',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'A sharp mind needs a healthy body. This pillar teaches students to optimize their physical and mental health through daily habits, nutrition awareness, and stress management.',
    details: [
      'Daily energy management',
      'Sleep optimization',
      'Nutrition fundamentals',
      'Physical fitness basics',
      'Stress and anxiety management',
    ],
    exercise: {
      title: 'Morning Power Routine',
      description: 'Students design and practice a 15-minute morning routine combining breathwork, movement, and intention-setting. They track energy levels and iterate weekly.',
    },
  },
  {
    title: 'Lead',
    subtitle: 'Social Intelligence',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Success in the modern world requires the ability to communicate, collaborate, and influence. This pillar builds social intelligence and leadership capabilities.',
    details: [
      'Public speaking mastery',
      'Active listening skills',
      'Negotiation and persuasion',
      'Team collaboration',
      'Conflict resolution',
    ],
    exercise: {
      title: 'Impromptu Speaking Challenge',
      description: 'Students receive a random topic and must speak for 2 minutes without preparation. This builds confidence, thinking-on-feet ability, and communication clarity.',
    },
  },
  {
    title: 'Liberate',
    subtitle: 'Emotional Mastery',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'True freedom comes from mastering your emotions. This pillar helps students develop emotional intelligence, resilience, and the ability to perform under pressure.',
    details: [
      'Emotional awareness training',
      'Resilience building',
      'Fear and failure management',
      'Self-confidence development',
      'Growth mindset cultivation',
    ],
    exercise: {
      title: 'Comfort Zone Challenge',
      description: 'Each week, students complete one task outside their comfort zone and reflect on the experience. This progressively builds courage and adaptability.',
    },
  },
];

export default function FourLSystemPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <text x="10" y="30" fontSize="20" fill="white" fontWeight="bold">4L</text>
            <text x="50" y="60" fontSize="15" fill="white">LEARN</text>
            <text x="20" y="80" fontSize="15" fill="white">LIVE</text>
            <text x="70" y="40" fontSize="15" fill="white">LEAD</text>
            <text x="40" y="90" fontSize="15" fill="white">LIBERATE</text>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Our Core Framework
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The 4L Transformation System
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              A holistic framework designed to transform students into confident, capable individuals who can thrive in any situation life throws at them.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
            Beyond Academics, Beyond Skills
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The 4L System isn&apos;t just another curriculum. It&apos;s a complete transformation framework that addresses the whole person — mind, body, social presence, and emotional core. In just one hour a day, students experience growth that traditional education takes years to deliver.
          </p>
        </div>

        {/* 4L Visual Overview */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                {pillar.title[0]}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">{pillar.title}</h3>
              <p className="text-sm text-gray-500">{pillar.subtitle}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Detailed Pillars */}
      {pillars.map((pillar, index) => (
        <Section key={index} background={index % 2 === 0 ? 'light' : 'white'} id={pillar.title.toLowerCase()}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${pillar.bgColor} ${pillar.borderColor} border`}>
                Pillar {index + 1}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">
                {pillar.title}
              </h2>
              <p className="text-xl text-gray-500 mb-6">{pillar.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8">
                {pillar.description}
              </p>
              
              <div className="space-y-3">
                {pillar.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className={`${pillar.bgColor} rounded-3xl p-8 md:p-10 border ${pillar.borderColor}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.color} flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-[#1e3a5f]">Sample Exercise</h3>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{pillar.exercise.title}</h4>
                <p className="text-gray-600">{pillar.exercise.description}</p>
              </div>

              {/* Stats/Impact box */}
              <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a5f]">15</div>
                    <div className="text-sm text-gray-500">minutes/day</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#1e3a5f]">90</div>
                    <div className="text-sm text-gray-500">days to transform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* The Daily Flow */}
      <Section background="dark">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            One Hour. Complete Transformation.
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Every session at a Skill Lab follows a carefully designed flow that touches all 4L pillars.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            {[
              { time: '0-5 min', title: 'Energy Activation', pillar: 'Live', description: 'Physical warm-up and breathwork' },
              { time: '5-20 min', title: 'Cognitive Training', pillar: 'Learn', description: 'Video-led skill development' },
              { time: '20-40 min', title: 'Practice & Application', pillar: 'Lead', description: 'Group activities and presentations' },
              { time: '40-55 min', title: 'Reflection & Integration', pillar: 'Liberate', description: 'Journaling and emotional processing' },
              { time: '55-60 min', title: 'Commitment & Close', pillar: 'All', description: 'Daily commitment and affirmations' },
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-sm font-medium opacity-70">{item.time}</div>
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-sm opacity-80">{item.description}</div>
                    <div className="mt-2 inline-block px-2 py-1 bg-white/20 rounded text-xs font-medium">
                      {item.pillar}
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#1e3a5f] rounded-full"></div>
                </div>
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            See the 4L System in Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our upcoming webinar to learn how the 4L Transformation System is changing students&apos; lives across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact#webinar" size="lg">
              Join the Webinar
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
