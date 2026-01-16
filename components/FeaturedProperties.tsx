import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Luxury_villa.png",
  },
  {
    id: 2,
    title: "2BHK",
    location: "Baner, Pune",
    image: "/images/worth_exploring/2BHK.png",
  },
  {
    id: 3,
    title: "Commercial Space",
    location: "Baner, Pune",
    image: "/images/worth_exploring/Commercial_space.png",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <h3 className="text-sm md:text-base text-[#686868] uppercase tracking-wider">
            FEATURED PROPERTIES
          </h3>
        </div>

        {/* Header Section with Title and Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Main Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E2E2E] leading-tight">
              Handpicked Spaces Worth Exploring
            </h2>
          </div>

          {/* Right Side - Description and Navigation */}
          <div className="flex flex-col justify-between">
            <p className="text-[#686868] text-base md:text-lg mb-6 lg:mb-0 text-end">
              Explore properties that stand out for design, connectivity, and
              investment potential.
            </p>
            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-end">
              <button
                className="w-[73px] h-[73px] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Previous"
              >
                <svg
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_265_409)">
                    <rect
                      x="4"
                      width="65"
                      height="65"
                      rx="32.5"
                      fill="url(#paint0_linear_265_409)"
                    />
                    <path
                      d="M46.5779 32.9998H26.4229M26.4229 32.9998L33.981 42.9998M26.4229 32.9998L33.981 22.9998"
                      stroke="#421F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_265_409"
                      x="0"
                      y="0"
                      width="73"
                      height="73"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_265_409"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_265_409"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_265_409"
                      x1="69"
                      y1="32.5"
                      x2="4"
                      y2="32.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A2630E" />
                      <stop offset="0.2811" stopColor="#FFBA3E" />
                      <stop offset="0.546173" stopColor="#A2630E" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
              <button
                className="w-[73px] h-[73px] flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Next"
              >
                <svg
                  width="73"
                  height="73"
                  viewBox="0 0 73 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_265_411)">
                    <rect
                      x="4"
                      width="65"
                      height="65"
                      rx="32.5"
                      fill="url(#paint0_linear_265_411)"
                    />
                    <path
                      d="M26.4231 32.9998H46.5781M46.5781 32.9998L39.02 22.9998M46.5781 32.9998L39.02 42.9998"
                      stroke="#421F00"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_265_411"
                      x="0"
                      y="0"
                      width="73"
                      height="73"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_265_411"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_265_411"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_265_411"
                      x1="69"
                      y1="32.5"
                      x2="4"
                      y2="32.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#A2630E" />
                      <stop offset="0.2811" stopColor="#FFBA3E" />
                      <stop offset="0.546173" stopColor="#A2630E" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative group rounded-2xl overflow-hidden bg-gray-900"
            >
              {/* Property Image */}
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                      {property.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {property.location}
                    </p>
                  </div>
                  {/* Circular Button with Diagonal Arrow */}
                  <button
                    className="w-[65px] h-[65px] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0 ml-4"
                    aria-label={`View ${property.title}`}
                  >
                    <svg
                      width="65"
                      height="65"
                      viewBox="0 0 65 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="65"
                        height="65"
                        rx="32.5"
                        fill={`url(#paint0_linear_265_431_${property.id})`}
                      />
                      <path
                        d="M25.375 40.1258L39.6267 25.874M39.6267 25.874L41.3534 38.2895M39.6267 25.874L27.2113 24.1474"
                        stroke="#421F00"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id={`paint0_linear_265_431_${property.id}`}
                          x1="65"
                          y1="32.5"
                          x2="3.23714e-08"
                          y2="32.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A2630E" />
                          <stop offset="0.2811" stopColor="#FFBA3E" />
                          <stop offset="0.546173" stopColor="#A2630E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
