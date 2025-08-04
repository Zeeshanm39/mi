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
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "./ThemeToggle";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Who are we?", href: "/pages/whoweare" },
  { label: "Investments Services", href: "/investment-services" },
  { label: "For Investors", href: "/for-investors" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-2 px-4 backdrop-blur-lg border-b border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto relative lg:text-sm text-black dark:text-white">

        {/* Navbar Row */}
        <div className="flex items-center justify-between h-14 relative">

          {/* Left: Logo */}
          <div className="z-10">
            <Link to="/" className="flex items-center space-x-2">
              <img className="h-10 w-10" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">
                Merveille Investments <span className="text-sm">L.L.C</span>
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
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

          {/* Right: Contact & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4 z-10">
            <Link
              to="/contact"
              className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-10">
            <button
              onClick={toggleNavbar}
              className="text-black dark:text-white"
            >
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
            <Link
              to="/contact"
              onClick={toggleNavbar}
              className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
            >
              Contact Us
            </Link>
            <div>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
