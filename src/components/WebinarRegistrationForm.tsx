'use client';

import { useState, FormEvent } from 'react';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const PARENT_CONCERNS = [
  'Lack of confidence',
  'Poor communication skills',
  'Low focus / distraction due to mobile',
  'Exam stress or anxiety',
  'Poor discipline / routine',
  'No clarity about future or career',
  'Good marks but no real-life skills',
  'Social fear / stage fear',
  'Anger, emotional issues, or low motivation'
];

const SKILLS_NEEDED = [
  'Confidence & public speaking',
  'Memory & learning techniques',
  'Focus & productivity',
  'Emotional control & calmness',
  'Leadership & communication',
  'Discipline & daily habits'
];

interface FormData {
  // Section 1: Basic Registration
  parentName: string;
  mobile: string;
  email: string;
  city: string;
  state: string;
  // Section 2: Child Profile
  numberOfChildren: string;
  childAgeGroup: string;
  educationStage: string;
  // Section 3: Pain & Awareness
  parentConcerns: string[];
  schoolSystemOpinion: string;
  // Section 4: Skill Awareness
  lifeSkillsAwareness: string;
  skillsNeeded: string[];
  // Section 5: Decision & Commitment
  isDecisionMaker: string;
  enrollmentReadiness: string;
  // Consent
  consent: boolean;
}

