import Image from "next/image";

export default function MissionQuote() {
  return (
    <section className="relative w-full bg-[#421F00] overflow-hidden py-14 md:py-16 md:min-h-[405px] flex items-center">
      {/* Decorative Background Blurs */}
      <div
        className="absolute w-[379px] h-[303px] rounded-full"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(168, 81, 5, 0.5)",
          filter: "blur(200px)",
        }}
      />
      <div
        className="absolute w-[379px] h-[303px] rounded-full"
        style={{
          left: "calc(50% - 705.5px)",
          top: "calc(50% - 146px)",
          background: "rgba(168, 81, 5, 0.5)",
          filter: "blur(200px)",
        }}
      />
      <div
        className="absolute w-[379px] h-[303px] rounded-full"
        style={{
          left: "calc(50% + 705.5px)",
          top: "calc(50% + 146px)",
          background: "rgba(168, 81, 5, 0.5)",
          filter: "blur(200px)",
        }}
      />

      {/* Decorative Quote SVG Shapes */}
      <Image
  src="/images/quote-left.png"
  alt=""
  width={140}
  height={150}
  className="absolute left-6 top-6 opacity-1 pointer-events-none select-none"
/>

<Image
  src="/images/quote-right.png"
  alt=""
  width={140}
  height={150}
  className="absolute right-6 bottom-6 opacity-1 pointer-events-none select-none"
/>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-[919px] mx-auto text-center space-y-8">
          {/* Quote */}
          <p
            className="text-2xl md:text-[32px] font-medium leading-[44px]"
            style={{ color: "#FCDE94" }}
          >
            Grandis7 was born from the belief that real estate decisions shape
            lives, not just investments. Our purpose is to guide every client
            with honesty, clarity, and care so each choice feels right, today
            and in the years ahead.
          </p>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-2">
            <p
              className="text-xl md:text-2xl font-semibold leading-[33px]"
              style={{ color: "#FCDE94" }}
            >
              Mr. Jefry Wilson.
            </p>
            <p
              className="text-sm md:text-base font-semibold leading-[22px]"
              style={{ color: "#FCDE94" }}
            >
              Managing Director & CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
