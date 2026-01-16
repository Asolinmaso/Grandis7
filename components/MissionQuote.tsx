export default function MissionQuote() {
  return (
    <section className="w-full bg-[#421F00] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quotation Marks */}
        <div className="flex items-start justify-center gap-4 mb-8">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-white/50 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.59-9.57 1.858 0 3.391.5 4.609 1.5V0c-1.5-.5-3.109-.75-4.609-.75-5.25 0-9.5 3.5-9.5 9.75v7.641H14.017z" />
          </svg>
          <div className="flex-1">
            <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-medium">
              Grandis7 was born from the belief that real estate decisions shape
              lives, not just investments. Our purpose is to guide every client
              with honesty, clarity, and care so each choice feels right, today
              and in the years ahead.
            </p>
          </div>
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-white/50 flex-shrink-0 rotate-180"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 9.59-9.57 1.858 0 3.391.5 4.609 1.5V0c-1.5-.5-3.109-.75-4.609-.75-5.25 0-9.5 3.5-9.5 9.75v7.641H14.017z" />
          </svg>
        </div>

        {/* Attribution */}
        <p className="text-lg md:text-xl text-white/90 mt-8">
          Mr. Jefry Wilson. Managing Director & CEO
        </p>
      </div>
    </section>
  );
}
