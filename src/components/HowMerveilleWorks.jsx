import React from "react";

const HowMerveilleWorks = () => {
  const steps = [
    {
      title: "Opportunities Identified",
      description: "Our team reviews numerous potential deals each year.",
      position: "left",
    },
    {
      title: "In-depth Deal Review",
      description: "Each deal and sponsor are carefully screened before presenting to investors.",
      position: "right",
    },
    {
      title: "Investor Conducts Diligence",
      description: "Investors are presented with detailed deal information through our platform.",
      position: "left",
    },
    {
      title: "Invest",
      description: "Once you’ve decided to invest, simply click “Invest Now” to begin the process.",
      position: "right",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-right text-2xl md:text-3xl font-semibold text-[#B68E2F] mb-20">
        How Merveille Works
      </h2>

      <div className="relative border-l-2 border-[#122044] ml-6 md:ml-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`mb-16 flex items-start ${
              step.position === "right" ? "justify-end pr-8 md:pr-20" : "pl-8 md:pl-20"
            } relative`}
          >
            {/* Connector line and dot */}
            <div className="absolute left-[-0.625rem] top-2.5 w-5 h-5 bg-[#B68E2F] rounded-full border-4 border-white shadow-md z-10" />

            {/* Step content */}
            <div
              className={`w-full md:w-1/2 ${
                step.position === "right" ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-lg font-semibold text-[#122044]">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}

        {/* Bottom logo */}
        <div className="flex justify-end mt-10 pr-6">
          <img src="/logo.png" alt="Merveille Logo" className="w-14 h-14" />
        </div>
      </div>
    </section>
  );
};

export default HowMerveilleWorks;
