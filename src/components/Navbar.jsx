// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import { navItems } from "../constants";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-700/80">
      // <div className="container px-4 mx-left relative lg:text-sm">
      //   <div className="flex justify-center items-center">
      //     <div className="flex items-center flex-shrink-0">
//             <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
//             <span className="text-xl tracking-tight">
//               Merveille Investments{" "}
//               <span className="text-sm align-center">L.L.C</span>
//             </span>
//           </div>
//           <ul className="hidden lg:flex ml-40 space-x-1 ">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a
//                   href={item.href}
//                   className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <div className="hidden lg:flex justify-center space-x-4 items-center ml-auto ">
//             <button
//               href="#"
//               className="hover:bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md"
//             >
//               Contact Us
//             </button>
//             <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
//               <ThemeToggle />
//             </div>
//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-left lg:hidden ">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a
//                     href={item.href}
//                     className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-left space-x-6">
//               <a
//                 href="#"
//                 className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//               >
//                 Contact Us
//               </a>
//             </div>
//             <div>
//               <ThemeToggle />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import ThemeToggle from "./ThemeToggle";
// import { Link, NavLink } from "react-router-dom";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Who are we?", href: "/pages/whoweare" },
//   { label: "Investments Services", href: "/investment-services" },
//   { label: "For Investors", href: "/for-investors" },
//   { label: "Careers", href: "/careers" },
// ];

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
//       <div className="container px-4 mx-left relative lg:text-sm text-black dark:text-white">
//            <div className="flex justify-center items-center">
//           <div className="flex items-center flex-shrink-0"></div>
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
//             <span className="text-xl tracking-tight">
//               Merveille Investments <span className="text-sm">L.L.C</span>
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <ul className="hidden lg:flex ml-16 space-x-1">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={item.href}
//                   className={({ isActive }) =>
//                     `py-2 px-3 rounded-md transition-colors duration-300 ${
//                       isActive
//                         ? "bg-gradient-to-r from-yellow-500 to-yellow-800 text-white"
//                         : "hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Contact and Theme Toggle */}
//           <div className="hidden lg:flex justify-center space-x-4 items-center ml-auto">
//             <Link
//               to="/contact"
//               className="hover:bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md transition-colors duration-300"
//             >
//               Contact Us
//             </Link>
//             <ThemeToggle />
//           </div>

//           {/* Mobile Toggle */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-black dark:text-white"
//             >
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Drawer */}
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 top-0 z-40 w-full p-12 flex flex-col items-start bg-white dark:bg-neutral-900 text-black dark:text-white lg:hidden">
//             <ul className="w-full">
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-3 w-full">
//                   <Link
//                     to={item.href}
//                     onClick={toggleNavbar}
//                     className="block w-full py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               to="/contact"
//               onClick={toggleNavbar}
//               className="mt-4 py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//             >
//               Contact Us
//             </Link>
//             <div className="mt-4">
//               <ThemeToggle />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logo from "../assets/logo.png";
// import ThemeToggle from "./ThemeToggle";
// import { Link, NavLink } from "react-router-dom";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Who are we?", href: "/pages/whoweare" },
//   { label: "Investments Services", href: "/investment-services" },
//   { label: "For Investors", href: "/for-investors" },
//   { label: "Careers", href: "/careers" },
// ];

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-2 px-4 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
//       <div className="max-w-7xl  mx-left  relative lg:text-sm text-black dark:text-white">
        
//         {/* Navbar container */}
//         <div className="flex items-center justify-between h-10">

//           {/* Left: Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img className="h-10 w-10" src={logo} alt="Logo" />
//             <span className="text-xl tracking-tight">
//               Merveille Investments <span className="text-sm">L.L.C</span>
//             </span>
//           </Link>

//           {/* Right: Navigation, Contact, Theme Toggle */}
//           <div className="hidden lg:flex items-center space-x-4 ml-auto">
//             {/* Nav Links */}
//             <ul className="flex items-center space-x-2">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={item.href}
//                     className={({ isActive }) =>
//                       `py-2 px-3 rounded-md transition-colors duration-300 ${
//                         isActive
//                           ? "bg-gradient-to-r from-yellow-500 to-yellow-800 text-white"
//                           : "hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                       }`
//                     }
//                   >
//                     {item.label}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {/* Contact Button */}
//             <Link
//               to="/contact"
//               className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>

//             {/* Theme Toggle */}
//             <ThemeToggle />
//           </div>

//           {/* Mobile Toggle */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-black dark:text-white"
//             >
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Drawer */}
//         {mobileDrawerOpen && (
//           <div className="fixed top-0 right-0 z-40 w-full p-8 bg-white dark:bg-neutral-900 text-black dark:text-white flex flex-col space-y-4 lg:hidden">
//             <ul className="w-full space-y-4">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.href}
//                     onClick={toggleNavbar}
//                     className="block py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               to="/contact"
//               onClick={toggleNavbar}
//               className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//             >
//               Contact Us
//             </Link>
//             <div>
//               <ThemeToggle />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import { Menu, X } from "lucide-react";
// import { useEffect, useState, useRef } from "react";
// import logo from "../assets/logo.png";
// import ThemeToggle from "./ThemeToggle";
// import { Link, NavLink } from "react-router-dom";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Who are we?", href: "/pages/whoweare" },
//   { label: "Investments Services", href: "/investment-services" },
//   { label: "For Investors", href: "/for-investors" },
//   { label: "Careers", href: "/careers" },
// ];

