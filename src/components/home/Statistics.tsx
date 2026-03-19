"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Gift, BrainCircuit, Globe, Sparkles } from "lucide-react";

// Counter Component logic remains same...
const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { id: 1, label: "Gifts Curated", value: "500K+", icon: <Gift className="text-blue-500" size={24} />, description: "Successful matches made by AI.", glow: "group-hover:bg-blue-500/10" },
  { id: 2, label: "Neural Data Points", value: "12M+", icon: <BrainCircuit className="text-purple-500" size={24} />, description: "Processed for personality mapping.", glow: "group-hover:bg-purple-500/10" },
  { id: 3, label: "Active Users", value: "80K+", icon: <Users className="text-indigo-500" size={24} />, description: "Trusting EchoGift every month.", glow: "group-hover:bg-indigo-500/10" },
  { id: 4, label: "Global Reach", value: "120+", icon: <Globe className="text-emerald-500" size={24} />, description: "Countries served with local logistics.", glow: "group-hover:bg-emerald-500/10" },
];

const Statistics = () => {
  return (
    <section className="pt-32 bg-white dark:bg-[#030712] border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- NEW HEADING SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 shadow-sm"
          >
            <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Our Impact in Numbers</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Thousands</span> Worldwide
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-xl text-sm md:text-base font-medium"
          >
            We combine high-speed neural processing with human emotion to redefine the way the world shares joy.
          </motion.p>
        </div>
        {/* --- END HEADING SECTION --- */}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 100 }}
              className="group relative p-8 rounded-[2rem] bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-3xl opacity-0 transition-opacity duration-500 ${stat.glow}`} />

              <div className="relative z-10 flex flex-col items-start space-y-5">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {stat.icon}
                </div>

                <div>
                  <h3 className="text-5xl font-black tracking-tighter text-slate-950 dark:text-white leading-none">
                    <Counter value={stat.value} />
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mt-2">
                    {stat.label}
                  </p>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;