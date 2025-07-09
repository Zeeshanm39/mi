// // const HeroSection = () => {
// //   return (
// //     <div className="flex flex-col items-center mt-6 lg:mt-20 bg-cover bg-no-repeat"
// //     style={{
// //       backgroundImage: `./src/assets/group-people-working-office.jpg`,}}>

// //       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
// //         Making the world A better Place
// //         <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
// //           {" "}
// //           to live in.
// //         </span>
// //       </h1>
// //       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
// //         Empower your creativity and bring your VR app ideas to life with our
// //         intuitive development tools. Get started today and turn your imagination
// //         into immersive reality!
// //       </p>
// //       {/* <div className="flex justify-center my-10">
// //         <a
// //           href="#"
// //           className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-3 px-4 mx-3 rounded-md"
// //         >
// //           Start for free
// //         </a>
// //         <a href="#" className="py-3 px-4 mx-3 rounded-md border">
// //           Documentation
// //         </a>
// //       </div> */}
// //       {/* <div className="flex mt-10 justify-center">
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           className="rounded-lg w-1/2 border border-yellow-700 shadow-sm shadow-yellow-400 mx-2 my-4"
// //         >
// //           <source src={video1} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           className="rounded-lg w-1/2 border border-yellow-700 shadow-sm shadow-yellow-400 mx-2 my-4"
// //         >
// //           <source src={video2} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //      </div> */}
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import heroImage from "../assets/group-people-working-office.jpg";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-left text-white"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       {/* Content */}
//       <div className="relative z-10 text-left max-w-4xl px-14">
//         <h1 className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text text-3xl sm:text-5xl lg:text-6xl font-regular leading-tight">
//           Inside Merveille:
//           <br />
//           <span className="text-white">How We Think</span>
//           <br />
//           <span className="text-white">How We Work</span>
//         </h1>
//         <div className="mt-8 flex justify-center space-x-6 text-sm sm:text-base">
//           <span className="border-r border-white pr-6">Strong values</span>
//           <span className="border-r border-white pr-6">Ethical leadership</span>
//           <span>Strategic innovation</span>
//         </div>

//         {/* Optional: Slider Dots */}
//         <div className="mt-10 flex justify-center space-x-2">
//           <span className="h-2 w-2 rounded-full bg-white opacity-70"></span>
//           <span className="h-2 w-2 rounded-full bg-white opacity-30"></span>
//           <span className="h-2 w-2 rounded-full bg-white opacity-30"></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import heroImage from "../assets/group-people-working-office.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-14">
        <h1 className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text text-3xl sm:text-5xl lg:text-6xl font-regular leading-tight">
          Inside Merveille:
          <br />
          <span className="text-white">How We Think</span>
          <br />
          <span className="text-white">How We Work</span>
        </h1>

        <div className="mt-8 flex justify-center space-x-6 text-sm sm:text-base">
          <span className="border-r border-white pr-6">Strong values</span>
          <span className="border-r border-white pr-6">Ethical leadership</span>
          <span>Strategic innovation</span>
        </div>
      </div>

      {/* Slider Dots (Centered absolutely) */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <div className="flex space-x-2">
          <span className="h-2 w-2 rounded-full bg-white opacity-70"></span>
          <span className="h-2 w-2 rounded-full bg-white opacity-30"></span>
          <span className="h-2 w-2 rounded-full bg-white opacity-30"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
