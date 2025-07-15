const InvestmentServices = () => {
  const services = [
    {
      id: "01",
      title: "Retail Trade Enterprise & Development",
    },
    {
      id: "02",
      title: "Energy Enterprise & Development",
    },
    {
      id: "03",
      title: "Healthcare Enterprise & Development",
    },
    {
      id: "04",
      title: "Oil & Natural Gas Projects",
    },
    {
      id: "05",
      title: "Commercial Enterprise & Development",
    },
  ];

  return (
    <div className="text-center py-60">
      <h1 className="text-xl font-semibold text-[#a48136] mb-8 border-b border-t border-gray-200 inline-block px-4">
        Our Investment Services
      </h1>
      <div className="grid grid-cols-5 gap-4 py-20 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col items-center rounded-2xl py-40 shadow-lg overflow-hidden group"
          >
            
            {/* Background image overlay shown on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: "url('/src/assets/Investment section hover.jpeg')",
              }}
            ></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center p-4">
              <span className="text-4xl font-light mb-4 text-black group-hover:text-white transition-colors duration-300">
                {service.id}
              </span>
              <div className="flex-1 mb-4">
                <p className="font-medium text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </p>
              </div>
              <button
                className="px-4 py-1 rounded-full text-sm bg-[#a48136] text-white group-hover:bg-white group-hover:text-black transition-colors duration-300"
              >
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