// // Language options with flags (emoji used for simplicity)
// const languages = [
//   { code: "en", name: "English", flag: "🇺🇸" },
//   { code: "fr", name: "Français", flag: "🇫🇷" },
//   { code: "es", name: "Español", flag: "🇪🇸" },
//   { code: "de", name: "Deutsch", flag: "🇩🇪" },
//   { code: "it", name: "Italiano", flag: "🇮🇹" },
//   { code: "ar", name: "العربية", flag: "🇸🇦" },
//   { code: "zh-CN", name: "中文", flag: "🇨🇳" },
//   { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
//   { code: "ru", name: "Русский", flag: "🇷🇺" },
//   { code: "ja", name: "日本語", flag: "🇯🇵" },
// ];

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [langDropdownOpen, setLangDropdownOpen] = useState(false);
//   const [currentLang, setCurrentLang] = useState("en");
//   const langDropdownRef = useRef(null);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   // Close language dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         langDropdownRef.current &&
//         !langDropdownRef.current.contains(event.target)
//       ) {
//         setLangDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Load Google Translate widget
//   useEffect(() => {
//     const addScript = document.createElement("script");
//     addScript.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     addScript.async = true;
//     document.body.appendChild(addScript);

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: languages.map((l) => l.code).join(","),
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   // Trigger Google Translate change
//   const changeLanguage = (langCode) => {
//     const select = document.querySelector("#google_translate_element select");
//     if (!select) return;

//     // Google Translate select uses language codes like "en", "fr", but sometimes with prefix "en" or "en|fr"
//     // We will just set value and trigger change event
//     select.value = langCode;

//     // Trigger change event on select
//     select.dispatchEvent(new Event("change"));

//     setCurrentLang(langCode);
//     setLangDropdownOpen(false);
//   };

//   const currentLanguageData = languages.find((l) => l.code === currentLang);

//   return (
//     <nav className="sticky top-0 z-50 py-2 px-4 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
//       <div className="max-w-7xl mx-auto relative lg:text-sm text-black dark:text-white">
//         <div className="flex items-center justify-between h-14 relative">
//           {/* Left: Logo */}
//           <div className="z-10">
//             <Link to="/" className="flex items-center space-x-2">
//               <img className="h-10 w-10" src={logo} alt="Logo" />
//               <span className="text-xl tracking-tight">
//                 Merveille Investments <span className="text-sm">L.L.C</span>
//               </span>
//             </Link>
//           </div>

//           {/* Center: Navigation Links */}
//           <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-2 z-0">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <NavLink
//                   to={item.href}
//                   className={({ isActive }) =>
//                     `py-2 px-3 rounded-md transition-colors duration-300 ${
//                       isActive
//                         ? "bg-gradient-to-r from-yellow-500 to-yellow-800 text-white"
//                         : "hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                     }`
//                   }
//                 >
//                   {item.label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>

//           {/* Right: Contact, Translate, Theme */}
//           <div className="hidden lg:flex items-center space-x-4 z-10">
//             <Link
//               to="/contact"
//               className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800 transition-colors duration-300"
//             >
//               Contact Us
//             </Link>

//             {/* Custom Language Selector */}
//             <div
//               className="relative"
//               ref={langDropdownRef}
//               tabIndex={0}
//               aria-label="Select Language"
//             >
//               <button
//                 onClick={() => setLangDropdownOpen(!langDropdownOpen)}
//                 className="flex items-center space-x-1 border border-gray-300 dark:border-neutral-600 rounded-md px-3 py-1 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
//               >
//                 <span>{currentLanguageData?.flag}</span>
//                 <span className="text-sm">{currentLanguageData?.name}</span>
//                 <svg
//                   className={`w-4 h-4 ml-1 transition-transform ${
//                     langDropdownOpen ? "rotate-180" : ""
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </button>

//               {/* Dropdown Menu */}
//               {langDropdownOpen && (
//                 <ul className="absolute right-0 mt-1 w-40 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg overflow-hidden z-50">
//                   {languages.map(({ code, name, flag }) => (
//                     <li
//                       key={code}
//                       onClick={() => changeLanguage(code)}
//                       className={`cursor-pointer flex items-center space-x-2 px-3 py-2 hover:bg-yellow-500 hover:text-white ${
//                         code === currentLang ? "bg-yellow-500 text-white" : ""
//                       }`}
//                     >
//                       <span>{flag}</span>
//                       <span className="text-sm">{name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Invisible Google Translate widget */}
//             <div
//               id="google_translate_element"
//               className="hidden"
//               aria-hidden="true"
//             />

//             <ThemeToggle />
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden z-10">
//             <button onClick={toggleNavbar} className="text-black dark:text-white">
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Drawer */}
//         {mobileDrawerOpen && (
//           <div className="fixed top-0 right-0 z-40 w-full p-8 bg-white dark:bg-neutral-900 text-black dark:text-white flex flex-col space-y-4 lg:hidden">
//             <ul className="w-full space-y-4">
//               {navItems.map((item, index) => (
//                 <li key={index}>
//                   <Link
//                     to={item.href}
//                     onClick={toggleNavbar}
//                     className="block py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               to="/contact"
//               onClick={toggleNavbar}
//               className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
//             >
//               Contact Us
//             </Link>

//             {/* You could add similar language selector for mobile here if needed */}

//             <div>
//               <ThemeToggle />
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






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
