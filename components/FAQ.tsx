"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What types of properties does Grandis7 offer?",
    answer:
      "We list verified residential, commercial, and plot opportunities across selected locations.",
    isOpen: true,
  },
  {
    id: 2,
    question: "Is Grandis7 suitable for property investors?",
    answer:
      "Yes, Grandis7 is designed for both home buyers and property investors. We provide detailed information about investment potential, location benefits, and long-term value for all listed properties.",
    isOpen: false,
  },
  {
    id: 3,
    question: "Are the properties listed verified?",
    answer:
      "Yes, all properties listed on Grandis7 undergo a verification process to ensure authenticity, legal compliance, and accurate information before being displayed to our users.",
    isOpen: false,
  },
  {
    id: 4,
    question: "Which locations do you operate in?",
    answer:
      "Currently, we operate in key locations including Baner (Pune), Chennai, and Bangalore. We are continuously expanding to serve more areas.",
    isOpen: false,
  },
  {
    id: 5,
    question: "How soon will I receive a response after enquiry?",
    answer:
      "We aim to respond to all enquiries within 24 hours. Our team will get back to you with property details and answer any questions you may have.",
    isOpen: false,
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? 0 : id);
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[100px]">
        <div className="mb-12 text-center">
          <h3
            className="text-xl md:text-2xl font-light uppercase mb-4"
            style={{
              color: "#686868",
              letterSpacing: "0.4em",
              lineHeight: "33px",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <h2
            className="text-4xl md:text-[64px] font-semibold leading-tight md:leading-[87px]"
            style={{ color: "#2E2E2E" }}
          >
            All the A's to your Q's
          </h2>
        </div>

        <div className="max-w-[867px] mx-auto space-y-8">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-[10px] overflow-hidden transition-all"
                style={{
                  backgroundColor: isOpen ? "#FCDE94" : "#FFFFFF",
                  border: isOpen ? "2px solid #261702" : "1px solid #2E2E2E",
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left"
                >
                  <span
                    className="text-xl md:text-2xl leading-[33px]"
                    style={{
                      color: isOpen ? "#261702" : "#2E2E2E",
                    }}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className="w-3 h-5 flex-shrink-0 transition-transform"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
                    }}
                    fill={isOpen ? "#261702" : "#2E2E2E"}
                    viewBox="0 0 12 22"
                  >
                    <path d="M1 1L11 11L1 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p
                      className="text-lg md:text-xl leading-[27px]"
                      style={{ color: "#261702" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
