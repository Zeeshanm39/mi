import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-left relative lg:text-sm">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">
              Merveille Investments{" "}
              <span className="text-sm align-center">L.L.C</span>
            </span>
          </div>
          <ul className="hidden lg:flex ml-40 space-x-1 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center ml-auto ">
            <button
              href="#"
              className="hover:bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md"
            >
              Contact Us
            </button>
            <div className=" bg-white text-black dark:bg-gray-900 dark:text-white">
              <ThemeToggle />
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-left lg:hidden ">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-left space-x-6">
              <a
                href="#"
                className="py-2 px-3 rounded-md hover:bg-gradient-to-r from-yellow-500 to-yellow-800"
              >
                Contact Us
              </a>
            </div>
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

