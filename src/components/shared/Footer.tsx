"use client";

import Link from "next/link";
import {
  Gift,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "All Gifts", href: "/explore" },
      { name: "Tech Gadgets", href: "/explore?category=tech" },
      { name: "Home Decor", href: "/explore?category=home" },
      { name: "Personalized Items", href: "/explore?category=personalized" },
    ],
    support: [
      { name: "About Our Vision", href: "/about" },
      { name: "Contact Support", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    account: [
      { name: "My Profile", href: "/profile" },
      { name: "Order History", href: "/orders" },
      { name: "User Dashboard", href: "/dashboard" },
      { name: "AI Gift Assistant", href: "/ai-finder" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand & About Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20">
                <Gift className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                 SmartGift
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Revolutionizing the way you give. Our AI-powered assistant helps
              you discover meaningful gifts tailored to your loved ones unique
              personalities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Categories */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">
              Gift Categories
            </h3>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Support */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-8">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Subscribe to get gift ideas, special offers, and AI updates
              directly to your inbox.
            </p>
            <form className="relative group mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <ShieldCheck size={14} className="text-green-500" />
              <span>100% Secure & Private</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-900 dark:text-white tracking-tight">
              SmartGift
            </span>
            . Crafted for better gifting.
          </p>

          <div className="flex items-center space-x-8">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <Mail size={16} className="mr-2 text-blue-600" />
              <span>hello@smartgift.com</span>
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={16} className="mr-2 text-blue-600" />
              <span>Dhaka, BD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
