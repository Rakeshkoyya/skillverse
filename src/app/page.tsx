import Link from "next/link";

import { Section, Button, Card, CardIcon, CardTitle, CardDescription, SubscribeSection } from "@/components";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#0B7272] to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0B7272]/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Years of Studying.<br />
            <span className="text-red-400">Nothing Stays.</span><br />
            <span className="text-gray-400 text-3xl md:text-4xl lg:text-5xl">Is This Really Education?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Students forget most of what they learn, walk into exams with fear and pressure, and graduate without knowing how to handle life. Because schools teach <span className="text-white font-semibold">syllabus</span> — not <span className="text-white font-semibold">how to think</span>, <span className="text-white font-semibold">how to remember</span>, or <span className="text-white font-semibold">how to live</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#reality-check" size="lg" variant="secondary">
              See the Reality
            </Button>
            <Button href="/4l-system" size="lg">
              Discover the Solution
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - hidden on small screens */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function RealityCheckSection() {
  const questions = [
    {
      icon: "📱",
      question: "Does your child get distracted by phone or gadgets while studying?",
      subtext: "Checks notifications, watches reels, or needs the phone nearby even during study time"
    },
    {
      icon: "📖",
      question: "Does your child study the same topic multiple times but still forgets it?",
      subtext: "Reads the chapter, feels confident, but goes blank when asked about it later"
    },
    {
      icon: "🌙",
      question: "Does your child study only when exams are near?",
      subtext: "Last-minute cramming, late nights before tests, no consistent study routine"
    },
    {
      icon: "🤷",
      question: "Does your child say 'I don't know what I want to become'?",
      subtext: "No clarity about interests, passion, or future direction despite years of schooling"
    },
    {
      icon: "😞",
      question: "Does your child get upset or demotivated after bad results?",
      subtext: "Takes failure personally, loses confidence, or compares with others constantly"
    }
  ];

  return (
    <Section
      id="reality-check"
      title="A Reality Check for Parents"
      subtitle="Answer honestly. If even one applies to your child, keep reading."
      background="light"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.question}</h3>
                  <p className="text-gray-500 text-sm">{item.subtext}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-xl text-gray-700 font-medium">
            If you said <span className="text-red-500 font-bold">&quot;Yes&quot;</span> to any of these, it&apos;s not your child&apos;s fault.
          </p>
          <p className="text-gray-500 mt-2">It&apos;s what the education system never taught them.</p>
        </div>
      </div>
    </Section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: "�",
      title: "Syllabus Over Mindset",
      description: "The entire focus is on completing chapters and scoring marks. No one teaches HOW to think, learn, or remember."
    },
    {
      icon: "❌",
      title: "Only Mistakes, Never Strengths",
      description: "When a student writes an essay, teachers mark every error in red. But never say, 'You're strong in creativity' or 'Your ideas are unique.'"
    },
    {
      icon: "🎭",
      title: "Zero Emotional Education",
      description: "Students are never taught how to handle failure, rejection, heartbreak, peer pressure, or depression. They're left to figure it out alone."
    },
    {
      icon: "🧭",
      title: "No Life Direction",
      description: "After 15+ years of education, students still don't know their purpose, passion, or path. They're qualified on paper, lost in life."
    }
  ];

  return (
    <Section
      title="What's Broken in Our Education System?"
      subtitle="The truth that schools won't tell you, but every parent needs to hear."
      background="white"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {problems.map((problem, index) => (
          <Card key={index} className="border-l-4 border-[#0B7272]">
            <CardIcon>{problem.icon}</CardIcon>
            <CardTitle>{problem.title}</CardTitle>
            <CardDescription>{problem.description}</CardDescription>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Result?</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Students who are <span className="font-semibold text-red-600">academically qualified</span> but struggle with <span className="font-semibold">character, confidence, and purpose</span>. 
            Many lose focus, make poor life choices, fall into wrong company, or battle anxiety and depression — 
            despite having degrees and certificates.
          </p>
        </div>
      </div>
    </Section>
  );
}

function SolutionSection() {
  const whatWeTeach = [
    { icon: "🧠", title: "How to Learn & Remember", desc: "Techniques that make knowledge stick, not vanish after exams" },
    { icon: "💪", title: "Emotional Resilience", desc: "Handling failure, rejection, stress, and pressure with strength" },
    { icon: "🎯", title: "Focus & Discipline", desc: "Building concentration and eliminating distractions" },
    { icon: "🧭", title: "Life Direction", desc: "Discovering purpose, passion, and the right path forward" },
    { icon: "🤝", title: "Relationships & Decisions", desc: "Making wise choices in friendships, social media, and life" },
    { icon: "⭐", title: "Character & Values", desc: "Building integrity, responsibility, and inner confidence" },
  ];

  return (
    <Section
      title="What If Education Was Different?"
      subtitle="What if someone finally taught your child what actually matters?"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            ✨ The Skillverse Approach
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            We Don&apos;t Just Teach Subjects.<br />
            <span className="text-[#0B7272]">We Build Complete Human Beings.</span>
          </h3>
          
          <p className="text-gray-600 mb-6 text-lg">
            Skillverse has designed a comprehensive curriculum that addresses everything the traditional system ignores. 
            We focus on the <span className="font-semibold">mind, emotions, character, and life skills</span> — 
            not just marks and memorization.
          </p>

          <div className="bg-[#0B7272]/5 rounded-xl p-6 mb-6">
            <p className="text-[#0B7272] font-semibold mb-2">💡 Our Philosophy</p>
            <p className="text-gray-700 italic">
              &quot;A student who knows how to handle failure will never truly fail. 
              A student who knows their purpose will never lose direction.&quot;
            </p>
          </div>

          <Button href="/4l-system">Explore Our 4L System</Button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {whatWeTeach.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0B7272]/20 transition-all">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FourLSection() {
  const pillars = [
    {
      letter: "L",
      title: "Learn",
      subtitle: "Master How to Learn",
      description: "Techniques for memory, focus, and understanding that make knowledge permanent — not just exam-ready.",
      color: "bg-blue-500"
    },
    {
      letter: "L",
      title: "Liberate",
      subtitle: "Free Your Mind",
      description: "Break free from fear, self-doubt, and limiting beliefs. Build emotional strength and mental clarity.",
      color: "bg-red-500"
    },
    {
      letter: "L",
      title: "Lead",
      subtitle: "Lead Yourself First",
      description: "Develop discipline, decision-making, and the confidence to take charge of your own life.",
      color: "bg-green-500"
    },
    {
      letter: "L",
      title: "Live",
      subtitle: "Live With Purpose",
      description: "Discover your direction, build character, and create a meaningful life — not just a career.",
      color: "bg-purple-500"
    }
  ];

  return (
    <Section
      title="The 4L Transformation System"
      subtitle="Our proven curriculum that builds what schools never taught."
      background="dark"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold text-white">{pillar.letter}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>
            <p className="text-[#0B7272]/70 text-sm mb-3">{pillar.subtitle}</p>
            <p className="text-white/80 text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button href="/4l-system" variant="secondary">
          Explore the 4L System
        </Button>
      </div>
    </Section>
  );
}

function EduWarriorSection() {
  const benefits = [
    { icon: "🚀", title: "Proven Model", description: "Battle-tested curriculum and operational framework" },
    { icon: "📈", title: "High Growth", description: "Tap into the booming education market" },
    { icon: "🤝", title: "Full Support", description: "Training, marketing, and ongoing mentorship" },
    { icon: "💰", title: "Low Investment", description: "Start with minimal capital, scale fast" }
  ];

  return (
    <Section
      title="Become an EduWarrior"
      subtitle="Join our mission and build a profitable business transforming young lives in your community."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transform Lives. Build Wealth. Create Impact.
          </h3>
          <p className="text-gray-600 mb-6">
            The EduWarrior franchise model empowers passionate educators and entrepreneurs to bring world-class skill development to their communities. With comprehensive training, proven systems, and continuous support, you can build a thriving education business.
          </p>

          <div className="bg-[#0B7272]/5 rounded-xl p-6 mb-6">
            <p className="text-[#0B7272] font-semibold mb-2">Limited Territories Available</p>
            <p className="text-gray-600 text-sm">
              We&apos;re selectively partnering with committed individuals who share our vision. Early partners get exclusive territorial rights.
            </p>
          </div>

          <Button href="/eduwarrior">Learn About EduWarrior Program</Button>
        </div>
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "My son used to forget everything he studied. Now he remembers concepts for months. The difference isn't tutoring — it's HOW he learned to learn. I wish I had this when I was young.",
      author: "Priya Sharma",
      role: "Parent, Mumbai",
      avatar: "PS"
    },
    {
      quote: "I was always anxious about exams and felt lost about my future. Skillverse taught me to handle pressure and find my direction. For the first time, I feel confident about who I am.",
      author: "Rahul Verma",
      role: "Student, Class 12",
      avatar: "RV"
    },
    {
      quote: "As a teacher for 15 years, I always focused on marks. Skillverse showed me what students truly need — emotional strength and life skills. My students are transformed, and so am I.",
      author: "Anjali Desai",
      role: "Teacher, Delhi",
      avatar: "AD"
    }
  ];

  return (
    <Section
      title="Real Transformations, Real Families"
      subtitle="When students learn what actually matters, everything changes."
      background="light"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0B7272] rounded-full flex items-center justify-center text-white font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// SubscribeSection is now imported from components

function CTASection() {
  return (
    <Section>
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Don&apos;t Let the System Fail Your Child
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          The education system won&apos;t change overnight. But your child&apos;s future can&apos;t wait.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Give them the skills, mindset, and emotional strength that schools never taught.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Talk to Us Today
          </Button>
          <Button href="/4l-system" variant="outline" size="lg">
            Learn About Our Program
          </Button>
        </div>
        
        <p className="text-sm text-gray-400 mt-6">
          Join thousands of parents who chose to prepare their children for life, not just exams.
        </p>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <RealityCheckSection />
      <ProblemSection />
      <SolutionSection />
      <FourLSection />
      <EduWarriorSection />
      <TestimonialsSection />
      <SubscribeSection />
      <CTASection />
    </>
  );
}
