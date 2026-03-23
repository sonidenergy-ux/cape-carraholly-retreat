"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { track } from "@vercel/analytics";

export type BookingModalOpenOptions = {
  source?: string;
  accommodation?: string;
};

type OpenListener = () => void;

const openListeners = new Set<OpenListener>();

export function openBookingModal(opts?: BookingModalOpenOptions) {
  track("booking_modal_open", {
    source: opts?.source ?? "unspecified",
    ...(opts?.accommodation ? { accommodation: opts.accommodation } : {}),
  });
  openListeners.forEach((fn) => fn());
}

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setIsOpen(true);
    openListeners.add(onOpen);
    return () => {
      openListeners.delete(onOpen);
    };
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-overlay"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6"
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="booking-modal-title" className="sr-only">
              Reserve your stay
            </h2>
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-forest)]/15 bg-white text-[var(--color-forest)] shadow-sm transition-colors hover:bg-[var(--color-sand)] hover:border-[var(--color-forest)]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ocean)]"
              aria-label="Close booking"
            >
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            </button>
            <div className="px-6 pb-10 pt-16 sm:px-10 sm:pt-20">
              <p className="text-center font-serif text-2xl text-[var(--color-forest)] sm:text-3xl">
                Cloudbeds Immersive Experience loading&hellip;
              </p>
              <p className="mx-auto mt-4 max-w-md text-center text-base text-[var(--color-text-light)] leading-relaxed">
                Your reservation flow will appear here. Property{" "}
                <span className="font-medium text-[var(--color-forest)]">6a6jNf</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