export default function WebinarRegistrationForm() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    mobile: '',
    email: '',
    city: '',
    state: '',
    numberOfChildren: '',
    childAgeGroup: '',
    educationStage: '',
    parentConcerns: [],
    schoolSystemOpinion: '',
    lifeSkillsAwareness: '',
    skillsNeeded: [],
    isDecisionMaker: '',
    enrollmentReadiness: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'consent') {
        setFormData({ ...formData, consent: checked });
      }
    } else if (name === 'mobile') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numbersOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxArrayChange = (name: 'parentConcerns' | 'skillsNeeded', value: string) => {
    const currentArray = formData[name];
    if (currentArray.includes(value)) {
      setFormData({ ...formData, [name]: currentArray.filter(item => item !== value) });
    } else {
      setFormData({ ...formData, [name]: [...currentArray, value] });
    }
  };

  const validateSection = (section: number): boolean => {
    switch (section) {
      case 1:
        return !!(formData.parentName && formData.mobile && formData.email && formData.city && formData.state);
      case 2:
        return !!(formData.numberOfChildren && formData.childAgeGroup && formData.educationStage);
      case 3:
        return !!(formData.parentConcerns.length > 0 && formData.schoolSystemOpinion);
      case 4:
        return !!(formData.lifeSkillsAwareness && formData.skillsNeeded.length > 0);
      case 5:
        return !!(formData.isDecisionMaker && formData.enrollmentReadiness && formData.consent);
      default:
        return false;
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, 5));
      setMessage('');
    } else {
      setMessage('Please fill all required fields before proceeding.');
    }
  };

  const prevSection = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
    setMessage('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateSection(5)) {
      setMessage('Please fill all required fields and accept the consent.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/webinar/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  // Success/Thank You Screen
  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200 shadow-lg">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You for Registering! 🎉
          </h2>
          
          <p className="text-lg text-gray-700 mb-6">
            You are now registered for <strong>India's 1st Skill-Focused Webinar for Parents</strong>.
          </p>
          
          <div className="bg-white rounded-xl p-6 mb-6 text-left">
            <p className="text-gray-700 mb-4">
              On <strong>28th December 2025</strong>, you will discover why marks are no longer enough, 
              and how the right <span className="text-[#0B7272] font-semibold">skills</span>, 
              <span className="text-[#0B7272] font-semibold"> mindset</span>, and 
              <span className="text-[#0B7272] font-semibold"> habits</span> shape your child's 
              confidence, clarity, and future direction.
            </p>
            
            <div className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-lg">
              <span className="text-2xl">📲</span>
              <p className="font-medium">
                Webinar link and reminders will be shared on WhatsApp.
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Make sure to save the date: <strong>28th December 2025</strong>
          </p>
        </div>
      </div>
    );
  }

  const sectionTitles = [
    'Basic Details',
    'Child Profile',
    'Challenges & Awareness',
    'Skill Awareness',
    'Final Step'
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {sectionTitles.map((title, index) => (
            <div 
              key={index}
              className={`text-xs md:text-sm font-medium ${
                currentSection > index + 1 ? 'text-green-600' : 
                currentSection === index + 1 ? 'text-[#0B7272]' : 'text-gray-400'
              }`}
            >
              <span className="hidden md:inline">{title}</span>
              <span className="md:hidden">{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#0B7272] to-[#0E8A8A] transition-all duration-500"
            style={{ width: `${(currentSection / 5) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        {/* Section 1: Basic Registration Details */}
        {currentSection === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Basic Registration Details</h2>
              <p className="text-gray-600 mt-2">Tell us about yourself</p>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-2">
                Parent's Full Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7272] focus:border-transparent outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-2">
                Mobile Number (WhatsApp preferred) *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength={10}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7272] focus:border-transparent outline-none transition"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-2">
                Email ID *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7272] focus:border-transparent outline-none transition"
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-bold text-gray-800 mb-2">
                  City / Town *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7272] focus:border-transparent outline-none transition"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label className="block text-base font-bold text-gray-800 mb-2">
                  State *
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B7272] focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Child Profile */}
        {currentSection === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Child Profile</h2>
              <p className="text-gray-600 mt-2">Help us understand your child better</p>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                How many children do you have? *
              </label>
              <div className="space-y-2">
                {['1', '2', '3 or more'].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="numberOfChildren"
                      value={option}
                      checked={formData.numberOfChildren === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Child's Age Group (Select the most relevant) *
              </label>
              <div className="space-y-2">
                {['8–10 years', '11–13 years', '14–16 years', '17–19 years', '20–22 years'].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="childAgeGroup"
                      value={option}
                      checked={formData.childAgeGroup === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Current Education Stage of Your Child *
              </label>
              <div className="space-y-2">
                {[
                  'School (Class 3–6)',
                  'School (Class 7–10)',
                  'School (Class 11–12)',
                  'College / University',
                  'Drop year / Not studying currently'
                ].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="educationStage"
                      value={option}
                      checked={formData.educationStage === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Pain & Awareness */}
        {currentSection === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Challenges & Awareness</h2>
              <p className="text-gray-600 mt-2">
                Help us understand the real challenges children face beyond marks and exams
              </p>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Which of these concerns worry you MOST about your child? *
                <span className="text-gray-500 font-normal text-sm"> (Select all that apply)</span>
              </label>
              <div className="space-y-2">
                {PARENT_CONCERNS.map(concern => (
                  <label key={concern} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={formData.parentConcerns.includes(concern)}
                      onChange={() => handleCheckboxArrayChange('parentConcerns', concern)}
                      className="w-4 h-4 text-[#0B7272] rounded"
                    />
                    <span className="ml-3">{concern}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Do you feel today's school/college system is preparing children for real life? *
              </label>
              <div className="space-y-2">
                {['Yes, completely', 'Partially', 'No, not at all', 'I am confused'].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="schoolSystemOpinion"
                      value={option}
                      checked={formData.schoolSystemOpinion === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Skill Awareness & Readiness */}
        {currentSection === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Skill Awareness & Readiness</h2>
              <p className="text-gray-600 mt-2">Understanding your awareness about life skills education</p>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Before today, were you aware of "Life Skills / Human Skills" education that focuses on mindset, emotions, and real-life readiness? *
              </label>
              <div className="space-y-2">
                {[
                  'Yes, I know about it',
                  'I have heard but don\'t understand clearly',
                  'No, this is new to me'
                ].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="lifeSkillsAwareness"
                      value={option}
                      checked={formData.lifeSkillsAwareness === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Which skills do you feel your child urgently needs? *
                <span className="text-gray-500 font-normal text-sm"> (Select all that apply)</span>
              </label>
              <div className="space-y-2">
                {SKILLS_NEEDED.map(skill => (
                  <label key={skill} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="checkbox"
                      checked={formData.skillsNeeded.includes(skill)}
                      onChange={() => handleCheckboxArrayChange('skillsNeeded', skill)}
                      className="w-4 h-4 text-[#0B7272] rounded"
                    />
                    <span className="ml-3">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section 5: Decision Authority & Commitment */}
        {currentSection === 5 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Final Step</h2>
              <p className="text-gray-600 mt-2">Almost there! Just a few more questions</p>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                Are you the decision-maker for your child's education and development? *
              </label>
              <div className="space-y-2">
                {['Yes', 'I consult my spouse / family', 'No'].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="isDecisionMaker"
                      value={option}
                      checked={formData.isDecisionMaker === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-base font-bold text-gray-800 mb-3">
                If you find real value, are you open to enrolling your child in a structured skill program? *
              </label>
              <div className="space-y-2">
                {['Yes, immediately', 'Yes, after discussion', 'Maybe', 'No'].map(option => (
                  <label key={option} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                    <input
                      type="radio"
                      name="enrollmentReadiness"
                      value={option}
                      checked={formData.enrollmentReadiness === option}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0B7272]"
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mt-6">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#0B7272] rounded mt-0.5"
                />
                <span className="ml-3 text-sm text-gray-700">
                  I agree to receive webinar updates and learning-related communication from SKILLVERSE via WhatsApp/Email.
                  <span className="text-gray-500 block mt-1">(No spam. Education-only.)</span>
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Error Message */}
        {message && (
          <div className={`mt-6 p-4 rounded-lg ${status === 'error' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'}`}>
            {message}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          {currentSection > 1 ? (
            <button
              type="button"
              onClick={prevSection}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition"
            >
              ← Previous
            </button>
          ) : (
            <div></div>
          )}

          {currentSection < 5 ? (
            <button
              type="button"
              onClick={nextSection}
              className="px-8 py-3 bg-[#0B7272] text-white rounded-lg hover:bg-[#182423] font-medium transition"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Registering...
                </>
              ) : (
                "I'm Ready to Attend 🚀"
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
