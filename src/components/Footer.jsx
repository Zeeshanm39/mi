
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white px-6 md:px-20 py-10"
      style={{
        background: "linear-gradient(to right, #3b3d40, #b88a39)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold tracking-widest mb-4">
            Merveille Investments L.L.C
          </h2>
          <h3 className="font-semibold text-lg mb-2 text-white">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            {["About Us", "Services", "Careers", "Contact Us"].map((link, i) => (
              <li key={i} className="relative group w-max cursor-pointer">
                <span className="transition duration-300 group-hover:text-sky-950 group-hover:drop-[0_0_5px_white]">
                  {link}
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full" 
                style={{
        background: "linear-gradient(to right, #3b3d40, #b88a39)",
      }}/>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-white">Services</h3>
          <ul className="text-gray-300 space-y-2">
            {[
              "Retail Trade Enterprise & Development",
              "Energy Enterprise & Development",
              "Healthcare Enterprise & Development",
              "Oil & Natural Gas Projects",
              "Commercial Enterprise & Development",
            ].map((service, i) => (
              <li key={i} className="relative group w-max cursor-pointer">
                <span className="transition duration-300 group-hover:text-sky-950 group-hover:drop-[0_0_5px_white]">
                  {service}
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full"
                style={{
        background: "linear-gradient(to right, #3b3d40, #b88a39)",
      }} />
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-white">Contact Us</h3>
          <div className="text-gray-300">
            <p>
              <span className="font-semibold text-white">Phone</span> <br />
              +971 45127000
            </p>
            <p className="mt-2">
              <span className="font-semibold text-white">Email</span> <br />
              info@merveilleinvestments.com
            </p>
            <p className="mt-4 font-semibold text-white">Follow Us</p>
            <div className="flex space-x-4 mt-2 text-xl">
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-white">Address</h3>
          <h3 className="font-semibold text-lg mb-2 text-white">Head Office</h3>
          <p className="text-gray-300">
            2501, Marina Plaza, Dubai Marina, United Arab Emirates
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>© Copyright 2023. All rights reserved by Merveille Investments L.L.C</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          {["Privacy Policy", "Fraud Warning", "Terms of use"].map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative group w-max cursor-pointer"
            >
              <span className="transition duration-300 group-hover:text-sky-950 group-hover:drop-[0_0_5px_white]">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0  transition-all duration-300 group-hover:w-full"
              style={{
        background: "linear-gradient(to right, #b88a39,#3b3d40)",
      }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
