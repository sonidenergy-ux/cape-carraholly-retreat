"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Footprints,
  Home as HomeIcon,
  Kayak,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Ship,
  Sparkles,
  Tent,
  ThermometerSun,
  TreePine,
  Users,
} from "lucide-react";
import NewsletterSignup from "../components/NewsletterSignup";
import BookingModal, { openBookingModal } from "@/components/BookingModal";
import heroCabin from "../public/images/carraholly/Cabin.jpg";

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
  const parallaxBg = useTransform(scrollY, [0, 900], [0, -160]);
  const parallaxText = useTransform(scrollY, [0, 900], [0, 72]);
  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionReveal = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0 },
  };

  const trustStats = [
    { label: "Complimentary Boat Shuttle", Icon: Ship },
    { label: "75 Acres Private Wilderness", Icon: TreePine },
    { label: "2026 Upgraded Sanctuaries", Icon: Sparkles },
    { label: "Minutes from Vancouver", Icon: MapPin },
  ];

  const accommodations = [
    {
      num: "01",
      title: "Oceanfront Lodges",
      description:
        "Three-bedroom coastal retreats with private hot tubs, hearths, and twilight firepits by the water—crafted for families and small groups who expect the exceptional.",
      Icon: HomeIcon,
      image: "/images/carraholly/Cabin.jpg",
      imageAlt: "Oceanfront lodge with private hot tub at Cape Carraholly retreat",
    },
    {
      num: "02",
      title: "Waterfront Dome",
      description:
        "Panoramic inlet views, king bed, and layered linens in a serene hideaway designed for quiet reconnection above the tide line.",
      Icon: Tent,
      image: "/images/carraholly/Dome.jpg",
      imageAlt: "Waterfront dome glamping panoramic inlet views British Columbia",
    },
    {
      num: "03",
      title: "Secluded Yurts",
      description:
        "Elevated forest platforms wrapped in stillness, with curated shared amenities moments away—intimate, grounded, unforgettable.",
      Icon: Tent,
      image: "/images/carraholly/Yurt.jpg",
      imageAlt: "Secluded elevated yurt forest serenity luxury glamping",
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
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-wood)]/40 bg-white/95 shadow-2xl backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row">
          <div className="flex items-center gap-3 text-[var(--color-forest)]">
            <Ship className="h-6 w-6 shrink-0 text-[var(--color-accent)]" />
            <span className="text-center text-lg font-medium sm:text-left">Your journey begins with the boat</span>
          </div>
          <motion.button
            type="button"
            onClick={() => openBookingModal({ source: "sticky_bar" })}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-luxury-primary px-10 py-4 text-lg"
          >
            Book Your Escape
          </motion.button>
        </div>
      </div>

      {/* Hero — layered inlet, overlapping text block, trust row, video */}
      <section className="relative overflow-hidden pt-14">
        <motion.div
          className="absolute inset-0 scale-[1.12]"
          style={{ y: parallaxBg }}
        >
          <Image
            src={heroCabin}
            alt="Boat arriving at Cape Carraholly oceanside retreat"
            fill
            priority
            placeholder="blur"
            quality={85}
            sizes="100vw"
            className="object-cover brightness-75"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest)]/50 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sand)] via-transparent to-transparent opacity-90" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl flex-col justify-end gap-10 px-4 pb-16 pt-10 md:px-8 lg:justify-center lg:pb-20 lg:pt-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-12 lg:gap-6">
            <motion.div
              className="lg:col-span-7 xl:col-span-6"
              style={{ y: parallaxText }}
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="wood-card rounded-3xl bg-white/96 p-8 shadow-2xl backdrop-blur-md md:p-10 lg:-ml-4 lg:p-12 xl:-ml-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)] md:text-sm">
                  Wilderness luxury · Port Moody inlet
                </p>
                <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--color-forest)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="text-[var(--color-accent)]">Boat In.</span>
                  <br />
                  Unplug.
                  <br />
                  Reconnect.
                </h1>
                <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-light)] md:text-xl">
                  Minutes from Vancouver—yet worlds away. A boat-access-only oceanside sanctuary on seventy-five acres of
                  unspoiled coastal forest.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {trustStats.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-wood)]/45 bg-[var(--color-sand)]/80 px-4 py-2 text-left text-xs font-medium text-[var(--color-forest)] shadow-sm md:text-sm"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.7 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => openBookingModal({ source: "hero" })}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-luxury-primary px-10 py-5 text-lg md:text-xl"
                  >
                    Reserve Your Sanctuary
                  </motion.button>
                  <motion.a
                    href="#newsletter"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-luxury-outline inline-flex items-center justify-center px-10 py-5 text-lg md:text-xl"
                  >
                    Stay Informed
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            <div className="hidden lg:col-span-5 xl:col-span-6 lg:block" aria-hidden />
          </div>

          <motion.div
            className="mx-auto w-full max-w-5xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wood-card relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                src="/images/carraholly/Video.mp4"
                poster="/images/carraholly/Cabin.jpg"
                className="h-full w-full object-cover rounded-2xl"
              />
              <p className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-5 pt-12 text-center text-sm font-semibold text-white md:text-base [text-shadow:0_2px_14px_rgba(0,0,0,0.95)]">
                Your Journey Begins Here – Watch the Boat Arrival
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accommodations */}
      <motion.section
        id="accommodations"
        className="scroll-mt-24 bg-[var(--color-sand)] py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-6 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent)]">
              Sanctuaries
            </p>
            <h2 className="font-serif text-4xl text-[var(--color-forest)] md:text-5xl lg:text-6xl">
              Your private <span className="text-[var(--color-accent)]">sanctuary</span> awaits
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-light)]">
              Three distinct ways to settle into the inlet—each numbered, each considered.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {accommodations.map((item, index) => (
              <motion.article
                key={item.title}
                className="wood-card group flex flex-col overflow-hidden rounded-3xl bg-white"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/80 bg-white/90 font-serif text-xl text-[var(--color-accent)] shadow-md">
                    {item.num}
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <motion.button
                      type="button"
                      onClick={() =>
                        openBookingModal({ source: "accommodations", accommodation: item.title })
                      }
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-luxury-primary w-full max-w-[280px] px-8 py-4 text-base md:text-lg"
                    >
                      Reserve This Sanctuary
                    </motion.button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <item.Icon className="h-10 w-10 text-[var(--color-accent)]" aria-hidden />
                    <h3 className="font-serif text-2xl text-[var(--color-forest)] md:text-3xl">{item.title}</h3>
                  </div>
                  <p className="flex-1 text-lg leading-relaxed text-[var(--color-text-light)]">{item.description}</p>
                  <button
                    type="button"
                    onClick={() =>
                      openBookingModal({ source: "accommodations", accommodation: item.title })
                    }
                    className="mt-6 inline-flex items-center text-sm font-semibold uppercase tracking-widest text-[var(--color-wood)] underline-offset-4 transition-colors hover:text-[var(--color-accent)] md:hidden"
                  >
                    Reserve This Sanctuary
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experiences */}
      <motion.section
        id="experiences"
        className="scroll-mt-24 bg-[var(--color-forest)] py-24 text-white"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center font-serif text-4xl md:text-5xl lg:text-6xl">
            The Cape Carraholly <span className="text-[var(--color-accent)]">experience</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-white/80">
            Curated moments on water, trail, and deck—composed together, at your pace.
          </p>

          <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-[var(--color-accent)]/30 bg-white/[0.06] p-6 text-center shadow-lg backdrop-blur-sm"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <item.Icon className="mx-auto mb-4 h-10 w-10 text-[var(--color-accent)]" />
                <h3 className="mb-3 font-serif text-2xl">{item.title}</h3>
                <p className="leading-relaxed text-white/85">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              type="button"
              onClick={() => openBookingModal({ source: "experiences" })}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/15 px-10 py-5 text-xl font-medium text-white shadow-lg backdrop-blur transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-forest)]"
            >
              Discover Your Adventure
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="scroll-mt-24 bg-[var(--color-sand)] py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center font-serif text-4xl text-[var(--color-forest)] md:text-5xl lg:text-6xl">
            What guests are <span className="text-[var(--color-accent)]">saying</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-lg text-[var(--color-text-light)]">
            Word of mouth from those who crossed by boat and stayed for the stillness.
          </p>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.attribution}
                className="wood-card flex flex-col rounded-3xl bg-white p-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="border-t border-[var(--color-accent)]/35 pt-4 text-sm font-medium text-[var(--color-forest)] md:text-base">
                  — {item.attribution}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="scroll-mt-24 bg-[var(--color-forest)] py-24 text-white"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-12 text-center font-serif text-4xl md:text-5xl lg:text-6xl">
            The story of <span className="text-[var(--color-accent)]">Cape Carraholly</span>
          </h2>

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
            <motion.button
              type="button"
              onClick={() => openBookingModal({ source: "about" })}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-luxury-primary px-10 py-5 text-xl"
            >
              Learn More About Our Values
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Journal */}
      <motion.section
        id="journal"
        className="scroll-mt-24 bg-[var(--color-sand)] py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center font-serif text-4xl text-[var(--color-forest)] md:text-5xl lg:text-6xl">
            Stories from the <span className="text-[var(--color-accent)]">inlet</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-[var(--color-text-light)]">
            Notes on light, tide, and the rhythm of arrival—shared when the moment feels right.
          </p>

          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {journalPosts.map((post, index) => (
              <motion.article
                key={post.title}
                className="wood-card flex flex-col rounded-3xl bg-white p-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <h3 className="text-2xl font-serif text-[var(--color-forest)] mb-4">{post.title}</h3>
                <p className="text-lg text-[var(--color-text-light)] opacity-90 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <motion.button
                  type="button"
                  onClick={() => alert("Journal — coming soon")}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-luxury-outline self-start px-6 py-3 text-base"
                >
                  Read More
                </motion.button>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              type="button"
              onClick={() => openBookingModal({ source: "journal" })}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border-2 border-[var(--color-wood)] bg-[var(--color-forest)] px-10 py-5 text-xl font-medium text-white shadow-lg transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-ocean)]"
            >
              Explore the Journal
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="scroll-mt-24 border-t border-[var(--color-wood)]/25 bg-white py-24"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.65 }}
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-center font-serif text-4xl text-[var(--color-forest)] md:text-5xl">
            Frequently asked <span className="text-[var(--color-accent)]">questions</span>
          </h2>
          <p className="mb-14 text-center text-lg text-[var(--color-text-light)]">
            Everything you need before you step aboard—we are here to help you plan.
          </p>

          <ul className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaqId === index;
              return (
                <li
                  key={item.question}
                  className="overflow-hidden rounded-2xl border-2 border-[var(--color-wood)]/30 bg-[var(--color-sand)]/50 shadow-sm"
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
                          <motion.button
                            type="button"
                            onClick={() => openBookingModal({ source: "faq" })}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-luxury-primary px-8 py-3 text-base"
                          >
                            Ready to Book?
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.section>

      {/* Newsletter Teaser */}
      <section id="newsletter" className="scroll-mt-24 bg-[var(--color-forest)] py-24 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="mb-6 font-serif text-4xl md:text-5xl">
            Join the <span className="text-[var(--color-accent)]">current</span>
          </h2>
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
      <footer className="bg-[var(--color-ocean)] py-16 pb-28 text-white/90 md:pb-32">
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