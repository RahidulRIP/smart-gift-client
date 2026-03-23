"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  {
    name: "Tech & Gadgets",
    count: "120+ Items",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
    accent: "from-blue-600/20"
  },
  {
    name: "Personalized",
    count: "85 Items",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-purple-600/20"
  },
  {
    name: "Home Decor",
    count: "200+ Items",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    className: "md:col-span-1 md:row-span-1",
    accent: "from-emerald-600/20"
  },
  {
    name: "Fashion",
    count: "150+ Items",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
    accent: "from-amber-600/20"
  },
];

const Categories = () => {
  return (
    <section className="pt-32 bg-white dark:bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-blue-600" size={18} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600">Explore Collections</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
              Shop by <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Vibe.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm font-medium leading-relaxed">
            AI-curated categories tailored to specific personality archetypes and gifting moods.
          </p>
        </div>

        {/* The New Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px]">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 70 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-white/5 ${cat.className}`}
            >
              <Link href={`/explore?category=${cat.name.toLowerCase()}`} className="block h-full w-full">
                {/* Image Layer with Zoom Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Overlay Gradient: Contextual color based on category */}
                  <div className={`absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 group-hover:bg-linear-to-br ${cat.accent} transition-all duration-500`} />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 backdrop-blur-md">
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                        {cat.count}
                      </p>
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter">
                      {cat.name}
                    </h3>
                    {/* Hover revealed line */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-700" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;