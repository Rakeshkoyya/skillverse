import Link from "next/link";

import { Section, Button, Card, CardIcon, CardTitle, CardDescription, SubscribeSection } from "@/components";

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#1e3a5f]/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e3a5f]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 text-[#1e3a5f] rounded-full text-sm font-medium mb-6">
            Transforming Education in India
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building India&apos;s Next Generation of{" "}
            <span className="text-[#1e3a5f]">Critical Thinkers</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From rote memorization to real-world skills. Skillverse transforms how students learn, think, and succeed through the revolutionary 4L Transformation System.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/4l-system" size="lg">
              Explore 4L System
            </Button>
            <Button href="/eduwarrior" variant="outline" size="lg">
              Become an EduWarrior
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>10,000+ Students Transformed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>50+ Partner Schools</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#1e3a5f]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Pan-India Presence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: "📚",
      title: "Rote Learning Epidemic",
      description: "95% of students memorize without understanding, leading to poor retention and zero application skills."
    },
    {
      icon: "😰",
      title: "Exam Anxiety Crisis",
      description: "Rising stress levels and mental health issues due to marks-focused education system."
    },
    {
      icon: "🎯",
      title: "Career Confusion",
      description: "Students graduate without knowing their strengths, passions, or viable career paths."
    },
    {
      icon: "💼",
      title: "Employability Gap",
      description: "80% of graduates lack skills employers actually need - communication, critical thinking, problem-solving."
    }
  ];

  return (
    <Section
      title="The Crisis in Indian Education"
      subtitle="Our children are trained to pass exams, not to think, create, or lead. The system is broken."
      background="light"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <Card key={index}>
            <CardIcon>{problem.icon}</CardIcon>
            <CardTitle>{problem.title}</CardTitle>
            <CardDescription>{problem.description}</CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function SolutionSection() {
  return (
    <Section
      title="The Skillverse Solution"
      subtitle="A paradigm shift from marks to mastery, from memorization to meaningful learning."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Education That Prepares for Life, Not Just Exams
          </h3>
          <p className="text-gray-600 mb-6">
            Skillverse reimagines education through a holistic approach that develops the complete individual. We don&apos;t just teach subjects – we build thinkers, leaders, and innovators ready for the challenges of tomorrow.
          </p>

          <ul className="space-y-4">
            {[
              "Critical thinking and problem-solving frameworks",
              "Real-world project-based learning",
              "Emotional intelligence and leadership development",
              "Career clarity through self-discovery programs",
              "Parent and teacher enablement workshops"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#1e3a5f] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button href="/about">Learn About Our Mission</Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 rounded-2xl flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🎓</div>
              <p className="text-xl font-semibold text-[#1e3a5f]">Transforming 10,000+ Lives</p>
              <p className="text-gray-600">and counting...</p>
            </div>
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
      description: "Develop metacognitive skills and learning strategies that last a lifetime.",
      color: "bg-blue-500"
    },
    {
      letter: "L",
      title: "Liberate",
      subtitle: "Find Your Passion",
      description: "Discover what truly excites you through exploration and self-reflection.",
      color: "bg-red-500"
    },
    {
      letter: "L",
      title: "Lead",
      subtitle: "Build Leadership",
      description: "Cultivate confidence, communication, and the ability to inspire others.",
      color: "bg-green-500"
    },
    {
      letter: "L",
      title: "Live",
      subtitle: "Thrive in Life",
      description: "Apply your skills to create a meaningful, successful, and balanced life.",
      color: "bg-purple-500"
    }
  ];

  return (
    <Section
      title="The 4L Transformation System"
      subtitle="Our proprietary framework that transforms students from passive learners to active achievers."
      background="dark"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
            <div className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold text-white">{pillar.letter}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>
            <p className="text-[#1e3a5f]/70 text-sm mb-3">{pillar.subtitle}</p>
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

          <div className="bg-[#1e3a5f]/5 rounded-xl p-6 mb-6">
            <p className="text-[#1e3a5f] font-semibold mb-2">Limited Territories Available</p>
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
      quote: "My daughter went from hating studies to actually enjoying learning. The transformation has been incredible. She now asks questions, thinks critically, and is so much more confident.",
      author: "Priya Sharma",
      role: "Parent, Mumbai",
      avatar: "PS"
    },
    {
      quote: "Skillverse gave me clarity about my career when I was completely confused. The 4L system helped me discover my passion for design thinking. I&apos;m now pursuing my dream.",
      author: "Rahul Verma",
      role: "Student, Class 12",
      avatar: "RV"
    },
    {
      quote: "As a teacher, I was skeptical at first. But seeing my students transform from passive listeners to active participants has been the most rewarding experience of my career.",
      author: "Anjali Desai",
      role: "Teacher, Delhi",
      avatar: "AD"
    }
  ];

  return (
    <Section
      title="Stories of Transformation"
      subtitle="Real results from real families across India."
      background="light"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white font-semibold">
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
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Transform Education?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you&apos;re a parent seeking better learning for your child, or an entrepreneur ready to make an impact – we&apos;re here for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
          <Button href="/eduwarrior" variant="outline" size="lg">
            Partner With Us
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
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
