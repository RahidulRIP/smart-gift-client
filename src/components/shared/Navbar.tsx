"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Gift,
  ChevronDown,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // এটি পরে Auth দিয়ে রিপ্লেস করবেন

  // স্ক্রল করলে শ্যাডো অ্যাড করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isLoggedIn
    ? [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/explore" },
        { name: "AI Gift Finder", href: "/ai-finder" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "My Orders", href: "/orders" },
        { name: "Contact", href: "/contact" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Explore", href: "/explore" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
      ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Gift className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
              SmartGift
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Profile Dropdown (Logged In) */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-1.5 pr-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <User size={20} />
                  </div>
                  <ChevronDown size={16} className="text-slate-500" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <Link
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700"
                  >
                    <User size={16} className="mr-2" /> Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700"
                  >
                    <Settings size={16} className="mr-2" /> Settings
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700"
                  >
                    <LayoutDashboard size={16} className="mr-2" /> Dashboard
                  </Link>
                  <hr className="my-1 border-slate-100 dark:border-slate-700" />
                  <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                    <LogOut size={16} className="mr-2" /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-200 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!isLoggedIn && (
              <Link
                href="/login"
                className="block w-full text-center bg-blue-600 text-white px-3 py-4 rounded-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
