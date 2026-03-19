"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingCart, Heart } from "lucide-react";

// Demo Data (No Dummy Text - Real Product Context)
const products = [
  {
    id: 1,
    name: "Aura Smart Ambient Lamp",
    price: 89.99,
    rating: 4.8,
    category: "Home Tech",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
    description: "Syncs with music and mood via mobile app. Perfect for modern living spaces."
  },
  {
    id: 2,
    name: "Classic Leather Voyager Journal",
    price: 45.00,
    rating: 4.9,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1512418490979-92798ccc13a0?auto=format&fit=crop&q=80&w=500",
    description: "Hand-stitched premium Italian leather. Includes a refillable acid-free paper set."
  },
  {
    id: 3,
    name: "Zenith Noise-Cancelling Buds",
    price: 129.99,
    rating: 4.7,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=500",
    description: "30-hour battery life with neural noise suppression for crystal clear audio."
  },
  {
    id: 4,
    name: "Minimalist Ceramic Tea Set",
    price: 65.00,
    rating: 5.0,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=500",
    description: "Handcrafted matte finish ceramic. Includes four cups and a bamboo tray."
  }
];

const ProductGrid = () => {
  return (
    <section className="pt-32 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
              Curated <span className="text-blue-600">Collections.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Discover hand-picked gifts recommended for you.</p>
          </div>
          <button className="text-blue-600 font-bold hover:underline flex items-center gap-2 transition-all">
            View All Products <ShoppingCart size={18} />
          </button>
        </div>

        {/* Product Grid - 4 per row on Desktop as per requirement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -8 }}
              className="flex flex-col h-[480px] w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-slate-900 dark:text-white hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  {product.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{product.rating}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-grow">
                  {product.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5">
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    ${product.price}
                  </span>
                  <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;