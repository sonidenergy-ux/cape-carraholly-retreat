"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Footprints,
  Kayak,
  Scissors,
  Ship,
  Tent,
  ThermometerSun,
  Users,
  Waves,
} from "lucide-react";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Home() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, -120]); // subtle boat arrival parallax
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const accommodations = [
    {
      title: "Oceanfront Lodges",
      description:
        "Three-bedroom coastal retreats with private hot tubs, crackling fireplaces, and twilight firepit evenings by the water.",
      Icon: Waves,
    },
    {
      title: "Waterfront Dome",
      description:
        "Panoramic ocean views, a king bed, and luxury linens create a serene hideaway designed for effortless reconnection.",
      Icon: Tent,
    },
    {
      title: "Secluded Yurts",
      description:
        "Elevated forest platforms with immersive wilderness stillness and thoughtfully curated shared amenities steps away.",
      Icon: Tent,
    },
  ];

  const experiences = [
    {
      title: "Ocean Kayaking",
      description: "Glide through sheltered coves and discover shoreline wildlife at your own unhurried pace.",
      Icon: Kayak,
    },
    {
      title: "Forest Trails",
      description: "Wander old-growth pathways where every step brings deeper calm and panoramic viewpoints.",
      Icon: Footprints,
    },
    {
      title: "Nordic Sauna",
      description: "Restore body and mind with heat rituals inspired by the wild Pacific coast.",
      Icon: ThermometerSun,
    },
    {
      title: "Fresh Crabbing",
      description: "Experience coastal tradition with hands-on crabbing and unforgettable dockside moments.",
      Icon: Scissors,
    },
    {
      title: "Gazebo Gatherings",
      description: "Host intimate celebrations and sunset socials in a private waterfront gazebo setting.",
      Icon: Users,
    },
  ];

  return (
    <>
      {/* 2026 Urgency Banner – fixed top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ocean)] text-white text-center py-3 text-sm md:text-base font-medium tracking-wide shadow-md">
        2026 Under New Management — Upgraded Sanctuaries • Select Dates Filling Fast
      </div>

      {/* Sticky Booking Bar – fixed bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-[var(--color-forest)]/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[var(--color-forest)]">
            <Ship className="w-6 h-6" />
            <span className="font-medium text-lg">Your Journey Begins with the Boat</span>
          </div>
          <button
            onClick={() => alert("Cloudbeds Immersive Experience 2.0 modal opens here – property code 6a6jNf")}
            className="bg-[var(--color-forest)] hover:bg-[var(--color-ocean)] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 text-lg"
          >
            Book Your Escape
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop')] scale-110"
          style={{ y: parallaxY }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-8"
          >
            Boat In.<br className="sm:hidden" /> Unplug.<br className="sm:hidden" /> Reconnect.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/90 font-light"
          >
            Minutes from Vancouver, worlds away in serenity. Boat-access-only oceanside sanctuary on 75 acres of unspoiled wilderness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button
              onClick={() => alert("Cloudbeds Immersive modal – 6a6jNf")}
              className="bg-white text-[var(--color-forest)] px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Reserve Your Sanctuary
            </button>
            <a
              href="#newsletter"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-white hover:text-[var(--color-forest)] transition-all duration-300"
            >
              Stay Informed
            </a>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Teaser */}
      <section id="newsletter" className="py-24 bg-[var(--color-forest)] text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Current</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Receive early access to 2026 upgrades, seasonal packages, and exclusive availability alerts.
          </p>

          <NewsletterSignup />

          <p className="text-sm mt-6 opacity-70">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Accommodations */}
      <section id="accommodations" className="py-24 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif mb-16 text-center text-[var(--color-forest)]">
            Your Private Sanctuary Awaits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
            {accommodations.map((item, index) => (
              <motion.article
                key={item.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden p-8 flex flex-col"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <item.Icon className="w-10 h-10 text-[var(--color-forest)] mb-6" />
                <h3 className="text-3xl font-serif text-[var(--color-forest)] mb-4">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-8 flex-1">{item.description}</p>
                <button
                  onClick={() => alert("Cloudbeds Immersive modal – 6a6jNf")}
                  className="bg-white text-[var(--color-forest)] border border-[var(--color-forest)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-300 shadow-lg"
                >
                  Reserve This Escape
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="bg-[var(--color-forest)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16">The Cape Carraholly Experience</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-14">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-6 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <item.Icon className="w-10 h-10 mx-auto mb-4 text-[var(--color-accent)]" />
                <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                <p className="text-white/85 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => alert("Cloudbeds Immersive Experience 2.0 modal opens here – property code 6a6jNf")}
              className="bg-white text-[var(--color-forest)] px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Discover Your Adventure
            </button>
          </div>
        </div>
      </section>
    </>
  );
}