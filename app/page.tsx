"use client";

import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Footprints,
  Home as HomeIcon,
  Kayak,
  Mail,
  Phone,
  Scissors,
  Ship,
  Tent,
  ThermometerSun,
  Users,
} from "lucide-react";
import NewsletterSignup from "../components/NewsletterSignup";
import BookingModal, { openBookingModal } from "@/components/BookingModal";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13.5 22v-8.2h2.8l.5-3.2H13.5V8.6c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.5H7.5v3.2h2.6V22h3.4z" />
    </svg>
  );
}

export default function Home() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(0);
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
        "Three-bedroom coastal retreats with private hot tubs, fireplaces, and twilight firepits by the water. Perfect for families or small groups seeking elevated comfort.",
      Icon: HomeIcon,
    },
    {
      title: "Waterfront Dome",
      description:
        "Panoramic inlet views, king bed, luxury linens – a serene hideaway designed for effortless reconnection.",
      Icon: Tent,
    },
    {
      title: "Secluded Yurts",
      description:
        "Elevated forest platforms immersed in wilderness stillness with curated shared amenities nearby.",
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

  const testimonials = [
    {
      quote:
        "The boat ride set the tone for pure magic. The lodge hot tub at sunset was unforgettable.",
      attribution: "Sarah & Mike, Calgary",
    },
    {
      quote:
        "Secluded yurt felt like our own private island. Sauna and kayaking were highlights.",
      attribution: "Emily T., Vancouver",
    },
    {
      quote:
        "New management upgrades shine. Peaceful, luxurious escape minutes from the city.",
      attribution: "David L., Victoria",
    },
  ];

  const journalPosts = [
    {
      title: "The First Boat Ride of Spring",
      excerpt:
        "As the mist lifts from the inlet, the shoreline reveals itself in layers of emerald and silver—a gentle arrival that feels worlds away from the city.",
    },
    {
      title: "Evening Light on the Forest Trail",
      excerpt:
        "Soft footfalls on cedar-lined paths, the scent of salt and pine, and a stillness that invites you to slow every breath.",
    },
    {
      title: "Sanctuary After Dark",
      excerpt:
        "Stars over the water, the glow of a private hot tub, and the quiet hum of a place designed for deep rest.",
    },
  ];

  const faqItems = [
    {
      question: "How do I get there?",
      answer:
        "Our complimentary boat shuttle departs from Rocky Point Park in Port Moody. The crossing is a serene 10–15 minute ride—no boating experience required. Our crew welcomes you aboard and sets the tone for your escape.",
    },
    {
      question: "What should I bring?",
      answer:
        "Pack comfortable layers for coastal weather, sturdy shoes for forest trails, binoculars if you love wildlife, and above all—a sense of wonder. We provide the essentials for a refined wilderness stay.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "To preserve the serenity of local wildlife and the exclusive atmosphere for all guests, we do not permit pets on property.",
    },
    {
      question: "Cancellation policy?",
      answer:
        "We offer flexible arrangements within 30 days of arrival, with full details confirmed at booking. Our team is happy to walk you through options tailored to your stay.",
    },
    {
      question: "2026 upgrades?",
      answer:
        "Under new management, 2026 brings enhanced private hot tubs, refined trail experiences, and greater sense of privacy across the sanctuary—select dates are filling quickly.",
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
            type="button"
            onClick={() => openBookingModal({ source: "sticky_bar" })}
            className="bg-[var(--color-forest)] hover:bg-[var(--color-ocean)] text-white px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 text-lg"
          >
            Book Your Escape
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="hero-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')] scale-110"
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
              type="button"
              onClick={() => openBookingModal({ source: "hero" })}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 text-sm md:text-base text-white/85 font-medium"
          >
            Complimentary boat shuttle from Rocky Point Park • No experience needed
          </motion.p>
        </div>
      </section>

      {/* Accommodations */}
      <section id="accommodations" className="py-24 bg-[var(--color-sand)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif mb-16 text-center text-[var(--color-forest)]">
            Your Private Sanctuary Awaits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
            {accommodations.map((item, index) => (
              <motion.article
                key={item.title}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[var(--color-accent)]/20 p-8 flex flex-col"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <item.Icon className="w-12 h-12 text-[var(--color-ocean)] mb-6" />
                <h3 className="text-2xl font-serif text-[var(--color-forest)] mb-4">{item.title}</h3>
                <p className="text-lg text-[var(--color-text-light)] opacity-90 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openBookingModal({ source: "accommodations", accommodation: item.title })
                  }
                  className="bg-white text-[var(--color-forest)] px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg"
                >
                  Reserve This Sanctuary
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
              type="button"
              onClick={() => openBookingModal({ source: "experiences" })}
              className="bg-white text-[var(--color-forest)] px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Discover Your Adventure
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-[var(--color-sand)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-[var(--color-forest)]">
            What Guests Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.attribution}
                className="bg-white rounded-3xl shadow-xl p-8 border border-[var(--color-accent)]/20 flex flex-col"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-[var(--color-forest)] font-medium text-sm md:text-base border-t border-[var(--color-accent)]/30 pt-4">
                  — {item.attribution}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[var(--color-forest)] text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif text-center mb-12">The Story of Cape Carraholly</h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Our name draws from Gaelic roots: <em>carra</em> evokes beautiful land, woven with the quiet presence of
              holly trees that have graced this shoreline for generations.
            </p>
            <p>
              Cape Carraholly sits on the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh
              (Squamish), Stó:lō, and Tsleil-Waututh Nations. We honour their enduring stewardship of these lands and
              waters.
            </p>
            <p>
              Under new management in 2026, we are deepening guest comfort while holding conservation close: thoughtful
              upgrades, lighter footprints, and a long-term commitment to protecting the inlet and forest that make this
              place extraordinary.
            </p>
          </motion.div>

          <motion.div
            className="mt-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <button
              type="button"
              onClick={() => openBookingModal({ source: "about" })}
              className="bg-white text-[var(--color-forest)] px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 shadow-lg"
            >
              Learn More About Our Values
            </button>
          </motion.div>
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="bg-[var(--color-sand)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-[var(--color-forest)]">
            Stories from the Inlet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {journalPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="bg-white rounded-3xl shadow-xl border border-[var(--color-accent)]/20 p-8 flex flex-col"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <h3 className="text-2xl font-serif text-[var(--color-forest)] mb-4">{post.title}</h3>
                <p className="text-lg text-[var(--color-text-light)] opacity-90 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <button
                  type="button"
                  onClick={() => alert("Journal — coming soon")}
                  className="self-start bg-white text-[var(--color-forest)] border border-[var(--color-forest)]/30 px-6 py-3 rounded-full text-base font-medium hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] transition-all duration-300"
                >
                  Read More
                </button>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => openBookingModal({ source: "journal" })}
              className="bg-[var(--color-forest)] text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-[var(--color-ocean)] transition-all duration-300 shadow-lg"
            >
              Explore the Journal
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24 border-t border-[var(--color-accent)]/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-[var(--color-forest)]">
            Frequently Asked Questions
          </h2>

          <ul className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqId === index;
              return (
                <li
                  key={item.question}
                  className="rounded-2xl border border-[var(--color-accent)]/25 bg-[var(--color-sand)]/40 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 text-[var(--color-forest)] hover:bg-white/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg md:text-xl font-serif pr-4">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[var(--color-ocean)]"
                    >
                      <ChevronDown className="w-6 h-6" aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={item.question}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-[var(--color-accent)]/15">
                          <p className="text-[var(--color-text-light)] text-base md:text-lg leading-relaxed pt-4 mb-6">
                            {item.answer}
                          </p>
                          <button
                            type="button"
                            onClick={() => openBookingModal({ source: "faq" })}
                            className="bg-[var(--color-forest)] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[var(--color-ocean)] transition-all duration-300 shadow-md"
                          >
                            Ready to Book?
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
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

      {/* Footer */}
      <footer className="bg-[var(--color-ocean)] text-white/90 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-2xl font-serif text-white tracking-tight mb-2">Cape Carraholly</p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xs">
                Boat In. Unplug. Reconnect.
              </p>
            </div>

            <nav aria-label="Quick links" className="flex flex-col gap-3">
              <span className="text-white font-medium text-sm uppercase tracking-widest mb-1">Explore</span>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#accommodations" className="hover:text-white transition-colors">
                Accommodations
              </a>
              <a href="#experiences" className="hover:text-white transition-colors">
                Experiences
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="mailto:hello@capecarraholly.com" className="hover:text-white transition-colors">
                Contact
              </a>
            </nav>

            <div>
              <span className="text-white font-medium text-sm uppercase tracking-widest mb-3 block">Contact</span>
              <a
                href="mailto:hello@capecarraholly.com"
                className="flex items-center gap-3 hover:text-white transition-colors mb-3"
              >
                <Mail className="w-5 h-5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                <span>hello@capecarraholly.com</span>
              </a>
              <p className="flex items-center gap-3 mb-6">
                <Phone className="w-5 h-5 shrink-0 text-[var(--color-accent)]" aria-hidden />
                <span>+1 (604) 000-0000</span>
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-colors text-[var(--color-accent)]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-colors text-[var(--color-accent)]"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/75 text-center max-w-4xl mx-auto leading-relaxed mb-4">
              © {new Date().getFullYear()} Cape Carraholly Retreat. We acknowledge that we operate on the unceded
              territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), Stó:lō, and Tsleil-Waututh Nations.
            </p>
            <p className="text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Privacy policy — coming soon");
                }}
                className="text-sm text-[var(--color-accent)] hover:text-white underline underline-offset-4 transition-colors"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>

      <BookingModal />
    </>
  );
}