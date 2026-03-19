"use client";

import { motion } from "framer-motion";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Tech Enthusiast",
    text: "The AI suggested a vintage-style mechanical keyboard for my husband. He was speechless! The accuracy of the personality mapping is insane.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Gifting Novice",
    text: "I always struggle with anniversaries. EchoGift's curator found a personalized star map that perfectly matched our wedding night. 10/10 experience.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Interior Designer",
    text: "The curation of home decor items is top-notch. It doesn't just show popular items; it shows meaningful ones. Highly recommend!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-32 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[12rem] font-black text-slate-50 dark:text-white/[0.02] select-none pointer-events-none">
        FEEDBACK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-4">
            Trusted by <span className="text-blue-600">Thousands.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            See how our Neural Curator has helped people find the perfect
            connection through thoughtful gifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-blue-500/50 transition-colors group"
            >
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-blue-600 text-blue-600"
                    />
                  ))}
                </div>

                <Quote
                  className="text-slate-200 dark:text-white/10 mb-4 group-hover:text-blue-500/20 transition-colors"
                  size={40}
                />

                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-600/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    {review.name}{" "}
                    <CheckCircle2 size={14} className="text-blue-600" />
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
