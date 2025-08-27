import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What programs does your pilot training include?",
    answer:
      "We offer a full range of pilot training programs including , cadet pilot training, CPL, ATPL, simulator training, and type ratings for various aircraft.",
  },
  {
    question: "Is your training DGCA approved?",
    answer:
      "Yes, all our training modules are fully compliant with DGCA norms and international aviation standards.",
  },
  {
    question: "Do you provide job placement assistance after training?",
    answer:
      "Absolutely! We offer career counseling, mock interviews, and placement assistance with top aviation companies.",
  },
  {
    question: "Can international students apply for training?",
    answer:
      "Yes, we welcome students from all over the world and provide visa and accommodation assistance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-400 rounded-xl overflow-hidden bg-primary text-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-lg sm:text-xl font-medium focus:outline-none transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              <div
                className={`px-6 pb-4 text-sm sm:text-base transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
