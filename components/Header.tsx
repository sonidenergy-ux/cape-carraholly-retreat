"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import { Menu, Search, Ship, X } from "lucide-react";
import { openBookingModal } from "@/components/BookingModal";
import { searchIndex, type SearchIndexItem } from "@/lib/searchIndex";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Accommodations", href: "#accommodations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "FAQ", href: "#faq" },
] as const;

const fuse = new Fuse(searchIndex, {
  keys: ["title", "description", "category"],
  threshold: 0.42,
  ignoreLocation: true,
});

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function scrollToHash(href: string) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const searchFieldId = useId();
  const mobileSearchId = useId();

  useEffect(() => {
    const readHash = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return fuse.search(q).map((r) => r.item);
  }, [query]);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setQuery("");
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFocusableRef.current?.focus(), 100);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobile();
        setDesktopSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMobile]);

  useEffect(() => {
    if (!desktopSearchOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target as Node)) {
        setDesktopSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [desktopSearchOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && (!hash || hash === "#");
    return hash === href;
  };

  const goToResult = (item: SearchIndexItem) => {
    if (pathname !== "/") {
      window.location.href = `/${item.href}`;
      return;
    }
    window.history.replaceState(null, "", item.href);
    setHash(item.href);
    scrollToHash(item.href);
    closeMobile();
    setDesktopSearchOpen(false);
    setQuery("");
  };

  const navLinkClass = (active: boolean) =>
    [
      "text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] rounded-sm",
      active
        ? "text-white underline decoration-[var(--color-accent)] underline-offset-4"
        : "text-white/90 hover:text-[var(--color-accent)]",
    ].join(" ");

  return (
    <header className="fixed left-0 right-0 top-0 z-[60] min-h-[var(--site-header-height)] border-b border-white/10 bg-[var(--color-ocean)]/95 shadow-md backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-white transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
          aria-label="Cape Carraholly — Home"
        >
          Cape Carraholly
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {navItems.map(({ label, href }) =>
            href.startsWith("#") ? (
              <a key={href} href={href} className={navLinkClass(isActive(href))}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className={navLinkClass(pathname === href)}>
                {label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <div className="relative" ref={desktopSearchRef}>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                aria-hidden
              />
              <input
                id={searchFieldId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setDesktopSearchOpen(true)}
                placeholder="Search sanctuaries & experiences…"
                autoComplete="off"
                aria-label="Search accommodations, experiences, and stories"
                aria-expanded={desktopSearchOpen}
                aria-controls={`${searchFieldId}-results`}
                className="w-52 rounded-full border border-white/30 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/55 transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 lg:w-60"
              />
            </div>
            <AnimatePresence>
              {desktopSearchOpen && query.trim() && (
                <motion.ul
                  id={`${searchFieldId}-results`}
                  role="listbox"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-[70] mt-2 max-h-64 w-[min(100vw-3rem,22rem)] overflow-y-auto rounded-xl border border-white/15 bg-[var(--color-ocean)]/98 py-2 shadow-xl backdrop-blur-md"
                >
                  {searchResults.length === 0 ? (
                    <li className="px-4 py-3 text-sm text-white/70">No matches—try another phrase.</li>
                  ) : (
                    searchResults.map((item) => (
                      <li key={item.id} role="option">
                        <button
                          type="button"
                          onClick={() => goToResult(item)}
                          className="w-full px-4 py-3 text-left transition-colors hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                        >
                          <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                            {item.category}
                          </span>
                          <span className="block font-serif text-base text-white">{item.title}</span>
                          <span className="mt-1 block text-sm text-white/65">
                            {truncate(item.description, 96)}
                          </span>
                        </button>
                      </li>
                    ))
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => openBookingModal({ source: "header_nav" })}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold text-[var(--color-forest)] shadow-md transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            aria-label="Book now — open reservation"
          >
            <Ship className="h-4 w-4 shrink-0" aria-hidden />
            Book Now
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation and search"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[var(--site-header-height)] z-[59] flex flex-col overflow-y-auto bg-[var(--color-ocean)] px-6 py-20 md:hidden"
          >
            <div className="mx-auto w-full max-w-lg">
              <label htmlFor={mobileSearchId} className="sr-only">
                Search accommodations, experiences, and journal
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50"
                  aria-hidden
                />
                <input
                  ref={firstFocusableRef}
                  id={mobileSearchId}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sanctuaries, experiences, stories…"
                  autoComplete="off"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-4 pl-12 text-base text-white placeholder:text-white/60 focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
                />
              </div>

              <AnimatePresence mode="popLayout">
                {query.trim() ? (
                  <motion.ul
                    key="results"
                    role="listbox"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22 }}
                    className="mt-4 max-h-64 overflow-y-auto rounded-xl bg-white/10"
                  >
                    {searchResults.length === 0 ? (
                      <li className="px-4 py-4 text-sm text-white/70">No matches—try another phrase.</li>
                    ) : (
                      searchResults.map((item) => (
                        <li key={item.id} role="option">
                          <button
                            type="button"
                            onClick={() => goToResult(item)}
                            className="w-full border-b border-white/10 px-4 py-4 text-left last:border-b-0 hover:bg-white/10 focus-visible:bg-white/10 focus-visible:outline-none"
                          >
                            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                              {item.category}
                            </span>
                            <span className="mt-1 block font-serif text-lg text-white">{item.title}</span>
                            <span className="mt-1 block text-sm text-white/70">{truncate(item.description, 120)}</span>
                          </button>
                        </li>
                      ))
                    )}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>

            <nav className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-8" aria-label="Mobile primary">
              {navItems.map(({ label, href }) =>
                href.startsWith("#") ? (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (pathname !== "/") {
                        window.location.href = `/${href}`;
                        closeMobile();
                        return;
                      }
                      window.history.replaceState(null, "", href);
                      setHash(href);
                      scrollToHash(href);
                      closeMobile();
                    }}
                    className={`text-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                      isActive(href) ? "text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-8" : "text-white/90 hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobile}
                    className={`text-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ${
                      pathname === href ? "text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-8" : "text-white/90 hover:text-[var(--color-accent)]"
                    }`}
                  >
                    {label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mx-auto mt-12 w-full max-w-lg">
              <button
                type="button"
                onClick={() => {
                  openBookingModal({ source: "header_nav" });
                  closeMobile();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 py-4 text-lg font-semibold text-[var(--color-forest)] shadow-lg transition-all hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                <Ship className="h-5 w-5" aria-hidden />
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
