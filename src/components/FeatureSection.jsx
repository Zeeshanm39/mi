import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative px-14 mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        {/* <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span> */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why clients{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-transparent bg-clip-text">
            choose us?
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 text-justify">
            <div className="flex">
              {/* <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-yellow-700 justify-center items-center rounded-full">
                {feature.icon}
              </div> */}
              <div>
                <h5 className="mt-1 mb-6 text-xl p-2 ">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-4 rounded-md">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
