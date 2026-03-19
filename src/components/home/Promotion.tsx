"use client";

import { motion } from "framer-motion";
import Link from "next/image";
import { Zap, ArrowRight, Timer } from "lucide-react";

const Promotion = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-slate-900 dark:bg-blue-600 overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-2xl"
        >
          {/* Decorative Mesh Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          {/* Left: Content */}
          <div className="relative z-10 p-12 lg:p-20 lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest mb-8">
              <Zap size={14} className="text-yellow-400 fill-yellow-400" />
              Limited Time Intelligence
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-6">
              The Lunar <br />
              <span className="text-blue-400 dark:text-blue-200">Tech Collection.</span>
            </h2>
            
            <p className="text-lg text-slate-300 dark:text-blue-50 mb-10 max-w-md leading-relaxed">
              Our AI Curators have identified a 99.2% trending interest in Minimalist Noir Gadgets. Secure the exclusive drop before it's phased out.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-xl">
                Shop the Drop
              </button>
              
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center animate-pulse">
                   <Timer size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Ends in</p>
                  <p className="text-sm font-bold tracking-widest">24 : 00 : 00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Featured Product Visual */}
          <div className="relative lg:w-2/5 h-full min-h-[400px] flex items-center justify-center p-12 lg:p-0">
            {/* Glowing Aura behind image */}
            <div className="absolute w-64 h-64 bg-blue-400/30 rounded-full blur-[80px]" />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400" 
                alt="Promo Product" 
                className="w-72 h-72 object-cover rounded-[2.5rem] shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">
                  %
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">AI Discount</p>
                  <p className="text-lg font-black text-slate-900 leading-none">25% OFF</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Promotion;