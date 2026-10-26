import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Globe,
  Award,
  BookOpen,
  Send
} from 'lucide-react';


// Removed InstagramIcon component


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Enquiry & Instagram Linktree Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('A1 — Beginner');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Directly redirect to WhatsApp
    const whatsappNumber = "918744828310";
    const text = encodeURIComponent(`Hello Learning Panorama! My name is ${formData.name}. I am enquiring about ${selectedLevel}. Goal: ${formData.goal || 'General learning'}. Message: ${formData.message || 'None'}`);

    window.location.href = `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const openPolicy = (policy) => {
    setActivePolicy(policy);
    setModalOpen(true);
  };

  const openEnquiry = (level = 'General Enquiry') => {
    const whatsappNumber = "918744828310";
    const text = encodeURIComponent(`Hi! - I'm interested in Learning Panorama's German language course. Please share the course details.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const faqs = [
    {
      q: "Do I need prior knowledge of German to begin?",
      a: "Not at all. Our A1 Beginner course is specifically designed for absolute beginners with zero prior exposure to the German language."
    },
    {
      q: "How do I choose the right course level?",
      a: "We offer structured paths starting from A1 for beginners. If you have some prior learning, you can reach out to us for a quick informal assessment to find your ideal starting point."
    },
    {
      q: "Are classes available online or offline?",
      a: "Classes are currently offered through interactive live online sessions, allowing you to learn comfortably from anywhere with dedicated personal guidance."
    },
    {
      q: "What are the class timings?",
      a: "We offer flexible weekday and weekend batches designed to accommodate working professionals and university students."
    },
    {
      q: "What are the course fees?",
      a: "Please contact Learning Panorama directly via WhatsApp or our enquiry form to receive our current transparent fee structure and batch availability."
    },
    {
      q: "Do you offer German exam preparation?",
      a: "Yes, our structured progression equips you with the grammar, vocabulary, and conversational fluency needed for standard Goethe or Telc examinations."
    },
    {
      q: "Will I receive recorded sessions of the classes?",
      a: "Recorded sessions are provided specifically for instances where a student is absent. We do not provide daily recordings for every session to encourage live interaction and consistent attendance."
    },
    {
      q: "How can I enrol?",
      a: "Simply click 'Enquire Now' or 'Enquire via WhatsApp' on any course or page to connect directly with our team via WhatsApp for batch availability and registration details."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1D2022] font-sans selection:bg-[#C4A779]/25 selection:text-[#1D2022]">

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => openEnquiry('WhatsApp Quick Chat')}
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 group"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </button>
      </div>

      {/* SECTION 1 — NAVIGATION */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#E9E5DC]' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group py-1">
            <img src="/logo.png" alt="Learning Panorama Logo" className="h-10 md:h-12 w-auto object-contain bg-[#F7F5F0]/80 px-2 py-1 rounded-xl transition-transform group-hover:scale-105" />
            <span className="font-serif text-2xl font-bold text-[#1D2022] hidden sm:block">Learning Panorama</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#626262]">
            <a href="#about-us" className="hover:text-[#1D2022] transition-colors">About Us</a>
            <a href="#courses" className="hover:text-[#1D2022] transition-colors">Courses</a>
            <a href="#contact" className="hover:text-[#1D2022] transition-colors">Contact</a>
            <a href="#approach" className="hover:text-[#1D2022] transition-colors">Learning Approach</a>
            <a href="#journey" className="hover:text-[#1D2022] transition-colors">Journey</a>
            <a href="#instructor" className="hover:text-[#1D2022] transition-colors">Instructor</a>
            <a href="#resources" className="hover:text-[#1D2022] transition-colors">Resources</a>
            <a href="#faqs" className="hover:text-[#1D2022] transition-colors">FAQs</a>
            <button onClick={() => {
              const footer = document.getElementById('legal-footer');
              if (footer) footer.scrollIntoView({ behavior: 'smooth' });
            }} className="hover:text-[#1D2022] transition-colors text-left bg-transparent cursor-pointer">Legal & Policies</button>
          </nav>

          {/* Primary CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                const whatsappNumber = "918744828310";
                const text = encodeURIComponent(`Hi! I'm interested in Learning Panorama's German language course. Please share the course details.`);
                window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
              }}
              className="bg-[#1D2022] text-[#F7F5F0] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-all duration-300 shadow-sm hover:shadow"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1D2022] hover:text-[#C4A779] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <div className="space-y-1.5 w-6"><div className="h-0.5 bg-current w-full"></div><div className="h-0.5 bg-current w-4"></div><div className="h-0.5 bg-current w-full"></div></div>}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-[#F7F5F0] border-b border-[#E9E5DC] shadow-lg py-6 px-6 flex flex-col gap-4 overflow-hidden"
            >
              <button onClick={() => {
                setMobileMenuOpen(false);
                const about = document.getElementById('about-us');
                if (about) about.scrollIntoView({ behavior: 'smooth' });
              }} className="text-lg font-medium text-[#1D2022] text-left">About Us</button>
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Courses</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Contact</a>
              <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Learning Approach</a>
              <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Journey</a>
              <a href="#instructor" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Instructor</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">Resources</a>
              <a href="#faqs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-[#1D2022]">FAQs</a>
              <button onClick={() => { setMobileMenuOpen(false); openPolicy('terms'); }} className="text-lg font-medium text-[#1D2022] text-left">Terms and Conditions</button>
              <button onClick={() => { setMobileMenuOpen(false); openPolicy('privacy'); }} className="text-lg font-medium text-[#1D2022] text-left">Privacy Policy</button>
              <button onClick={() => { setMobileMenuOpen(false); openPolicy('refund'); }} className="text-lg font-medium text-[#1D2022] text-left">Refund Policy</button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const whatsappNumber = "918744828310";
                  const text = encodeURIComponent(`Hi! I'm interested in Learning Panorama's German language course. Please share the course details.`);
                  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
                }}
                className="mt-2 w-full bg-[#1D2022] text-[#F7F5F0] py-3 rounded-full text-center font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-colors"
              >
                Enquire Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* SECTION 2 — HERO */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E5DC] text-[#1D2022] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles size={14} className="text-[#C4A779]" />
              YOUR GERMAN JOURNEY STARTS HERE
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D2022] leading-[1.1] mb-6">
              A new language. <br />
              <span className="italic font-normal text-[#626262]">A wider world.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#626262] font-normal leading-relaxed max-w-xl mb-10">
              Build your German skills step by step through structured lessons, practical conversation, and guided learning designed for Instagram learners.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#courses"
                className="bg-[#1D2022] text-[#F7F5F0] px-8 py-4 rounded-full font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-all duration-300 text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Explore Courses
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => openEnquiry('General Enquiry')}
                className="border border-[#1D2022]/30 text-[#1D2022] px-8 py-4 rounded-full font-medium hover:border-[#1D2022] hover:bg-[#1D2022]/5 transition-all duration-300 text-center"
              >
                Enquire via WhatsApp
              </button>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#626262] pt-4 border-t border-[#E9E5DC] w-full">
              <div className="w-2 h-2 rounded-full bg-[#C4A779] animate-pulse"></div>
              <span>Start with the basics. Build confidence. Keep progressing.</span>
            </div>
          </motion.div>

          {/* Right Editorial Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#E9E5DC] aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop"
                alt="German Language Study and Books"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2022]/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-[#F7F5F0]/95 backdrop-blur-md p-6 rounded-2xl border border-[#E9E5DC] shadow-lg">
                <p className="font-serif text-lg font-medium text-[#1D2022] mb-1">“Sprich Deutsch mit Zuversicht.”</p>
                <p className="text-xs text-[#626262]">Master grammar, phonetics, and dialogue with expert coaching.</p>
              </div>
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -top-6 -right-6 w-28 h-28 border border-[#C4A779]/50 rounded-full pointer-events-none hidden sm:block animate-spin"></div>
          </motion.div>

        </div>
      </section>

      {/* INSTAGRAM BANNER NOTICE (REMOVED) */}
      <div className="hidden"></div>

      {/* SECTION 3 — COURSE PROGRAMMES */}
      <section id="courses" className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#626262] block mb-3">FIND YOUR STARTING POINT</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-4">German learning, made clearer.</h2>
            <p className="text-[#626262] text-lg">Choose a learning level that matches your experience and build your skills with a structured approach.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* A1 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm hover:shadow-xl group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-serif text-4xl font-bold text-[#1D2022] group-hover:text-[#C4A779] transition-colors">A1</span>
                  <span className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 bg-[#E9E5DC]/70 rounded-full text-[#1D2022]">Beginner</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">German A1</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Designed for absolute beginners. Establish core vocabulary, present-tense grammar, and simple everyday interactions.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#1D2022]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Basic greetings & self-introduction</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Essential sentence structures</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Everyday conversational basics</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openEnquiry('German A1 — Beginner')}
                className="w-full bg-[#1D2022] text-[#F7F5F0] py-3.5 rounded-2xl font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-colors flex items-center justify-center gap-2 group-hover:shadow"
              >
                Enquire About This Level
                <ChevronRight size={16} />
              </button>
            </motion.div>

            {/* A2 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm hover:shadow-xl group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-serif text-4xl font-bold text-[#1D2022] group-hover:text-[#C4A779] transition-colors">A2</span>
                  <span className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 bg-[#E9E5DC]/70 rounded-full text-[#1D2022]">Elementary</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">German A2</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Expand your fluency. Learn past tenses, describe your background, hobbies, and navigate routine social or professional exchanges.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#1D2022]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Past & future tense mastery</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Expanded vocabulary for daily life</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Expressing opinions & preferences</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openEnquiry('German A2 — Elementary')}
                className="w-full bg-[#1D2022] text-[#F7F5F0] py-3.5 rounded-2xl font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-colors flex items-center justify-center gap-2 group-hover:shadow"
              >
                Enquire About This Level
                <ChevronRight size={16} />
              </button>
            </motion.div>

            {/* B1 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm hover:shadow-xl group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-serif text-4xl font-bold text-[#1D2022] group-hover:text-[#C4A779] transition-colors">B1</span>
                  <span className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 bg-[#E9E5DC]/70 rounded-full text-[#1D2022]">Intermediate</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">German B1</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Achieve independent communication. Handle most situations while travelling and discuss familiar topics with greater nuance.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#1D2022]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Complex sentence structures</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Professional & workplace German</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C4A779]" />
                    <span>Advanced listening & discussion</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openEnquiry('German B1 — Intermediate')}
                className="w-full bg-[#1D2022] text-[#F7F5F0] py-3.5 rounded-2xl font-medium hover:bg-[#C4A779] hover:text-[#1D2022] transition-colors flex items-center justify-center gap-2 group-hover:shadow"
              >
                Enquire About This Level
                <ChevronRight size={16} />
              </button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — LEARNING APPROACH */}
      <section id="approach" className="py-24 px-6 bg-[#1D2022] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-20"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C4A779] block mb-3">OUR APPROACH</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-4">Learn with clarity. Progress with confidence.</h2>
            <div className="w-16 h-[1px] bg-[#C4A779] mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t border-[#C4A779]/40 pt-6"
            >
              <span className="font-serif text-3xl font-bold text-[#C4A779] block mb-4">01</span>
              <h3 className="font-serif text-xl font-semibold mb-3">Structured Lessons</h3>
              <p className="text-[#E9E5DC]/80 text-sm leading-relaxed">
                Build your understanding through a clear progression of topics designed for logical retention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t border-[#C4A779]/40 pt-6"
            >
              <span className="font-serif text-3xl font-bold text-[#C4A779] block mb-4">02</span>
              <h3 className="font-serif text-xl font-semibold mb-3">Grammar Made Clear</h3>
              <p className="text-[#E9E5DC]/80 text-sm leading-relaxed">
                Develop a stronger foundation in German grammar and sentence structure without unnecessary confusion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t border-[#C4A779]/40 pt-6"
            >
              <span className="font-serif text-3xl font-bold text-[#C4A779] block mb-4">03</span>
              <h3 className="font-serif text-xl font-semibold mb-3">Speaking & Pronunciation</h3>
              <p className="text-[#E9E5DC]/80 text-sm leading-relaxed">
                Work towards more confident communication through guided practice and active dialogue.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-[#C4A779]/40 pt-6"
            >
              <span className="font-serif text-3xl font-bold text-[#C4A779] block mb-4">04</span>
              <h3 className="font-serif text-xl font-semibold mb-3">Revision & Practice</h3>
              <p className="text-[#E9E5DC]/80 text-sm leading-relaxed">
                Revisit concepts regularly and strengthen your long-term understanding through targeted exercises.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — THE LEARNING JOURNEY */}
      <section id="journey" className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#626262] block mb-3">YOUR NEXT CHAPTER</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-4">Every new skill begins with a first step.</h2>
            <p className="text-[#626262] text-lg">A simple, transparent pathway from absolute beginner to confident speaker.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-[#E9E5DC] shadow-sm hover:border-[#C4A779] transition-all"
            >
              <span className="text-xs font-bold text-[#C4A779] tracking-widest uppercase block mb-4">STAGE 01</span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">Begin</h3>
              <p className="text-[#626262] text-sm leading-relaxed">
                Understand the foundations of the German language, alphabet, phonetics, and introductory greetings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-[#E9E5DC] shadow-sm hover:border-[#C4A779] transition-all"
            >
              <span className="text-xs font-bold text-[#C4A779] tracking-widest uppercase block mb-4">STAGE 02</span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">Build</h3>
              <p className="text-[#626262] text-sm leading-relaxed">
                Develop vocabulary, core grammar rules, and reading comprehension for structured sentences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-[#E9E5DC] shadow-sm hover:border-[#C4A779] transition-all"
            >
              <span className="text-xs font-bold text-[#C4A779] tracking-widest uppercase block mb-4">STAGE 03</span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">Practise</h3>
              <p className="text-[#626262] text-sm leading-relaxed">
                Work on active speaking, listening exercises, reading dialogues, and written expression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-[#E9E5DC] shadow-sm hover:border-[#C4A779] transition-all"
            >
              <span className="text-xs font-bold text-[#C4A779] tracking-widest uppercase block mb-4">STAGE 04</span>
              <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-3">Progress</h3>
              <p className="text-[#626262] text-sm leading-relaxed">
                Continue towards the proficiency level that matches your personal, academic, or professional goals.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* SECTION 5.5 — ABOUT US */}
      <section id="about-us" className="py-24 px-6 bg-white border-t border-[#E9E5DC]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C4A779] block mb-3">WHO WE ARE</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-8">About Us</h2>

            <div className="space-y-12 text-[#626262] text-lg leading-relaxed">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022]">Welcome to Learning Panorama</h3>
                <p className="italic text-xl text-[#1D2022]">Learn Today. Grow Tomorrow.</p>
                <p>At Learning Panorama, we believe that learning opens doors to new opportunities, personal growth, and a brighter future.</p>
                <p>Our mission is to make learning accessible, practical, and engaging through structured online education that helps learners build knowledge, develop useful skills, and move closer to their goals.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022]">Our Approach</h3>
                <p>We aim to create a supportive learning environment where students can learn step by step, ask questions freely, and develop confidence through consistent practice. We believe that effective learning goes beyond theory — it involves understanding concepts, applying knowledge, and building skills that can be used in real-life situations.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022]">Our German Language Learning Program</h3>
                <p>As we begin our journey, we are focusing on online German language education for beginners. Our planned program aims to help learners build a strong foundation in German through grammar, vocabulary, pronunciation, reading, listening, and speaking practice.</p>
                <p>Whether you are exploring German for career opportunities, higher education, future plans in Germany, or personal interest, we aim to make your learning journey structured, approachable, and rewarding.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022]">Our Vision</h3>
                <p>Our vision is to grow into a trusted learning platform that connects students with quality education, knowledgeable instructors, and opportunities for continuous development.</p>
                <p>As Learning Panorama grows, we aim to expand our educational offerings while maintaining our commitment to practical learning, learner support, and quality education.</p>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022]">Our Commitment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#E9E5DC]">
                    <span className="font-bold text-[#1D2022] block mb-1">Accessible Learning</span>
                    <span className="text-sm">Making learning approachable for beginners.</span>
                  </div>
                  <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#E9E5DC]">
                    <span className="font-bold text-[#1D2022] block mb-1">Structured Education</span>
                    <span className="text-sm">Following a clear, step-by-step learning approach.</span>
                  </div>
                  <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#E9E5DC]">
                    <span className="font-bold text-[#1D2022] block mb-1">Practical Skills</span>
                    <span className="text-sm">Encouraging practice, participation, and real-world application.</span>
                  </div>
                  <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#E9E5DC]">
                    <span className="font-bold text-[#1D2022] block mb-1">Continuous Growth</span>
                    <span className="text-sm">Supporting learners as they develop their knowledge and confidence.</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#E9E5DC] text-center">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-4">Begin Your Learning Journey</h3>
                <p className="mb-6">Every new skill begins with a first step. At Learning Panorama, we want to help you take that step with confidence.</p>
                <p className="font-serif text-xl font-bold text-[#1D2022]">Learning starts today. Opportunities grow tomorrow.</p>
                <p className="text-[#C4A779] font-medium mt-2">Learning Panorama — Learn Today. Grow Tomorrow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CONTACT US */}
      <section id="contact" className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C4A779] block mb-3">GET IN TOUCH</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-8">Contact Us</h2>

            <div className="space-y-12 text-[#626262] text-lg leading-relaxed">
              <p className="font-serif text-2xl font-medium text-[#1D2022]">We'd Love to Hear From You!</p>
              <p>At Learning Panorama, we're happy to help you take the next step in your learning journey. Whether you're interested in learning German, want to know more about our upcoming courses, or have questions about our learning programs, feel free to get in touch with us.</p>

              <div className="bg-[#E9E5DC]/50 p-8 rounded-3xl border border-[#E9E5DC]">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-6">Get in Touch</h3>
                <ul className="space-y-4">
                  <li><span className="font-semibold text-[#1D2022]">Business Name:</span> Learning Panorama</li>
                  <li><span className="font-semibold text-[#1D2022]">Email:</span> learningpanorama1@gmail.com</li>
                  <li><span className="font-semibold text-[#1D2022]">WhatsApp:</span> +91 8744828310</li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-4">Course Enquiries</h3>
                <p className="mb-4">Interested in our planned online German language program for beginners? Contact us to learn more about:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Course structure and topics</li>
                  <li>Upcoming batches and class schedules</li>
                  <li>Course fees and payment details</li>
                  <li>Demo sessions and enrolment</li>
                  <li>General questions about learning German</li>
                </ul>
              </div>

              <div className="pt-8 border-t border-[#E9E5DC] text-center">
                <h3 className="font-serif text-2xl font-bold text-[#1D2022] mb-4">Send Us a Message</h3>
                <p className="mb-8">Have a question? You can contact us through email or WhatsApp, and we'll get back to you as soon as possible.</p>
                <button
                  onClick={() => openEnquiry('General Enquiry')}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20ba5a] transition-all shadow-lg"
                >
                  Send a Message on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — MEET THE INSTRUCTOR */}
      <section id="instructor" className="py-24 px-6 bg-[#E9E5DC]/50 border-t border-[#E9E5DC]">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#E9E5DC] p-8 md:p-16 shadow-sm"
        >

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

            <div className="md:col-span-5">
              <div className="aspect-[4/5] rounded-2xl bg-[#E9E5DC] overflow-hidden relative shadow">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Instructor Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#626262] block mb-3">PERSONAL MENTORSHIP</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1D2022] mb-6">Learn with a personal approach.</h2>
              <p className="text-[#626262] leading-relaxed mb-6">
                Learning Panorama is built around a thoughtful, structured approach to learning German, with an emphasis on truly understanding the language and using it with natural confidence.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E9E5DC] text-sm">
                <div>
                  <span className="font-semibold text-[#1D2022] block">Dedicated Guidance</span>
                  <span className="text-[#626262]">Small cohort sizes ensuring individualized attention and feedback.</span>
                </div>
                <div>
                  <span className="font-semibold text-[#1D2022] block">Pedagogical Focus</span>
                  <span className="text-[#626262]">Clear explanations of complex grammatical concepts tailored for English speakers.</span>
                </div>
              </div>
            </div>

          </div>

        </motion.div>
      </section>

      {/* SECTION 7 — LEARNING RESOURCES */}
      <section id="resources" className="py-24 px-6 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#626262] block mb-3">EDUCATIONAL INSIGHTS</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022]">Learning Resources</h2>
            </div>
            <p className="text-[#626262] max-w-md mt-4 md:mt-0 text-sm">
              Articles and guides to help you understand German grammar rules, pronunciation nuances, and study habits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm"
            >
              <div>
                <span className="text-xs text-[#626262] uppercase tracking-wider block mb-2 font-semibold">Guide</span>
                <h3 className="font-serif text-xl font-bold text-[#1D2022] mb-3">Getting Started with German A1</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Essential first steps for absolute beginners embarking on their German language journey.
                </p>
              </div>
              <button onClick={() => openEnquiry('Resources Enquiry')} className="text-sm font-semibold text-[#1D2022] flex items-center gap-2 hover:text-[#C4A779] transition-colors">
                Read Overview <ArrowRight size={14} />
              </button>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm"
            >
              <div>
                <span className="text-xs text-[#626262] uppercase tracking-wider block mb-2 font-semibold">Pronunciation</span>
                <h3 className="font-serif text-xl font-bold text-[#1D2022] mb-3">German Pronunciation: A Beginner's Guide</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Mastering umlauts, consonant clusters, and natural intonation in spoken German.
                </p>
              </div>
              <button onClick={() => openEnquiry('Resources Enquiry')} className="text-sm font-semibold text-[#1D2022] flex items-center gap-2 hover:text-[#C4A779] transition-colors">
                Read Overview <ArrowRight size={14} />
              </button>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-[#E9E5DC] flex flex-col justify-between hover:border-[#C4A779] transition-all shadow-sm"
            >
              <div>
                <span className="text-xs text-[#626262] uppercase tracking-wider block mb-2 font-semibold">Vocabulary</span>
                <h3 className="font-serif text-xl font-bold text-[#1D2022] mb-3">Everyday German Phrases to Practise</h3>
                <p className="text-[#626262] text-sm mb-6 leading-relaxed">
                  Practical everyday expressions to build confidence in conversation from day one.
                </p>
              </div>
              <button onClick={() => openEnquiry('Resources Enquiry')} className="text-sm font-semibold text-[#1D2022] flex items-center gap-2 hover:text-[#C4A779] transition-colors">
                Read Overview <ArrowRight size={14} />
              </button>
            </motion.article>

          </div>

        </div>
      </section>

      {/* SECTION 8 — FREQUENTLY ASKED QUESTIONS */}
      <section id="faqs" className="py-24 px-6 bg-[#E9E5DC]/50 border-t border-[#E9E5DC]">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#626262] block mb-3">QUESTIONS & ANSWERS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#626262]">Everything you need to know about our courses and learning approach.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#F7F5F0] rounded-2xl border border-[#E9E5DC] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between font-serif text-xl font-semibold text-[#1D2022] hover:text-[#C4A779] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                {activeFaq === idx && (
                  <div className="px-8 pb-6 text-[#626262] text-sm leading-relaxed border-t border-[#E9E5DC]/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — FINAL CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="py-24 px-6 bg-[#1D2022] text-[#F7F5F0] text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C4A779] block mb-4">START YOUR JOURNEY</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Your German journey starts here.</h2>
          <p className="text-[#E9E5DC]/80 text-lg mb-10 max-w-xl mx-auto">
            Tell us what you want to learn, and let's explore the next step together via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openEnquiry('General Enquiry')}
              className="w-full sm:w-auto bg-[#C4A779] text-[#1D2022] px-8 py-4 rounded-full font-semibold hover:bg-[#F7F5F0] transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Enquire via WhatsApp
            </button>
            <a
              href="#courses"
              className="w-full sm:w-auto border border-[#E9E5DC]/30 text-[#F7F5F0] px-8 py-4 rounded-full font-medium hover:border-[#F7F5F0] transition-colors"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </motion.section>

      {/* SECTION 10 — FOOTER */}
      <footer id="legal-footer" className="bg-[#1D2022] text-[#E9E5DC] border-t border-[#C4A779]/20 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Learning Panorama Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-[#E9E5DC]/70 max-w-sm leading-relaxed mb-6">
              A refined German-language coaching academy dedicated to structured learning, clarity, and genuine conversational confidence.
            </p>
            <div className="flex gap-4">
              <button onClick={() => openEnquiry('WhatsApp Footer')} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-[#F7F5F0] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-[#E9E5DC]/70">
              <li><a href="#courses" className="hover:text-[#C4A779] transition-colors">Courses</a></li>
              <li><a href="#approach" className="hover:text-[#C4A779] transition-colors">Learning Approach</a></li>
              <li><a href="#journey" className="hover:text-[#C4A779] transition-colors">Journey</a></li>
              <li><a href="#instructor" className="hover:text-[#C4A779] transition-colors">Instructor</a></li>
              <li><a href="#faqs" className="hover:text-[#C4A779] transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-[#F7F5F0] mb-4">Contact Us</h4>
            <p className="text-sm text-[#E9E5DC]/70 mb-4 leading-relaxed">
              Ready to begin your German language journey? Send us a quick message.
            </p>
            <button
              onClick={() => openEnquiry('General Enquiry')}
              className="text-xs font-semibold uppercase tracking-wider text-[#C4A779] hover:underline"
            >
              Open WhatsApp Chat →
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#E9E5DC]/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#E9E5DC]/50">
          <p>© {new Date().getFullYear()} Learning Panorama. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => openPolicy('terms')} className="hover:text-[#C4A779] transition-colors">Terms and Conditions</button>
              <button onClick={() => openPolicy('privacy')} className="hover:text-[#C4A779] transition-colors">Privacy Policy</button>
              <button onClick={() => openPolicy('refund')} className="hover:text-[#C4A779] transition-colors">Refund Policy</button>
            </div>
        </div>
      </footer>

      {/* ENQUIRY & POLICIES MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1D2022]/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-[#F7F5F0] rounded-3xl max-w-2xl w-full p-8 border border-[#E9E5DC] shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#1D2022] hover:text-[#C4A779] transition-colors z-10 bg-white/80 rounded-full"
            >
              <X size={20} />
            </button>

            {activePolicy ? (
              <div className="space-y-6 text-left pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#C4A779]">LEGAL INFORMATION</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1D2022] mb-4">
                  {activePolicy === 'terms' && 'Terms and Conditions'}
                  {activePolicy === 'privacy' && 'Privacy Policy'}
                  {activePolicy === 'refund' && 'Refund Policy'}
                </h3>

                {activePolicy === 'terms' && (
                  <div className="text-sm text-[#626262] space-y-4 leading-relaxed">
                    <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>
                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">1. Introduction</h4>
                    <p>Welcome to Learning Panorama. These Terms and Conditions govern your access to and use of our website, online learning services, courses, educational materials, and related services.</p>
                    <p>By accessing our website, registering for a course, or using our services, you agree to these Terms and Conditions. If you do not agree, please discontinue using our services.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">2. About Our Services</h4>
                    <p>Learning Panorama provides online educational and training services. Our initial offering focuses on beginner-level German language learning through online classes, learning materials, exercises, assignments, and other educational resources as applicable to the enrolled course.</p>
                    <p>Course details, including the curriculum, duration, schedule, fees, instructor information, and included services, will be communicated before enrolment.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">3. Registration and Student Accounts</h4>
                    <p>Students may be required to provide accurate information when registering for a demo session, enrolling in a course, or creating an account. You are responsible for providing accurate information, maintaining login credentials, and using your account only for authorised educational purposes.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">4. Course Enrolment and Fees</h4>
                    <p>Course enrolment is confirmed only after applicable registration requirements and payment have been received or confirmed by Learning Panorama. Fees and deadlines will be communicated prior to payment.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">5. Student Conduct & Intellectual Property</h4>
                    <p>Students are expected to behave respectfully. Harassment, disruptive behaviour, or unauthorized sharing of course materials, notes, and recordings is strictly prohibited. All intellectual property on this website belongs to Learning Panorama.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">6. Governing Law</h4>
                    <p>These Terms and Conditions are governed by the laws of India. For any questions, contact us at learningpanorama1@gmail.com.</p>
                  </div>
                )}

                {activePolicy === 'privacy' && (
                  <div className="text-sm text-[#626262] space-y-4 leading-relaxed">
                    <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>
                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">1. Introduction</h4>
                    <p>Learning Panorama ("we", "our", or "us") respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">2. Information We Collect</h4>
                    <p>We may collect personal and contact info (full name, email address, mobile/WhatsApp number), educational preferences, account details, and communications when you interact with us or register for our courses.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">3. How We Use Your Information</h4>
                    <p>We use your information to respond to enquiries, deliver live classes and learning materials, process enrolments, send schedules and reminders, and meet legal obligations. We do not sell your personal information to third parties.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">4. Data Security & Retention</h4>
                    <p>We take reasonable technical measures to secure your personal data. Information is retained only as long as necessary for educational services and legal compliance.</p>
                  </div>
                )}

                {activePolicy === 'refund' && (
                  <div className="text-sm text-[#626262] space-y-4 leading-relaxed">
                    <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>
                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">Refund Policy</h4>
                    <p>We want you to be satisfied, so all eligible courses purchased on Learning Panorama can be refunded within <strong>2 days</strong>, provided the request meets our refund policy guidelines.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">How to submit a refund request:</h4>
                    <p>Email our team at learningpanorama1@gmail.com with your purchase details (date, payment method) and reason for refund. Refunds are issued via the original payment method within 24-48 hours.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">Our 2-Day Policy:</h4>
                    <p>Payments are disbursed to instructors after 2 days, so we cannot process refund requests received after this 2-day window.</p>

                    <h4 className="font-serif text-lg font-bold text-[#1D2022] pt-2">Denied Refunds:</h4>
                    <p>Refunds may be denied in cases of abuse, such as downloading/consuming a significant portion of the course before requesting a refund or violating our Terms and Conditions.</p>
                  </div>
                )}

                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full bg-[#1D2022] text-[#F7F5F0] py-3.5 rounded-2xl font-semibold hover:bg-[#C4A779] hover:text-[#1D2022] transition-all mt-6"
                >
                  Close Policy
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#626262]">INSTAGRAM & WHATSAPP ENQUIRY</span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1D2022] mb-2">Let's Connect on WhatsApp</h3>
                <p className="text-sm text-[#626262] mb-6">Enter your details below. Clicking submit will automatically open WhatsApp with your pre-filled enquiry for <span className="font-semibold text-[#1D2022]">{selectedLevel}</span>.</p>

                {formSubmitted ? (
                  <div className="bg-[#E9E5DC] p-8 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto text-xl">✓</div>
                    <h4 className="font-serif text-xl font-bold text-[#1D2022]">Redirecting to WhatsApp...</h4>
                    <p className="text-sm text-[#626262]">If WhatsApp didn't open automatically, please check your popup blocker.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#626262] mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Anna Schmidt"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E5DC] text-[#1D2022] focus:outline-none focus:border-[#C4A779]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-[#626262] mb-1">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+49 ..."
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E5DC] text-[#1D2022] focus:outline-none focus:border-[#C4A779]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-[#626262] mb-1">Email (Optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="anna@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E5DC] text-[#1D2022] focus:outline-none focus:border-[#C4A779]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#626262] mb-1">Selected Course / Program</label>
                      <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E5DC] text-[#1D2022] focus:outline-none focus:border-[#C4A779]"
                      >
                        <option value="German A1 — Beginner">German A1 — Beginner</option>
                        <option value="German A2 — Elementary">German A2 — Elementary</option>
                        <option value="German B1 — Intermediate">German B1 — Intermediate</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#626262] mb-1">Learning Goal (Optional)</label>
                      <input
                        type="text"
                        value={formData.goal}
                        onChange={(e) => setFormData({...formData, goal: e.target.value})}
                        placeholder="e.g. Moving to Germany / Goethe exam"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E5DC] text-[#1D2022] focus:outline-none focus:border-[#C4A779]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-semibold hover:bg-[#20ba5a] transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Continue to WhatsApp Chat
                    </button>
                  </form>
                )}
              </div>
            )}

          </motion.div>
        </div>
      )}

    </div>
  );
}
