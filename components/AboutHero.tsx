import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[780px]">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-[1005px] mx-auto space-y-8">
          <h1
            className="text-4xl md:text-[64px] font-semibold"
            style={{ color: "#FFFFFF", lineHeight: "87px" }}
          >
            About Us
          </h1>
          <p
            className="text-xl md:text-2xl max-w-[1005px] mx-auto leading-[33px]"
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
