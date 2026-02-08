import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative w-full min-h-[420px] lg:h-[664px] bg-[#D9D9D9] overflow-hidden">
      <Image
        src="/images/carreer_banner.png"
        alt="Career Banner"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(0deg, rgba(66, 31, 0, 0.5), rgba(66, 31, 0, 0.5))",
        }}
      />

      <div className="relative z-10 h-full min-h-[420px] lg:min-h-[664px] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-[982px] mx-auto space-y-6">
          <h1
            className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px] text-white"
          >
            Build Your Career With Purpose
          </h1>
          <p
            className="text-xl md:text-2xl leading-[33px] text-white max-w-[840px] mx-auto"
          >
            Join a growing real estate team focused on clarity, trust, and
            meaningful impact in every property decision.
          </p>
        </div>
      </div>
    </section>
  );
}
