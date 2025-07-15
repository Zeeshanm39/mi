// import { resourcesLinks, platformLinks, communityLinks } from "../constants";
// const Footer = () => {
//   return (
//     <footer className="mt-20 border-t py-10 border-neutral-700">
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//         <div>
//           <h3 className="text-md font-semibold mb-4">Resources</h3>
//           <ul className="space-y-2">
//             {resourcesLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Platform</h3>
//           <ul className="space-y-2">
//             {platformLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-md font-semibold mb-4">Community</h3>
//           <ul className="space-y-2">
//             {communityLinks.map((link, index) => (
//               <li key={index}>
//                 <a
//                   href={link.href}
//                   className="text-neutral-300 hover:text-white"
//                 >
//                   {link.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  integrity="sha512-dNrP+vB8YfH8t3IDb5iKeL+GpI+dZtV2D+uCqQ4TqJbkbiIpUJK5K+XX+zUOrAf9c1CM5QOQyflMJemK1OimzQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
const Footer = () => {
  return (
    <footer
      className="text-white py-10 px-6"
      style={{
        background: "linear-gradient(to right, #3b3d40, #b88a39)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <img
            src="/src/assets/logo.png"
            alt="Merveille Logo"
            className="mb-4"
          />
          <p className="text-sm font-semibold">UAE | UK | USA</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Career</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Retail Trade Enterprise & Development</li>
            <li>Energy Enterprise & Development</li>
            <li>Healthcare Enterprise & Development</li>
            <li>Oil & Natural Gas Projects</li>
            <li>Commercial Enterprise & Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Get in touch</h3>
          <p className="text-sm flex items-start mb-2">
  <span className="mr-2 mt-1 text-lg text-[#d4a840]">
    <i className="fas fa-map-marker-alt"></i>
  </span>
  <span className="">
    Merveille Investments LLC
    <br />
   {/* 📍2501, Marina Plaza, Dubai Marina, UAE */}
  2501, Marina Plaza, Dubai Marina, UAE
  </span>
</p>
          <p className="text-sm flex items-center mb-2">
            <span className="mr-2">📧</span> info@merveilleinvestments.com
          </p>
          <p className="text-sm flex items-center mb-4">
            <span className="mr-2">📞</span> +971 4 512 7000
          </p>
          <div className="flex space-x-4 text-[#d4a840] text-xl">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
