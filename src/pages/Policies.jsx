import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';

const PolicyLayout = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1D2022] font-sans selection:bg-[#C4A779]/25">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group py-1">
            <img src="/logo.png" alt="Learning Panorama Logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="font-serif text-2xl font-bold text-[#1D2022] hidden sm:block">Learning Panorama</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-[#626262] hover:text-[#1D2022] transition-colors">
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1D2022] mb-8">{title}</h1>
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E9E5DC] shadow-sm">
            {children}
          </div>
        </motion.div>
      </main>

      <footer className="bg-[#1D2022] text-[#E9E5DC] py-12 px-6 border-t border-[#C4A779]/20">
        <div className="max-w-7xl mx-auto text-center text-xs text-[#E9E5DC]/50">
          <p>© {new Date().getFullYear()} Learning Panorama. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export const About = () => (
  <PolicyLayout title="About Us">
    <div className="text-[#626262] space-y-6 leading-relaxed">
      <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Who We Are</h2>
        <p className="italic text-xl text-[#1D2022]">Learn Today. Grow Tomorrow.</p>
        <p>At Learning Panorama, we believe that learning opens doors to new opportunities, personal growth, and a brighter future.</p>
        <p>Our mission is to make learning accessible, practical, and engaging through structured online education that helps learners build knowledge, develop useful skills, and move closer to their goals.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Our Approach</h2>
        <p>We aim to create a supportive learning environment where students can learn step by step, ask questions freely, and develop confidence through consistent practice. We believe that effective learning goes beyond theory — it involves understanding concepts, applying knowledge, and building skills that can be used in real-life situations.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Our German Language Learning Program</h2>
        <p>As we begin our journey, we are focusing on online German language education for beginners. Our planned program aims to help learners build a strong foundation in German through grammar, vocabulary, pronunciation, reading, listening, and speaking practice.</p>
        <p>Whether you are exploring German for career opportunities, higher education, future plans in Germany, or personal interest, we aim to make your learning journey structured, approachable, and rewarding.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Our Vision</h2>
        <p>Our vision is to grow into a trusted learning platform that connects students with quality education, knowledgeable instructors, and opportunities for continuous development.</p>
        <p>As Learning Panorama grows, we aim to expand our educational offerings while maintaining our commitment to practical learning, learner support, and quality education.</p>
      </section>
    </div>
  </PolicyLayout>
);

