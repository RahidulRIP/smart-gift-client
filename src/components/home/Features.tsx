"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, Zap, Globe, Sparkles, BrainCircuit } from "lucide-react";

const featureData = [
  {
    id: "01",
    title: "Neural Gift Analysis",
    description: "Our AI processes 100+ personality data points to find the exact emotional match.",
    icon: <Bot size={32} />,
    color: "blue",
  },
  {
    id: "02",
    title: "Instant Curation",
    description: "Proprietary algorithms deliver results in under 2 seconds for a seamless experience.",
    icon: <Zap size={32} />,
    color: "amber",
  },
  {
    id: "03",
    title: "Secure Payments",
    description: "Bank-grade encryption for every transaction. Safety is our top priority.",
    icon: <ShieldCheck size={32} />,
    color: "emerald",
  },
  {
    id: "04",
    title: "Global Sourcing",
    description: "Access to independent artisans and unique brands across 120+ countries.",
    icon: <Globe size={32} />,
    color: "indigo",
  },
];

const Features = () => {
  return (
    <section className="pt-32 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- DYNAMIC SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30"
          >
            <BrainCircuit size={16} className="text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Core Intelligence
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]"
          >
            Intelligence in Every <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 italic font-serif">
              Decision.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg font-medium leading-relaxed"
          >
            We've combined deep neural mapping with emotional logic to automate the art of perfect gifting. No more guesswork, just science.
          </motion.p>
        </div>
        {/* --- END HEADER --- */}

        {/* Feature List */}
        <div className="space-y-6">
          {featureData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center gap-10 p-10 md:p-16 rounded-[3rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Left Side: Number and Icon */}
              <div className="flex flex-col items-center gap-4 min-w-[100px]">
                <span className="text-6xl font-black text-slate-200 dark:text-white/10 group-hover:text-blue-600/20 transition-colors">
                  {item.id}
                </span>
                <div className={`p-5 rounded-3xl bg-white dark:bg-slate-800 shadow-xl text-${item.color}-500 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  {item.icon}
                </div>
              </div>

              {/* Middle Section: Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Reveal */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-blue-600/40"
              >
                <Sparkles size={24} />
              </motion.div>

              <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-${item.color}-500/5 rounded-full blur-[100px] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;