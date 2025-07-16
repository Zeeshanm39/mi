
// const LeadershipSection = () => {
//   return (
//     <section className="bg-white py-16 px-6">
//       <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#C39B4B] mb-10">
//         Leadership
//       </h2>

//       {/* Founder */}
//       <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
//         <div className="md:w-1/2 relative">
//           <div className="bg-[#C39B4B] w-full h-full absolute top-0 left-0 z-0 rounded-lg"></div>
//           <img
//             src="src/assets/founder.png" // Replace with actual image path
//             alt="Dr. Ahmed Mohamed Rashed"
//             className="relative z-10 mx-auto md:mx-0"
//           />
//         </div>
//         <div className="md:w-1/2">
//           <span className="text-[80px] text-[#D8B678] leading-none font-serif">“</span>
//           <h3 className="text-xl font-bold text-black">Dr. AHMED MOHAMED RASHED</h3>
//           <p className="text-sm text-black font-medium mb-2">Founder</p>
//           <p className="text-sm text-gray-700 mb-2">
//             Opportunities exist across every sector, and my goal has always been to turn them into
//             platforms for meaningful change.
//           </p>
//           <p className="text-sm text-gray-700 mb-2">
//             I believe in business that uplifts lives, empowers individuals, and strengthens
//             communities. At Merveille, we focus on creating long-term value that benefits both
//             people and society.
//           </p>
//           <p className="text-sm text-gray-700 italic">
//             As the saying goes, “Allah does not waste the reward of the best work.”
//           </p>
//         </div>
//       </div>

//       {/* CEO */}
//       <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
//         <div className="md:w-1/2 relative">
//           <div className="bg-[#0F1B35] w-full h-full absolute top-0 right-0 z-0 rounded-lg"></div>
//           <img
//             src="src/assets/ceo.png" // Replace with actual image path
//             alt="Dr. Syed Touseef Ahmed"
//             className="relative z-10 mx-auto md:mx-0"
//           />
//         </div>
//         <div className="md:w-1/2">
//           <span className="text-[80px] text-[#939DAE] leading-none font-serif">“</span>
//           <h3 className="text-xl font-bold text-black">Dr. SYED TOUSEEF AHMED</h3>
//           <p className="text-sm text-black font-medium mb-2">Co-Founder/CEO</p>
//           <p className="text-sm text-[#1D3F72] mb-2">
//             At Merveille, we lead with purpose, combining innovation, ethics, and impact.
//           </p>
//           <p className="text-sm text-gray-700 mb-2">
//             With over 16 years of experience in finance and humanitarian development, I’ve seen how
//             business can uplift lives when guided by the right values. As a Chartered Accountant,
//             LLM graduate, and Ph.D. in Humanitarian Science, I believe that small, meaningful actions
//             can create real change.
//           </p>
//           <p className="text-sm text-gray-700 italic">
//             Our commitment to social responsibility is at the heart of everything we do; because
//             true success is shared.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadershipSection;
import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      {/* Section Heading */}
      {/* <h2 className="text-center text-3xl font-semibold text-[#C39B4B] mb-16">Leadership</h2> */}

        <div className="flex items-center justify-center my-8">
      {/* Left line */}
      <div className="flex-grow h-px bg-gray-300" />

      {/* Center text */}
      <h2 className="mx-4 text-xl font-semibold text-[#C29351]">Leadership</h2>

      {/* Right line */}
      <div className="flex-grow h-px bg-gray-300" />
    </div>
      {/* Founder Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-24 relative">
        {/* Image Block with Background */}
        <div className="md:w-1/2 relative">
          <div className="bg-[#C39B4B] w-[90%] h-[85%] absolute left-0 top-1/2 -translate-y-1/2 rounded-md z-0" />
          <img
            src="src/assets/founder.png" // Replace with actual image path
            alt="Dr. Ahmed Mohamed Rashed"
            className="relative z-10 w-full max-w-sm mx-auto"
          />
        </div>

        {/* Text Block */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12 relative z-10">
          <p className="text-[70px] text-[#D8B678] leading-none font-serif mb-4">“</p>
          <h3 className="text-xl font-bold text-black">Dr. AHMED MOHAMED RASHED</h3>
          <p className="text-sm text-black font-medium mb-3">Founder</p>
          <p className="text-sm text-gray-800 mb-3">
            Opportunities exist across every sector, and my goal has always been to turn them into platforms
            for meaningful change.
          </p>
          <p className="text-sm text-gray-800 mb-3">
            I believe in business that uplifts lives, empowers individuals, and strengthens communities.
            At Merveille, we focus on creating long-term value that benefits both people and society.
          </p>
          <p className="text-sm text-gray-800 italic">
            As the saying goes, “Allah does not waste the reward of the best work.”
          </p>
        </div>
      </div>

      {/* Co-Founder / CEO Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start relative">
        {/* Image Block with Background */}
        <div className="md:w-1/2 md:order-2 relative">
          <div className="bg-[#0F1B35] w-[90%] h-[85%] absolute right-0 top-1/2 -translate-y-1/2 rounded-md z-0" />
          <img
            src="src/assets/ceo.png" // Replace with actual image path
            alt="Dr. Syed Touseef Ahmed"
            className="relative z-10 w-full max-w-sm mx-auto"
          />
        </div>

        {/* Text Block */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pr-12 md:order-1 relative z-10">
          <p className="text-[70px] text-[#939DAE] leading-none font-serif mb-4">“</p>
          <h3 className="text-xl font-bold text-black">Dr. SYED TOUSEEF AHMED</h3>
          <p className="text-sm text-black font-medium mb-3">Co-Founder/CEO</p>
          <p className="text-sm text-[#1D3F72] mb-3">
            At Merveille, we lead with purpose, combining innovation, ethics, and impact.
          </p>
          <p className="text-sm text-gray-800 mb-3">
            With over 16 years of experience in finance and humanitarian development, I’ve seen how
            business can uplift lives when guided by the right values. As a Chartered Accountant,
            LLM graduate, and Ph.D. in Humanitarian Science, I believe that small, meaningful
            actions can create real change.
          </p>
          <p className="text-sm text-gray-800 italic">
            Our commitment to social responsibility is at the heart of everything we do; because
            true success is shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
