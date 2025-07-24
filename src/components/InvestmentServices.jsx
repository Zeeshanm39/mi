
const InvestmentServices = () => {
  const services = [
    { id: "01", title: "Retail Trade Enterprise & Development" },
    { id: "02", title: "Energy Enterprise & Development" },
    { id: "03", title: "Healthcare Enterprise & Development" },
    { id: "04", title: "Oil & Natural Gas Projects" },
    { id: "05", title: "Commercial Enterprise & Development" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      {/* Section Heading with Lines */}
      <div className="flex items-center justify-center py-20">
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
        <h2 className="mx-4 text-xl font-semibold text-[#C29351] dark:text-[#e0b97d]">
          Our Investment Services
        </h2>
        <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4 pb-20">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col items-center rounded-2xl py-20 px-4 shadow-lg bg-gray-100 dark:bg-gray-800 overflow-hidden group transition-colors duration-500"
          >
            {/* Hover Background Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/src/assets/Investment section hover.jpeg')",
              }}
            ></div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-4xl font-light mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                {service.id}
              </span>
              <p className="font-medium text-black dark:text-white group-hover:text-white transition-colors duration-300 mb-4 text-center">
                {service.title}
              </p>
              <button className="px-4 py-1 rounded-full text-sm bg-[#a48136] text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentServices;