export const Contact = () => {
  const openWhatsApp = () => {
    const whatsappNumber = "918744828310";
    const text = encodeURIComponent(`Hi! I'm interested in Learning Panorama's German language course. Please share the course details.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <PolicyLayout title="Contact Us">
      <div className="text-[#626262] space-y-6 leading-relaxed">
        <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1D2022]">We'd Love to Hear From You!</h2>
          <p>At Learning Panorama, we're happy to help you take the next step in your learning journey. Whether you're interested in learning German, want to know more about our upcoming courses, or have questions about our learning programs, feel free to get in touch with us.</p>
        </section>

        <div className="bg-[#E9E5DC]/50 p-8 rounded-3xl border border-[#E9E5DC]">
          <h3 className="font-serif text-xl font-bold text-[#1D2022] mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-base">
            <li><span className="font-semibold text-[#1D2022]">Business Name:</span> Learning Panorama</li>
            <li><span className="font-semibold text-[#1D2022]">Email:</span> learningpanorama1@gmail.com</li>
            <li><span className="font-semibold text-[#1D2022]">WhatsApp:</span> +91 8744828310</li>
          </ul>
        </div>

        <section className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Course Enquiries</h2>
          <p>Interested in our planned online German language program for beginners? Contact us to learn more about:</p>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Course structure and topics</li>
            <li>Upcoming batches and class schedules</li>
            <li>Course fees and payment details</li>
            <li>Demo sessions and enrolment</li>
            <li>General questions about learning German</li>
          </ul>
        </section>

        <div className="pt-8 border-t border-[#E9E5DC] text-center">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20ba5a] transition-all shadow-lg"
          >
            <MessageCircle size={20} />
            Send a Message on WhatsApp
          </button>
        </div>
      </div>
    </PolicyLayout>
  );
};

export const Terms = () => (
  <PolicyLayout title="Terms and Conditions">
    <div className="text-[#626262] space-y-6 leading-relaxed">
      <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">1. Introduction</h2>
        <p>Welcome to Learning Panorama. These Terms and Conditions govern your access to and use of our website, online learning services, courses, educational materials, and related services.</p>
        <p>By accessing our website, registering for a course, or using our services, you agree to these Terms and Conditions. If you do not agree, please discontinue using our services.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">2. About Our Services</h2>
        <p>Learning Panorama provides online educational and training services. Our initial offering focuses on beginner-level German language learning through online classes, learning materials, exercises, assignments, and other educational resources as applicable to the enrolled course.</p>
        <p>Course details, including the curriculum, duration, schedule, fees, instructor information, and included services, will be communicated before enrolment.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">3. Registration and Student Accounts</h2>
        <p>Students may be required to provide accurate information when registering for a demo session, enrolling in a course, or creating an account. You are responsible for providing accurate information, maintaining login credentials, and using your account only for authorised educational purposes.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">4. Course Enrolment and Fees</h2>
        <p>Course enrolment is confirmed only after applicable registration requirements and payment have been received or confirmed by Learning Panorama. Fees and deadlines will be communicated prior to payment.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">5. Student Conduct & Intellectual Property</h2>
        <p>Students are expected to behave respectfully. Harassment, disruptive behaviour, or unauthorized sharing of course materials, notes, and recordings is strictly prohibited. All intellectual property on this website belongs to Learning Panorama.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">6. Governing Law</h2>
        <p>These Terms and Conditions are governed by the laws of India. For any questions, contact us at learningpanorama1@gmail.com.</p>
      </section>
    </div>
  </PolicyLayout>
);

export const Privacy = () => (
  <PolicyLayout title="Privacy Policy">
    <div className="text-[#626262] space-y-6 leading-relaxed">
      <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">1. Introduction</h2>
        <p>Learning Panorama ("we", "our", or "us") respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">2. Information We Collect</h2>
        <p>We may collect personal and contact info (full name, email address, mobile/WhatsApp number), educational preferences, account details, and communications when you interact with us or register for our courses.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">3. How We Use Your Information</h2>
        <p>We use your information to respond to enquiries, deliver live classes and learning materials, process enrolments, send schedules and reminders, and meet legal obligations. We do not sell your personal information to third parties.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">4. Data Security & Retention</h2>
        <p>We take reasonable technical measures to secure your personal data. Information is retained only as long as necessary for educational services and legal compliance.</p>
      </section>
    </div>
  </PolicyLayout>
);

export const Refund = () => (
  <PolicyLayout title="Refund Policy">
    <div className="text-[#626262] space-y-6 leading-relaxed">
      <p className="font-medium text-[#1D2022]">Business Name: Learning Panorama | Contact Email: learningpanorama1@gmail.com</p>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Refund Policy</h2>
        <p>We want you to be satisfied, so all eligible courses purchased on Learning Panorama can be refunded within <strong>2 days</strong>, provided the request meets our refund policy guidelines.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">How to submit a refund request:</h2>
        <p>Email our team at learningpanorama1@gmail.com with your purchase details (date, payment method) and reason for refund. Refunds are issued via the original payment method within 24-48 hours.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Our 2-Day Policy:</h2>
        <p>Payments are disbursed to instructors after 2 days, so we cannot process refund requests received after this 2-day window.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#1D2022]">Denied Refunds:</h2>
        <p>Refunds may be denied in cases of abuse, such as downloading/consuming a significant portion of the course before requesting a refund or violating our Terms and Conditions.</p>
      </section>
    </div>
  </PolicyLayout>
);
