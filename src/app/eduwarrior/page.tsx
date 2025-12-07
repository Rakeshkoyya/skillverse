import { Metadata } from 'next';
import { Button, Section, Card, EduWarriorApplicationForm } from '@/components';

export const metadata: Metadata = {
  title: 'EduWarrior Franchise Model - Skillverse',
  description: 'Learn about the EduWarrior micro-franchise model. Empower unemployed graduates to become education entrepreneurs in their communities.',
};

export default function EduWarriorPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="80" cy="20" r="25" fill="white" />
            <circle cx="20" cy="70" r="35" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Micro-Franchise Opportunity
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The EduWarrior Model
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Transforming unemployed graduates into education entrepreneurs who change their communities forever.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-amber-800">Important Notice</h3>
                <p className="text-amber-700 mt-1">
                  We are not currently recruiting EduWarriors. This page explains our long-term vision for a decentralized education network. Subscribe to be notified when we begin accepting applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who is an EduWarrior */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Who is an EduWarrior?
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              An EduWarrior is more than a franchise owner. They are community changemakers, education revolutionaries, and the backbone of the Skillverse movement.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                EduWarriors are typically <strong>unemployed or underemployed graduates</strong> who are looking for more than just a job. They want purpose. They want to make a difference. They want to build something meaningful in their own community.
              </p>
              <p>
                No prior teaching experience is required. Our video-led model handles the curriculum delivery. What we need are passionate individuals who can inspire, motivate, and create a welcoming learning environment.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">The Ideal EduWarrior</h3>
            <div className="space-y-4">
              {[
                { trait: 'Graduate from any discipline', icon: '🎓' },
                { trait: 'Passionate about education', icon: '❤️' },
                { trait: 'Strong community connections', icon: '🤝' },
                { trait: 'Entrepreneurial mindset', icon: '💡' },
                { trait: 'Good communication skills', icon: '🗣️' },
                { trait: 'Committed to impact', icon: '🎯' },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <span className="text-gray-700">{item.trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* The Skill Lab */}
      <Section>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            The Skill Lab: Your 600 sq ft Impact Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Skill Lab isn&apos;t just a classroom. It&apos;s a transformation hub designed for maximum impact in minimal space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Compact Design',
              description: 'Just 600 sq ft — fits in residential areas, commercial spaces, or even converted shops.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
            },
            {
              title: 'Tech-Enabled',
              description: 'Smart TV for video delivery, basic furniture, and a conducive learning environment.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: 'Activity Space',
              description: 'Open area for group activities, presentations, and movement-based learning.',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center text-[#1e3a5f]">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Sample Daily Schedule</h3>
              <div className="space-y-3">
                {[
                  { time: '7:00 - 8:00 AM', batch: 'Morning Batch 1' },
                  { time: '8:00 - 9:00 AM', batch: 'Morning Batch 2' },
                  { time: '4:00 - 5:00 PM', batch: 'Evening Batch 1' },
                  { time: '5:00 - 6:00 PM', batch: 'Evening Batch 2' },
                  { time: '6:00 - 7:00 PM', batch: 'Evening Batch 3' },
                ].map((slot, index) => (
                  <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-500 text-sm">{slot.time}</span>
                    <span className="text-gray-700 font-medium">{slot.batch}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1e3a5f]">100+</div>
              <div className="text-gray-600 mt-2">Students per month capacity</div>
              <div className="mt-6 text-5xl font-bold text-[#1e3a5f]">5</div>
              <div className="text-gray-600 mt-2">Batches per day</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Video-Led Model */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="aspect-video bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#1e3a5f] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[#1e3a5f] font-medium mt-2">4L System Videos</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Pre-recorded by education experts
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Consistent quality across all labs
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Updated curriculum automatically
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Video-Led, Zero Teaching Required
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Our breakthrough model eliminates the biggest bottleneck in education: finding quality teachers.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                All 4L System content is delivered through professionally produced videos. The EduWarrior&apos;s role is to <strong>facilitate, motivate, and manage</strong> — not to teach.
              </p>
              <p>
                This means anyone can run a Skill Lab successfully, regardless of their academic background. It also ensures that every student across India receives the same high-quality education experience.
              </p>
              <p>
                The EduWarrior handles student management, parent communication, and creating a positive learning environment. The video content handles the rest.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Financial Outline */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              A Sustainable Business Model
            </h2>
            <p className="text-xl text-gray-600">
              Designed for accessibility and profitability in Tier 2-4 markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Investment Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="opacity-80">Setup Cost</span>
                  <span className="font-bold">Low</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="opacity-80">Monthly Running Cost</span>
                  <span className="font-bold">Minimal</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-3">
                  <span className="opacity-80">Break-even Time</span>
                  <span className="font-bold">3-6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-80">Royalty Model</span>
                  <span className="font-bold">Revenue Share</span>
                </div>
              </div>
              <p className="mt-6 text-sm opacity-70">
                * Detailed financial projections will be shared during the onboarding process when recruitment opens.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">What Skillverse Provides</h3>
              <div className="space-y-3">
                {[
                  'Complete curriculum & video content',
                  'Brand & marketing support',
                  'Technology platform access',
                  'Training & certification',
                  'Ongoing operational support',
                  'Community of EduWarriors',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Storytelling */}
      <Section background="dark">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            More Than Income. It&apos;s Impact.
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Every EduWarrior becomes a pillar of change in their community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stat: '100+',
              label: 'Students Transformed',
              description: 'Per month, building confidence and skills in young minds',
            },
            {
              stat: '₹X Lakh',
              label: 'Annual Income Potential',
              description: 'Sustainable livelihood while making a difference',
            },
            {
              stat: '1',
              label: 'Community Changed',
              description: 'Your neighborhood, your impact, your legacy',
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{item.stat}</div>
              <div className="text-xl font-medium mb-2">{item.label}</div>
              <p className="opacity-70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl italic text-center opacity-90">
            &ldquo;Being an EduWarrior isn&apos;t just a job — it&apos;s a calling. Every day, I see the spark in a child&apos;s eyes when they discover they&apos;re capable of more than they ever imagined. That&apos;s worth more than any salary.&rdquo;
          </blockquote>
          <p className="text-center mt-6 opacity-70">— Future EduWarrior Vision</p>
        </div>
      </Section>

      {/* Application Form Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              Express Your Interest
            </h2>
            <p className="text-xl text-gray-600">
              Fill out this form to be notified when EduWarrior recruitment opens in your area. We&apos;ll keep you updated on the launch timeline and next steps.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <EduWarriorApplicationForm />
          </div>
        </div>
      </Section>

      {/* Alternative CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            Want to Learn More First?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our upcoming webinar to learn more about the EduWarrior model and ask questions directly to the Skillverse team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact#webinar" size="lg">
              Join Upcoming Webinar
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
