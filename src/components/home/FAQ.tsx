"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI Gift Curator work?",
    answer:
      "Our Neural Engine analyzes the personality traits and interests you provide to map them against our global database of unique products, ensuring a 98% satisfaction match.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes! We ship to over 120 countries. Shipping times and costs vary depending on the destination and the specific artisan partner.",
  },
  {
    question: "Can I return a gift if the recipient doesn't like it?",
    answer:
      "Absolutely. We offer a 30-day 'No Questions Asked' return policy on all non-personalized items to ensure your peace of mind.",
  },
  {
    question: "Is my data secure with the AI Assistant?",
    answer:
      "We use enterprise-grade AES-256 encryption. Your personality descriptions are processed anonymously and are never sold to third parties.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#030712] border-t border-slate-200 dark:border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4">
            <HelpCircle size={20} />
            <span className="text-sm font-black uppercase tracking-widest">
              Support Center
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
            Common <span className="text-blue-600">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden transition-all"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="bg-blue-600 rounded-full p-1 text-white shrink-0">
                  {activeIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
