// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
// import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
// import ValuesSection from "./components/ValuesSection";
// import InvestmentServices from "./components/InvestmentServices";
// import HowMerveilleWorks from "./components/HowMerveilleWorks";
// import LeadershipSection from "./components/LeadershipSection";
// import FAQSection from "./components/FAQSection";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-full mx-auto pt-0 px-0">
//         <HeroSection />
//         {/* <FeatureSection /> */}
//         <ValuesSection />
//         <InvestmentServices />
//         {/* <Workflow /> */}
//         {/* <Pricing /> */}
//         {/* <Testimonials /> */}
//         <HowMerveilleWorks />
//         <LeadershipSection />
//         <FAQSection />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ValuesSection from "./components/ValuesSection";
import InvestmentServices from "./components/InvestmentServices";
import HowMerveilleWorks from "./components/HowMerveilleWorks";
import LeadershipSection from "./components/LeadershipSection";
import FAQSection from "./components/FAQSection";

const Home = () => (
  <>
  <div className="max-w-full mx-auto pt-0 px-0">
    
    <HeroSection />
    <ValuesSection />
    <InvestmentServices />
    <HowMerveilleWorks />
    <LeadershipSection />
    <FAQSection />
  </div>
  </>
);

const WhoAreWe = () => <HowMerveilleWorks />;
const InvestorServices = () => <InvestmentServices />;
const Careers = () => <LeadershipSection />;
const Contact = () => <FAQSection />;

const App = () => {
  return (
    <Router>
      <div className="max-w-full mx-auto pt-0 px-0">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoAreWe />} />
          <Route path="/investment-services" element={<InvestorServices />} />
          <Route path="/for-investors" element={<FeatureSection />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
