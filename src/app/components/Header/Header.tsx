"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { X, MenuIcon } from "lucide-react";
import Navigation from "./_components/mobile-menu";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  // Use state to handle dropdown open/close
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme(); // Get current theme and function to set the theme
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Ref to store the mobile menu div
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to toggle the theme
  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMobileMenu]);

  return (
    <header className="cgk3d cs8sl clzfl">
      <div className="czd2q c92f3 cmhb9 c1plj relative">
        <div className="ctiy6 cxdxt cnc7y cevvc">
          {/* Site branding */}
          <div className="c2npy cbbvf">
            <a className="block" href="index.html" aria-label="Cruip">
              <svg
                className="csz25 cchtt"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_a"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#7F9CF5" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="26%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    id="logo_b"
                  >
                    <stop stopColor="#3ABAB4" offset="0%" />
                    <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
                  fill="url(#logo_a)"
                />
                <path
                  d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
                  fill="url(#logo_b)"
                />
              </svg>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="ci5ce cqxxm cfrwd">
            {/* Desktop menu links */}
            <ul className="cxdxt cf4hw cxu0t cnc7y c2h4q">
              <li>
                <Link
                  className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                  href="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
              {/* 1st level: hover */}
              <li
                className="czjaw"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <a
                  className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                  href="#0"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={(e) => e.preventDefault()}
                >
                  Resources
                  <svg
                    className="cx9o7 cn4vl c4u31 c2npy cqc4s c39kt cwc3u"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z"></path>
                  </svg>
                </a>
                {/* 2nd level: hover */}
                <ul
                  className="cj3dx cltap cvbap cgk3d cif5c c6zr7 ceg5n cp8ye c3x8w cvvwb ci4w1"
                  style={{ display: open ? "block" : "none" }}
                >
                  <li>
                    <Link
                      className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                      href="/help"
                    >
                      Help center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 c35ee c9pff cf26p cxdxt clq5w ccb29 ceo83 cnc7y cjrai ci4w1"
                      href="/404"
                    >
                      404
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Desktop lights switch */}
            <div className="form-switch cw3my c54sb cahr4 cnc7y transition-colors duration-300 ease-in-out">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-desktop"
                className="light-switch cft5d"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <label className="czjaw" htmlFor="light-switch-desktop">
                <span
                  className="cww77 c1cr6 clgvu chf91 c8mz9 czjaw chb9f ctlyr"
                  aria-hidden="true"
                ></span>
                <svg
                  className="cgk3d c2ysc"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    className="text-white c4u31"
                    fillRule="nonzero"
                    opacity=".88"
                  >
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"></path>
                    <circle cx="32" cy="12" r="3"></circle>
                    <circle fillOpacity=".4" cx="12" cy="12" r="6"></circle>
                    <circle fillOpacity=".88" cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
                <span className="cft5d">Switch to light / dark version</span>
              </label>
            </div>

            {/* Desktop CTA on the right */}
            <ul className="cxdxt c138q cxu0t cnc7y">
              <li>
                <Link
                  className="text-white bg-teal-500 cvy08 c9xc1 cbev1"
                  href="/contact"
                >
                  Request code
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="czak8 ce20z">
            {/* Mobile lights switch */}
            <div className="form-switch cw3my c54sb ccond cnc7y">
              <input
                type="checkbox"
                name="light-switch"
                id="light-switch-mobile"
                className="light-switch cft5d"
                checked={theme === "dark"}
                onChange={toggleTheme} // Toggle theme on change
              />
              <label className="czjaw" htmlFor="light-switch-mobile">
                <span
                  className="cww77 c1cr6 clgvu chf91 c8mz9 czjaw chb9f ctlyr"
                  aria-hidden="true"
                ></span>
                <svg
                  className="cgk3d c2ysc"
                  width="44"
                  height="24"
                  viewBox="0 0 44 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    className="text-white c4u31"
                    fillRule="nonzero"
                    opacity=".88"
                  >
                    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"></path>
                    <circle cx="32" cy="12" r="3"></circle>
                    <circle fillOpacity=".4" cx="12" cy="12" r="6"></circle>
                    <circle fillOpacity=".88" cx="12" cy="12" r="3"></circle>
                  </g>
                </svg>
                <span className="cft5d">Switch to light / dark version</span>
              </label>
            </div>

            {/* Hamburger button */}
            <button
              className="ce3b3"
              aria-controls="mobile-nav"
              aria-expanded="false"
              onClick={handleToggleMobileMenu}
            >
              <span className="cft5d">Menu</span>
              <div className="perspective-1000">
                <motion.div
                  initial={{ rotateX: 0 }} // Initial state of rotation
                  animate={{ rotateX: showMobileMenu ? 180 : 0 }}
                  className="preserve-3d transform transition-transform duration-300 ease-in-out"
                >
                  {showMobileMenu ? (
                    <X className="h-8 w-8 dark:text-white text-black" />
                  ) : (
                    <MenuIcon className="h-8 w-8 dark:text-white text-black" />
                  )}
                </motion.div>
              </div>
            </button>
          </div>
        </div>
        <div
          ref={mobileMenuRef}
          className={`cdmud ceikc cxcxv cvbap cxslo c2k38 c6zr7 cp8ye cy740 cs8sl cvtns cti3h cg6td ${
            showMobileMenu ? "block" : "hidden"
          }`}
        >
          <div className="c1t6c cb7tb chur8">
            <Navigation isOpen={showMobileMenu} setIsOpen={setShowMobileMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
