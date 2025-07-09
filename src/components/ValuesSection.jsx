const ValuesSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      {/* Top Text Section */}
      <div className="max-w-4xl mx-auto text-center text-gray-800 mb-12">
        <p className="text-lg">
          At Merveille, we think strategically and act ethically, always driven by purpose.
        </p>
        <p className="text-lg">
          Our DNA blends innovation, resilience, and passion, guiding every decision we make.
        </p>
        <p className="text-lg">
          What sets us apart is not just our achievements,
        </p>
        <p className="text-lg">
          but how we achieve them; with transparency, integrity, and vision
        </p>
      </div>

      {/* Value Cards */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-200 shadow-[0_10px_20px_rgba(255,204,153,0.3)]">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="/src/assets/Innovative Solutions-01" alt="Innovative Solutions" className="w-12 mb-2" />
          <p className="font-medium">Innovative<br />Solutions</p>
        </div>

        <div className="hidden md:block h-16 border-l border-gray-300" />

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center px-4 bg-gray-100 rounded-xl py-4">
          <p className="font-medium text-sm">
            Decades of wealth<br />management expertise
          </p>
        </div>

        <div className="hidden md:block h-16 border-l border-gray-300" />

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="/icons/ethics.png" alt="Ethical Practices" className="w-12 mb-2" />
          <p className="font-medium">Ethical<br />Practices</p>
        </div>

        <div className="hidden md:block h-16 border-l border-gray-300" />

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="/icons/portfolio.png" alt="Portfolio Excellence" className="w-12 mb-2" />
          <p className="font-medium">Portfolio<br />Excellence</p>
        </div>

        <div className="hidden md:block h-16 border-l border-gray-300" />

        {/* Card 5 */}
        <div className="flex flex-col items-center text-center px-4">
          <img src="/icons/integrity.png" alt="Integrity First" className="w-12 mb-2" />
          <p className="font-medium">Integrity<br />First</p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
