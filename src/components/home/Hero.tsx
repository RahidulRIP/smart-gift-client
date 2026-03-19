"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion"; // Variants ইম্পোর্ট করা হয়েছে
import Link from "next/link";
import {
  BotMessageSquare,
  Sparkles,
  Gift,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Variants টাইপ ডিফাইন করা হয়েছে
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const, // as const ব্যবহার করে টাইপ লক করা হয়েছে
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative  w-full flex items-center overflow-hidden pt-10">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Animated Background Decor */}
     

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 mb-6"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Next-Gen Personalization
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
          >
            Gifts picked by <br />
            <span className="relative inline-block">
              <span className="relative z-10 italic font-serif text-blue-600">
                Intelligence.
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-blue-200/50 dark:bg-blue-900/30 -z-10"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
          >
            {`We’ve replaced "I hope they like it" with "I know they will love it." Our neural engine maps personality traits to the world's most unique products.`}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/start"
              className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Get Started
              <BotMessageSquare
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
            </Link>
            <Link
              href="/how-it-works"
              className="group flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
            >
              How it works
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Composition / Bento Style */}
        <motion.div
          style={{ y: y1, opacity }}
          className="hidden lg:grid grid-cols-2 gap-4 h-125 relative" // h-125 কে h-[500px] করা হয়েছে (Tailwind standard)
        >
          <div className="space-y-4 pt-12">
            <div className="h-64 rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 p-6 text-white flex flex-col justify-end shadow-2xl shadow-blue-500/20">
              <BrainCircuit size={40} className="mb-4 opacity-50" />
              <h3 className="font-bold text-xl">Cognitive Mapping</h3>
              <p className="text-sm opacity-80 uppercase tracking-tighter">
                Analysis in progress...
              </p>
            </div>
            <div className="h-40 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Gift size={16} className="text-green-600" />
                </div>
                <span className="font-bold dark:text-white text-sm">
                  98% Match
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-green-500"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-40 rounded-3xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
            <div className="h-72 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center p-8 text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Sparkles className="text-blue-600" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full blur-sm"
                />
              </div>
              <p className="font-medium text-slate-800 dark:text-slate-200 italic">
                The perfect find.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
