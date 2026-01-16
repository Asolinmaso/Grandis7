import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        {/* Placeholder - Add office team image at /images/career_hero.png */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            Add office team image at /images/career_hero.png
          </p>
        </div>
        {/* Uncomment when image is available:
        <Image
          src="/images/career_hero.png"
          alt="Career Hero"
          fill
          className="object-cover"
          priority
        />
        */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Build Your Career With Purpose
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Join a growing real estate team focused on clarity, trust, and
            meaningful impact in every property decision.
          </p>
        </div>
      </div>
    </section>
  );
}
