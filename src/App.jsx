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
  Send,
  ArrowLeft
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.hash || window.location.pathname);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openEnquiry = (level = 'General Enquiry') => {
    const whatsappNumber = "918744828310";
    const text = encodeURIComponent(`Hi! I'm interested in Learning Panorama's German language course. Please share the course details.`);
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
