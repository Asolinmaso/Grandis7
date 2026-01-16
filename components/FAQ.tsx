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
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h3 className="text-sm md:text-base font-semibold text-gray-400 uppercase tracking-wider mb-2">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            All the A's to your Q's
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-lg overflow-hidden transition-all ${
                  isOpen
                    ? "bg-[#FCDE94]"
                    : "bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span
                    className={`font-medium text-lg ${
                      isOpen ? "text-black" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-black" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-black">{faq.answer}</p>
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
