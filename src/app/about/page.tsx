import { Metadata } from 'next';
import { Button, Section } from '@/components';

export const metadata: Metadata = {
  title: 'About the Movement - Skillverse',
  description: 'Discover how Skillverse is transforming India\'s education landscape through a nationwide movement of Skill Labs.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a73] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="20" r="40" fill="white" />
            <circle cx="80" cy="80" r="30" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Movement
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We&apos;re not just building a company. We&apos;re igniting a revolution in how India educates its youth — one Skill Lab, one student, one community at a time.
            </p>
          </div>
        </div>
      </section>

      {/* The Broken System */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              The Broken System
            </h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                For decades, India&apos;s education system has operated on a simple promise: study hard, get a degree, secure your future. But somewhere along the way, this promise broke.
              </p>
              <p>
                Today, millions of graduates walk out of universities with degrees that don&apos;t translate into employability. They can solve equations but can&apos;t solve real problems. They can memorize facts but can&apos;t think critically. They can pass exams but can&apos;t navigate life.
              </p>
              <p>
                The system wasn&apos;t designed to fail. It was designed for a different era — one where following instructions was enough, where conformity was valued over creativity, where the goal was employment, not empowerment.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <div className="text-4xl font-bold text-[#1e3a5f]">67%</div>
                <div className="text-gray-600">of graduates are unemployable</div>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <div className="text-4xl font-bold text-[#1e3a5f]">85%</div>
                <div className="text-gray-600">lack basic soft skills</div>
              </div>
              <div className="border-l-4 border-red-500 pl-6">
                <div className="text-4xl font-bold text-[#1e3a5f]">90%</div>
                <div className="text-gray-600">feel unprepared for real world</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Dual-Sided Market Gap */}
      <Section background="light">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
            The Dual-Sided Market Gap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India faces a unique challenge — a perfect storm of two crises colliding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">The Supply Side Crisis</h3>
            <p className="text-gray-600 mb-4">
              <strong>2 crore+ unemployed graduates</strong> with degrees but no direction. They invested years in education that didn&apos;t prepare them for the workforce. They need income, purpose, and a path forward.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Skilled on paper, unemployable in practice
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Seeking meaningful work, finding dead ends
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                Willing to work, lacking opportunities
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">The Demand Side Crisis</h3>
            <p className="text-gray-600 mb-4">
              <strong>29 crore+ students</strong> trapped in the same broken system. They&apos;re learning what to think, not how to think. Their potential is being capped by outdated methods.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Memorizing facts, not building skills
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Preparing for exams, not for life
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Lacking confidence, communication, and critical thinking
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why Skillverse Must Exist Now */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-8">
            Why Skillverse Must Exist Now
          </h2>
          <div className="space-y-6 text-lg text-gray-600 text-left">
            <p>
              The convergence of these two crises isn&apos;t a problem — it&apos;s an opportunity. An opportunity to build something that has never existed before: a decentralized education infrastructure that solves both sides of the market simultaneously.
            </p>
            <p>
              <strong className="text-[#1e3a5f]">Technology has made this possible.</strong> Video-led learning means we don&apos;t need to find or train millions of teachers. We can deliver consistent, high-quality education at scale.
            </p>
            <p>
              <strong className="text-[#1e3a5f]">Economics have aligned.</strong> The micro-franchise model means we can expand rapidly without massive capital investment. Every EduWarrior becomes an entrepreneur, not an employee.
            </p>
            <p>
              <strong className="text-[#1e3a5f]">The need is urgent.</strong> Every year we wait, another generation of students misses out on transformation. Every day we delay, more graduates lose hope.
            </p>
          </div>
        </div>
      </Section>

      {/* The Vision: 10,000 Skill Labs */}
      <Section background="dark">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The Vision: 10,000 Skill Labs
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Imagine a Skill Lab in every neighborhood, every town, every corner of India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">10,000</div>
            <div className="text-xl opacity-80">Skill Labs</div>
            <p className="mt-4 opacity-70">Across Tier 2, 3, and 4 India</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">1 Crore+</div>
            <div className="text-xl opacity-80">Students Transformed</div>
            <p className="mt-4 opacity-70">Every year, building confidence and skills</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">10,000+</div>
            <div className="text-xl opacity-80">EduWarriors Empowered</div>
            <p className="mt-4 opacity-70">Graduates becoming entrepreneurs</p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Tier 2-4 India?</h3>
              <p className="opacity-80 mb-4">
                Because that&apos;s where the need is greatest and the solutions are scarcest. Premium education has always concentrated in metros, leaving smaller cities and towns behind.
              </p>
              <p className="opacity-80">
                We&apos;re inverting that model. We&apos;re bringing world-class skill development to every doorstep, making transformation accessible regardless of geography or background.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">600</div>
                <div className="text-sm opacity-80">sq ft per lab</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">1 Hour</div>
                <div className="text-sm opacity-80">daily sessions</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">Video</div>
                <div className="text-sm opacity-80">led learning</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">4L</div>
                <div className="text-sm opacity-80">system</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Mission */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-6">
              The Mission: Transform Every Student in India
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 italic">
                &ldquo;We exist to ensure that no student in India is held back by a system that was designed for a different era. Every child deserves access to the skills, confidence, and mindset needed to thrive in the modern world.&rdquo;
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-600">Build confidence before competence</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-600">Develop character alongside knowledge</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-600">Create leaders, not followers</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-600">Prepare for life, not just exams</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/contact#webinar" size="lg">
              Join the Movement
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
