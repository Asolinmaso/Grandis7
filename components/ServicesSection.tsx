const services = [
  {
    id: 1,
    title: "Property Buying Assistance",
    description:
      "We guide buyers through verified property options with clear insights, expert support, and confident decisions.",
    icon: "home",
    isHighlighted: false,
  },
  {
    id: 2,
    title: "Investment Guidance",
    description:
      "We guide investors through verified opportunities with clear insights, expert support, and confident decisions.",
    icon: "chart",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Site Visit Support",
    description:
      "We guide clients through planned site visits with clear insights, expert support, and confident decisions.",
    icon: "location",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Documentation Help",
    description:
      "We guide clients through required documentation with clear insights, expert support, and confident decisions.",
    icon: "document",
    isHighlighted: false,
  },
];

function ServiceIcon({
  name,
  className,
}: {
  name: "home" | "chart" | "location" | "document";
  className?: string;
}) {
  if (name === "home") {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M50.9367 46.7876C52.2315 44.7572 52.9671 42.3149 52.9671 39.7254C52.9671 32.3688 47.0819 26.4836 39.7254 26.4836C32.3688 26.4836 26.4836 32.3688 26.4836 39.7254C26.4836 47.0819 32.3688 52.9671 39.7254 52.9671C42.2854 52.9671 44.6984 52.2315 46.7288 50.9662L55.9098 60L60 55.9098L50.9367 46.7876ZM39.7254 47.0819C37.7743 47.0819 35.9031 46.3068 34.5235 44.9272C33.1439 43.5476 32.3688 41.6764 32.3688 39.7254C32.3688 37.7743 33.1439 35.9031 34.5235 34.5235C35.9031 33.1439 37.7743 32.3688 39.7254 32.3688C41.6764 32.3688 43.5476 33.1439 44.9272 34.5235C46.3068 35.9031 47.0819 37.7743 47.0819 39.7254C47.0819 41.6764 46.3068 43.5476 44.9272 44.9272C43.5476 46.3068 41.6764 47.0819 39.7254 47.0819ZM8.82786 50.0245V26.4836H0L29.4262 0L58.8524 26.4836H53.4968C50.962 23.83 47.7112 21.9695 44.1393 21.128L29.4262 7.91565L14.7131 21.1574V44.1393H21.128C21.6283 46.258 22.4816 48.2295 23.6292 50.0245H8.82786Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg
        width="57"
        height="60"
        viewBox="0 0 57 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M41.8189 2.8125C41.8189 2.06658 42.1188 1.35121 42.6526 0.823762C43.1865 0.296316 43.9105 0 44.6654 0H54.1535C54.9085 0 55.6325 0.296316 56.1663 0.823762C56.7001 1.35121 57 2.06658 57 2.8125V12.1875C57 12.9334 56.7001 13.6488 56.1663 14.1762C55.6325 14.7037 54.9085 15 54.1535 15C53.3986 15 52.6746 14.7037 52.1408 14.1762C51.607 13.6488 51.3071 12.9334 51.3071 12.1875V9.6L34.3423 26.3625C33.8085 26.8892 33.0851 27.185 32.3308 27.185C31.5765 27.185 30.853 26.8892 30.3193 26.3625L20.945 17.1L4.92895 32.925C4.66835 33.2013 4.3541 33.423 4.00494 33.5767C3.65578 33.7304 3.27886 33.8131 2.89666 33.8197C2.51447 33.8264 2.13483 33.7569 1.7804 33.6155C1.42597 33.474 1.104 33.2635 0.833706 32.9964C0.563412 32.7293 0.350328 32.4112 0.207167 32.061C0.0640056 31.7108 -0.00630038 31.3357 0.000442988 30.958C0.00718636 30.5804 0.0908417 30.208 0.246417 29.863C0.401992 29.518 0.626301 29.2075 0.905962 28.95L18.9335 11.1375C19.4672 10.6108 20.1907 10.315 20.945 10.315C21.6993 10.315 22.4227 10.6108 22.9565 11.1375L32.3308 20.4L47.2841 5.625H44.6654C43.9105 5.625 43.1865 5.32868 42.6526 4.80124C42.1188 4.27379 41.8189 3.55842 41.8189 2.8125ZM2.91745 45C3.67238 45 4.39638 45.2963 4.9302 45.8238C5.46401 46.3512 5.7639 47.0666 5.7639 47.8125V57.1875C5.7639 57.9334 5.46401 58.6488 4.9302 59.1762C4.39638 59.7037 3.67238 60 2.91745 60C2.16253 60 1.43852 59.7037 0.904709 59.1762C0.370896 58.6488 0.0710032 57.9334 0.0710032 57.1875V47.8125C0.0710032 47.0666 0.370896 46.3512 0.904709 45.8238C1.43852 45.2963 2.16253 45 2.91745 45ZM20.945 36.5625C20.945 35.8166 20.6451 35.1012 20.1113 34.5738C19.5774 34.0463 18.8534 33.75 18.0985 33.75C17.3436 33.75 16.6196 34.0463 16.0858 34.5738C15.552 35.1012 15.2521 35.8166 15.2521 36.5625V57.1875C15.2521 57.9334 15.552 58.6488 16.0858 59.1762C16.6196 59.7037 17.3436 60 18.0985 60C18.8534 60 19.5774 59.7037 20.1113 59.1762C20.6451 58.6488 20.945 57.9334 20.945 57.1875V36.5625ZM33.2796 41.25C34.0345 41.25 34.7585 41.5463 35.2923 42.0738C35.8261 42.6012 36.126 43.3166 36.126 44.0625V57.1875C36.126 57.9334 35.8261 58.6488 35.2923 59.1762C34.7585 59.7037 34.0345 60 33.2796 60C32.5247 60 31.8007 59.7037 31.2668 59.1762C30.733 58.6488 30.4331 57.9334 30.4331 57.1875V44.0625C30.4331 43.3166 30.733 42.6012 31.2668 42.0738C31.8007 41.5463 32.5247 41.25 33.2796 41.25ZM51.3071 29.0625C51.3071 28.3166 51.0072 27.6012 50.4734 27.0738C49.9396 26.5463 49.2156 26.25 48.4606 26.25C47.7057 26.25 46.9817 26.5463 46.4479 27.0738C45.9141 27.6012 45.6142 28.3166 45.6142 29.0625V57.1875C45.6142 57.9334 45.9141 58.6488 46.4479 59.1762C46.9817 59.7037 47.7057 60 48.4606 60C49.2156 60 49.9396 59.7037 50.4734 59.1762C51.0072 58.6488 51.3071 57.9334 51.3071 57.1875V29.0625Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg
        width="63"
        height="65"
        viewBox="0 0 63 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M31.2939 27.7632C34.6534 27.7632 37.8752 26.4323 40.2506 24.0635C42.6261 21.6946 43.9606 18.4817 43.9606 15.1316C43.9606 11.7815 42.6261 8.56858 40.2506 6.1997C37.8752 3.83082 34.6534 2.5 31.2939 2.5C27.9345 2.5 24.7127 3.83082 22.3373 6.1997C19.9618 8.56858 18.6273 11.7815 18.6273 15.1316C18.6273 18.4817 19.9618 21.6946 22.3373 24.0635C24.7127 26.4323 27.9345 27.7632 31.2939 27.7632ZM31.2939 27.7632V46.7105M47.1273 34.0789H56.6273L59.7939 62.5H2.79395L5.96061 34.0789H15.4606"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
    );
  }

  return (
    <svg
      width="48"
      height="61"
      viewBox="0 0 48 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M35.6125 33.077C35.6125 32.4649 35.3678 31.878 34.9323 31.4452C34.4967 31.0124 33.9059 30.7693 33.2899 30.7693H14.7093C14.0933 30.7693 13.5026 31.0124 13.067 31.4452C12.6314 31.878 12.3867 32.4649 12.3867 33.077C12.3867 33.689 12.6314 34.276 13.067 34.7088C13.5026 35.1415 14.0933 35.3847 14.7093 35.3847H33.2899C33.9059 35.3847 34.4967 35.1415 34.9323 34.7088C35.3678 34.276 35.6125 33.689 35.6125 33.077ZM35.6125 45.3847C35.6125 44.7726 35.3678 44.1857 34.9323 43.7529C34.4967 43.3201 33.9059 43.077 33.2899 43.077H14.7093C14.0933 43.077 13.5026 43.3201 13.067 43.7529C12.6314 44.1857 12.3867 44.7726 12.3867 45.3847C12.3867 45.9967 12.6314 46.5837 13.067 47.0165C13.5026 47.4492 14.0933 47.6924 14.7093 47.6924H33.2899C33.9059 47.6924 34.4967 47.4492 34.9323 47.0165C35.3678 46.5837 35.6125 45.9967 35.6125 45.3847Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.51613 0.181396C6.25751 0.181396 4.0914 1.07863 2.49432 2.67571C0.897232 4.2728 0 6.43891 0 8.69753V52.0524C0 54.311 0.897232 56.4771 2.49432 58.0742C4.0914 59.6713 6.25751 60.5685 8.51613 60.5685H39.4839C41.7425 60.5685 43.9086 59.6713 45.5057 58.0742C47.1028 56.4771 48 54.311 48 52.0524V17.8888C48 16.7089 47.616 15.5631 46.9037 14.6217L37.6196 2.33365C37.1145 1.66511 36.4612 1.12281 35.711 0.74937C34.9609 0.375926 34.1344 0.181509 33.2965 0.181396H8.51613ZM4.64516 8.69753C4.64516 6.56075 6.37935 4.82656 8.51613 4.82656H30.9677V18.4431C30.9677 19.7251 32.0083 20.7657 33.2903 20.7657H43.3548V52.0524C43.3548 54.1891 41.6206 55.9233 39.4839 55.9233H8.51613C6.37935 55.9233 4.64516 54.1891 4.64516 52.0524V8.69753Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#FAFAFA] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-12 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-6">
          <h3
            className="text-xl md:text-2xl font-light uppercase"
            style={{
              color: "#686868",
              letterSpacing: "0.4em",
              lineHeight: "33px",
            }}
          >
            SERVICES WE PROVIDE
          </h3>
          <h2
            className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px]"
            style={{ color: "#2E2E2E" }}
          >
            Guidance That Moves You Forward
          </h2>
          <p
            className="text-xl md:text-2xl max-w-[888px] mx-auto leading-[33px]"
            style={{ color: "#686868" }}
          >
            End-to-end support designed to simplify property buying and
            investing through clear guidance, expert assistance, and confident
            ownership decisions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group h-full rounded-3xl p-6 flex flex-col gap-6 border border-[#D9D9D9] bg-white transition-all duration-300 hover:bg-[#421F00] hover:shadow-lg"
              style={
                service.isHighlighted
                  ? { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }
                  : { borderColor: "#D9D9D9" }
              }
            >
              {/* Icon */}
              <div
                className="w-[60px] h-[60px] flex items-center justify-center text-[#421F00] group-hover:text-[#FCDE94] transition-colors duration-300"
              >
                <ServiceIcon
                  name={service.icon as "home" | "chart" | "location" | "document"}
                  className="h-full w-full"
                />
              </div>

              {/* Title */}
              <h3
                className="min-h-[88px] text-2xl md:text-[32px] font-semibold leading-[44px] text-[#2E2E2E] group-hover:text-[#FCDE94] transition-colors duration-300 break-words"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="flex-1 text-xl md:text-2xl leading-[33px] text-[#686868] group-hover:text-[rgba(252,222,148,0.75)] transition-colors duration-300"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
