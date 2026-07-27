import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[480px] md:h-[650px] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(66, 31, 0, 0.25) 25%, #421F00 99.39%), url(/images/Banner.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center translate-y-28 md:translate-y-32">
        <div className="max-w-[900px] mx-auto space-y-4">
          <h1
            className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px]"
            style={{ color: "#FFFFFF" }}
          >
            About Us
          </h1>
          <p
            className="text-xl md:text-2xl max-w-[900px] mx-auto leading-[33px]"
            style={{ color: "#FFFFFF" }}
          >
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
