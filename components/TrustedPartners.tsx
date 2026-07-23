import Image from "next/image";

const partners = [
  {
    name: "DLF",
    logo: "/images/dlf.png",
    bg: "bg-white",
  },
  {
    name: "Adityaram",
    logo: "/images/arglogo.png",
    bg: "bg-black",
  },
];

export default function TrustedPartners() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#B8860B] text-sm font-semibold uppercase tracking-[4px]">
            Trusted Partners
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#2E2E2E]">
            Authorized Channel Partners
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We are proud to be an <strong>Authorized Channel Partner</strong> for
            <strong> DLF</strong> and <strong>Adityaram</strong>, providing our
            clients with trusted access to premium real estate projects and
            investment opportunities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`${partner.bg} rounded-2xl border border-gray-200 p-10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={220}
                height={90}
                className="object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}