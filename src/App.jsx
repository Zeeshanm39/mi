import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ValuesSection from "./components/ValuesSection";
import InvestmentServices from "./components/InvestmentServices";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full mx-auto pt-0 px-0">
        <HeroSection />
        {/* <FeatureSection /> */}
        <ValuesSection />
        <InvestmentServices />
        {/* <Workflow /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
