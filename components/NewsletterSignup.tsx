export default function NewsletterSignup() {
  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-white/15 border border-white/30 rounded-full px-8 py-5 text-white placeholder:text-white/60 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
      />
      <button
        type="submit"
        className="bg-[var(--color-accent)] text-[var(--color-forest)] px-10 py-5 rounded-full font-medium hover:bg-white hover:text-[var(--color-forest)] transition-all duration-300 shadow-md"
      >
        Subscribe
      </button>
    </form>
  );
}
