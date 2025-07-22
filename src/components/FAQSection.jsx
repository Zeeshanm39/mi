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
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is the minimum investment amount?",
    answer: "",
  },
  {
    question: "Can I withdraw my investment before the contract ends?",
    answer: "",
  },
  {
    question: "How are profits distributed?",
    answer: "Depending on your agreement: monthly, quarterly, or annually.",
  },
  {
    question: "Is the investment guaranteed?",
    answer: "",
  },
  {
    question: "Do I need to be a UAE resident to invest?",
    answer: "",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-white">
      <h2 className="text-2xl font-bold text-[#B89148] mb-8 border-b pb-2 w-max">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center text-left px-6 py-4 rounded-xl text-white
                transition-all duration-300 ease-in-out group
                bg-gradient-to-r from-[#B89148] to-[#11294D]
                hover:brightness-110 hover:scale-[1.01]`}
            >
              <span className="text-sm font-medium transition-all duration-300 ease-in-out group-hover:translate-x-1">
                {item.question}
              </span>
              {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {activeIndex === index && item.answer && (
              <div className="bg-[#11294D] text-white text-sm px-6 py-4 rounded-b-xl transition-all duration-300 ease-in-out">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
