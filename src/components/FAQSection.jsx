// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the minimum investment amount?",
//     answer: "",
//   },
//   {
//     question: "Can I withdraw my investment before the contract ends?",
//     answer: "",
//   },
//   {
//     question: "How are profits distributed?",
//     answer: "Depending on your agreement: monthly, quarterly, or annually.",
//   },
//   {
//     question: "Is the investment guaranteed?",
//     answer: "",
//   },
//   {
//     question: "Do I need to be a UAE resident to invest?",
//     answer: "",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className="px-6 py-16 bg-white">
//       <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
//         FAQs
//       </h2>
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div key={index}>
//             <button
//               onClick={() => toggleFAQ(index)}
//               className={`w-full flex justify-between items-center text-left px-6 py-4 rounded-xl transition-all duration-300
//                 ${
//                   activeIndex === index
//                     ? "bg-gradient-to-r from-[#B89148] via-[#B89148] to-[#11294D]"
//                     : "bg-gradient-to-r from-[#B89148] to-[#11294D]"
//                 } text-white`}
//             >
//               <span className="text-sm font-medium">{item.question}</span>
//               {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//             </button>
//             {activeIndex === index && item.answer && (
//               <div className="bg-[#11294D] text-white text-sm px-6 py-4 rounded-b-xl">
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


// import { useState } from "react";
// import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the minimum investment amount?",
//     answer: "",
//   },
//   {
//     question: "Can I withdraw my investment before the contract ends?",
//     answer: "",
//   },
//   {
//     question: "How are profits distributed?",
//     answer: "Depending on your agreement: monthly, quarterly, or annually.",
//   },
//   {
//     question: "Is the investment guaranteed?",
//     answer: "",
//   },
//   {
//     question: "Do I need to be a UAE resident to invest?",
//     answer: "",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className="px-6 py-16 bg-white">
//       <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
//         FAQs
//       </h2>
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div key={index}>
//             <button
//               onClick={() => toggleFAQ(index)}
//               className={`w-full flex justify-between items-center text-left px-6 py-4 rounded-xl text-white
//                 transition-all duration-300 ease-in-out group
//                 bg-gradient-to-r from-[#B89148] to-[#11294D]
//                 hover:brightness-110 hover:scale-[1.01]`}
//             >
//               <span className="text-sm font-medium transition-all duration-300 ease-in-out group-hover:translate-x-1">
//                 {item.question}
//               </span>
//               {activeIndex === index ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//             </button>
//             {activeIndex === index && item.answer && (
//               <div className="bg-[#11294D] text-white text-sm px-6 py-4 rounded-b-xl transition-all duration-300 ease-in-out">
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;



// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the minimum investment amount?",
//     answer: "The minimum investment amount varies depending on the plan. Please contact us for specific details.",
//   },
//   {
//     question: "Can I withdraw my investment before the contract ends?",
//     answer: "Early withdrawals may be subject to penalties or conditions based on the agreement.",
//   },
//   {
//     question: "How are profits distributed?",
//     answer: "Depending on your agreement: monthly, quarterly, or annually.",
//   },
//   {
//     question: "Is the investment guaranteed?",
//     answer: "No investment is completely risk-free. We strive to mitigate risk through diversification and management.",
//   },
//   {
//     question: "Do I need to be a UAE resident to invest?",
//     answer: "No, both residents and non-residents can invest, subject to compliance and KYC regulations.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section className="px-6 py-16 bg-white">
//       <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
//         FAQs
//       </h2>
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div key={index} className="overflow-hidden">
//             <button
//               onClick={() => toggleFAQ(index)}
//               className={`w-full flex justify-between items-center text-left px-6 py-4 rounded-xl text-white
//                 transition-all duration-300 ease-in-out group
//                 bg-[#B89148] hover:brightness-110 hover:scale-[1.01]`}
//             >
//               <span className="text-sm font-medium transition-all duration-300 ease-in-out group-hover:translate-x-1">
//                 {item.question}
//               </span>
//               {activeIndex === index ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
//             </button>
//             {activeIndex === index && item.answer && (
//               <div
//                 className="bg-[#11294D] text-white text-sm px-6 py-4 rounded-b-xl animate-slide-in"
//               >
//                 {item.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Tailwind CSS custom animation */}
//       <style>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-slide-in {
//           animation: slideIn 0.4s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FAQSection;



// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the minimum investment amount?",
//     answer: "The minimum investment amount varies depending on the plan.",
//   },
//   {
//     question: "Can I withdraw my investment before the contract ends?",
//     answer: "Early withdrawals may be subject to penalties.",
//   },
//   {
//     question: "How are profits distributed?",
//     answer: "Monthly, quarterly, or annually as agreed.",
//   },
//   {
//     question: "Is the investment guaranteed?",
//     answer: "No investment is completely risk-free.",
//   },
//   {
//     question: "Do I need to be a UAE resident to invest?",
//     answer: "No, both residents and non-residents can invest.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === index ? index : null);
//   };

//   return (
//     <section className="px-6 py-16 bg-white">
//       <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
//         FAQs
//       </h2>
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div key={index} className="overflow-hidden">
//             <div
//               onClick={() => toggleFAQ(index)}
//               className={`w-full cursor-pointer px-6 py-4 rounded-xl text-white transition-all duration-300 ease-in-out ${
//                 activeIndex === index ? "bg-[#11294D]" : "bg-[#B89148]"
//               }`}
//             >
//               <div className="flex justify-between items-center">
//                 {activeIndex === index ? (
//                   <div className="text-sm animate-slide-in">{item.answer}</div>
//                 ) : (
//                   <div className="text-sm font-medium">{item.question}</div>
//                 )}
//                 <div className="ml-4">
//                   {activeIndex === index ? (
//                     <ChevronRight size={18} />
//                   ) : (
//                     <ChevronLeft size={18} />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animation style */}
//       <style>{`
//         @keyframes slideInFromRight {
//           from {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         .animate-slide-in {
//           animation: slideInFromRight 0.4s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FAQSection;




// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const faqData = [
//   {
//     question: "What is the minimum investment amount?",
//     answer: "The minimum investment amount varies depending on the plan.",
//   },
//   {
//     question: "Can I withdraw my investment before the contract ends?",
//     answer: "Early withdrawals may be subject to penalties.",
//   },
//   {
//     question: "How are profits distributed?",
//     answer: "Monthly, quarterly, or annually as agreed.",
//   },
//   {
//     question: "Is the investment guaranteed?",
//     answer: "No investment is completely risk-free.",
//   },
//   {
//     question: "Do I need to be a UAE resident to invest?",
//     answer: "No, both residents and non-residents can invest.",
//   },
// ];

// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [direction, setDirection] = useState("right");

//   const toggleFAQ = (index) => {
//     if (activeIndex === index) {
//       setDirection("right");
//       setTimeout(() => setActiveIndex(null), 500); // Delay to match animation
//     } else {
//       setDirection("left");
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <section className="px-6 py-16 bg-white">
//       <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
//         FAQs
//       </h2>
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div key={index} className="overflow-hidden">
//             <div
//               onClick={() => toggleFAQ(index)}
//               className={`w-full cursor-pointer px-6 py-4 rounded-xl text-white transition-all duration-500 ease-in-out ${
//                 activeIndex === index ? "bg-[#11294D]" : "bg-[#B89148]"
//               }`}
//             >
//               <div className="flex justify-between items-center">
//                 {activeIndex === index ? (
//                   <div
//                     className={`text-sm ${
//                       direction === "left"
//                         ? "animate-slide-in-right"
//                         : "animate-slide-out-right"
//                     }`}
//                   >
//                     {item.answer}
//                   </div>
//                 ) : (
//                   <div className="text-sm font-medium animate-slide-in-left">
//                     {item.question}
//                   </div>
//                 )}
//                 <div className="ml-4">
//                   {activeIndex === index ? (
//                     <ChevronRight size={18} />
//                   ) : (
//                     <ChevronLeft size={18} />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes slideInRight {
//           from {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//         @keyframes slideOutRight {
//           from {
//             opacity: 1;
//             transform: translateX(0);
//           }
//           to {
//             opacity: 0;
//             transform: translateX(100%);
//           }
//         }
//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-100%);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-slide-in-right {
//           animation: slideInRight 0.5s ease forwards;
//         }

//         .animate-slide-out-right {
//           animation: slideOutRight 0.5s ease forwards;
//         }

//         .animate-slide-in-left {
//           animation: slideInLeft 0.5s ease forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FAQSection;



import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faqData = [
  {
    question: "What is the minimum investment amount?",
    answer: "The minimum investment amount varies depending on the plan.",
  },
  {
    question: "Can I withdraw my investment before the contract ends?",
    answer: "Early withdrawals may be subject to penalties.",
  },
  {
    question: "How are profits distributed?",
    answer: "Monthly, quarterly, or annually as agreed.",
  },
  {
    question: "Is the investment guaranteed?",
    answer: "No investment is completely risk-free.",
  },
  {
    question: "Do I need to be a UAE resident to invest?",
    answer: "No, both residents and non-residents can invest.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [direction, setDirection] = useState("right");

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setDirection("right");
      setTimeout(() => setActiveIndex(null), 500); // Allow exit animation
    } else {
      setDirection("left");
      setActiveIndex(index);
    }
  };

  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="overflow-hidden">
            <div
              onClick={() => toggleFAQ(index)}
              className={`w-full cursor-pointer px-6 py-4 rounded-xl text-white transition-all duration-500 ease-in-out ${
                activeIndex === index ? "bg-[#11294D]" : "bg-[#B89148]"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  {activeIndex === index ? (
                    <div
                      className={`text-sm ${
                        direction === "left"
                          ? "animate-slide-in-right"
                          : "animate-slide-out-right"
                      }`}
                    >
                      {item.answer}
                    </div>
                  ) : (
                    <div className="text-sm font-medium animate-slide-in-left">
                      {item.question}
                    </div>
                  )}
                </div>
                <div
                  className={`ml-4 ${
                    activeIndex === index
                      ? "animate-arrow-move-left"
                      : "animate-arrow-move-right"
                  }`}
                >
                  {activeIndex === index ? (
                    <ChevronRight size={18} />
                  ) : (
                    <ChevronLeft size={18} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(80%);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes arrowMoveLeft {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateX(-20px);
            opacity: 0.5;
          }
          100% {
            transform: translateX(-50px);
            opacity: 1;
          }
        }

        @keyframes arrowMoveRight {
          0% {
            transform: translateX(-50px);
            opacity: 1;
          }
          50% {
            transform: translateX(-20px);
            opacity: 0.5;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slideInRight 0.5s ease forwards;
        }

        .animate-slide-out-right {
          animation: slideOutRight 0.5s ease forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease forwards;
        }

        .animate-arrow-move-left {
          animation: arrowMoveLeft 0.5s ease forwards;
        }

        .animate-arrow-move-right {
          animation: arrowMoveRight 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
