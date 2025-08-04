import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router-dom";

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Who are we?", href: "/pages/whoweare" },
  { label: "Investments Services", href: "/investment-services" },
  { label: "For Investors", href: "/for-investors" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleLangDropdown = () => {
    setIsLangOpen((prev) => !prev);
  };

  const setLanguage = (langCode) => {
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
    setIsLangOpen(false);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-2 px-4 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto relative lg:text-sm text-black dark:text-white">

        {/* Hidden Google Translate */}
        <div id="google_translate_element" style={{ display: "none" }} />

        {/* Navbar Row */}
        <div className="flex items-center justify-between h-14 relative">

          {/* Logo */}
          <div className="z-10">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-10 w-10" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">
                Merveille Investments <span className="text-sm">L.L.C</span>
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-2 z-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-500 to-yellow-800 text-white"
                        : "hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            {/* Contact */}
            <Link
              to="/contact"
              className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800 transition-colors duration-300"
            >
              Contact Us
            </Link>

            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={toggleLangDropdown}
                className="py-2 px-3 flex items-center space-x-1 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800 transition-colors duration-300"
              >
                <span >🌐 Language</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <ul className="absolute top-full mt-2 left-0 bg-white dark:bg-neutral-800 shadow-md rounded-md z-50 w-44 border border-neutral-300 dark:border-neutral-700">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="px-3 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white flex items-center space-x-2 transition"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden z-10">
            <button onClick={toggleNavbar} className="text-black dark:text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-40 w-full p-8 bg-white dark:bg-neutral-900 text-black dark:text-white flex flex-col space-y-4 lg:hidden">
            <ul className="w-full space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    onClick={toggleNavbar}
                    className="block py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={toggleNavbar}
              className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
            >
              Contact Us
            </Link>

            {/* Language Selector (mobile) */}
            <div className="flex flex-col space-y-2 pt-4">
              <span className="font-semibold">Language</span>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    toggleNavbar();
                  }}
                  className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-yellow-500 hover:text-white transition"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>

            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
