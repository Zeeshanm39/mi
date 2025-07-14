const ValuesSection = () => {
  return (
    <section className="bg-cover py-20 px-4"
    style={{
      backgroundImage: `url('src/assets/BG_Design-01.png')`,
      backgroundColor: "white",
      BACKGROUND_SIZE: "cover",
      backgroundPosition: "center",}}>
      {/* Top Text Section */}
      <div className="max-w-4xl mx-auto text-right text-gray-800 mb-12">
        <p className="text-sm">
          At Merveille, we think strategically and act ethically, always driven by purpose.
        </p>
        <p className="text-sm">
          Our DNA blends innovation, resilience, and passion, guiding every decision we make.
        </p>
        <p className="text-sm">
          What sets us apart is not just our achievements,
        </p>
        <p className="text-sm">
          but how we achieve them; with transparency, integrity, and vision
        </p>
      </div>

      {/* Value Cards */}
      <div className="max-w-6xl mx-auto bg-white text-black rounded-3xl shadow-[0_0_30px_rgba(255,174,66,0.3)] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-200">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center px-4 ">
          <img src="src\assets\Innovative Solutions-01.png" alt="Innovative Solutions" className="w-12 mb-2" />
          <p className="font-medium">Innovative<br />Solutions</p>
        </div>

        <div className="hidden md:block h-20 border-l border-gray-300" />

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="src\assets\Expert Leadership-01.png" alt="Innovative Solutions" className="w-12 mb-2" />
          <p className="font-medium text-sm">
            Decades of wealth<br />management expertise
          </p>
        </div>

        <div className="hidden md:block h-20 border-l border-gray-300" />

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="src\assets\Ethical Practices-01.png" alt="Ethical Practices" className="w-12 mb-2" />
          <p className="font-medium">Ethical<br />Practices</p>
        </div>

        <div className="hidden md:block h-20 border-l border-gray-300" />

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="src\assets\Portfolio Excellence-01.png" alt="Portfolio Excellence" className="w-12 mb-2" />
          <p className="font-medium">Portfolio<br />Excellence</p>
        </div>

        <div className="hidden md:block h-20 border-l border-gray-300" />

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="src\assets\Integrity First-01.png" alt="Integrity First" className="w-12 mb-2" />
          <p className="font-medium">Integrity<br />First</p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
