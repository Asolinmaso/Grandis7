import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <div className="absolute w-full h-full">
       
        <Image
          src="/images/Banner.png"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Brown Overlay */}
      <div className="absolute inset-0 bg-[#421F00]/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Grandis7 is a trusted real estate consultancy focused on helping
            buyers and investors discover verified residential, commercial, and
            plot opportunities. We believe property decisions should be clear,
            informed, and stress-free.
          </p>
        </div>
      </div>
    </section>
  );
}
