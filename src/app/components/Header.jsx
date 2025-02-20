'use client';

import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import debounce from "lodash.debounce";
import { useAppContext } from "./AppContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, updateSearchTerm } = useAppContext();
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 29);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = useCallback(
    debounce((query) => {
      updateSearchTerm(query);
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`z-50 transition-colors duration-300 ${
        isScrolled ? "shadow-md fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      <div
        className={`flex h-8 w-full hidden bg-gradient-to-r from-pink-200 to-pink-300 px-8 py-1 text-sm text-gray-800 items-center justify-between ${
          isScrolled ? "hidden" : "transition duration-500"
        }`}
      >
        <span className="flex items-center gap-1">
          <FaEnvelope /> {user.email}
        </span>
        <span className="flex items-center gap-1">
          <FaPhoneAlt /> {user.mobile}
        </span>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-500">
            {user.brand}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Gallery", "Services", "Contact"].map((item) => (
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                key={item}
                className={`text-gray-700 hover:text-pink-500 border-b-2 ${
                  pathname === `/${item.toLowerCase()}` ||
                  (pathname === "/" && item === "Home")
                    ? "border-b-2 border-b-pink-400"
                    : "border-b-white"
                } transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div
              className="relative"
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => setShowSearch(false)}
            >
              <button className="text-gray-700 hover:text-pink-500 transition-colors">
                <Search size={20} />
              </button>
              {showSearch && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Search services..."
                  className="absolute right-0 top-0 border border-pink-500 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              )}
            </div>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4 space-y-4"
          >
            {["Home", "About", "Gallery", "Services", "Contact"].map((item) => (
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                key={item}
                className="block text-gray-700 hover:text-pink-500 transition-colors"
              >
                {item}
              </Link>
            ))}

            <div className="relative w-full">
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search services..."
                className="w-full border border-pink-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
