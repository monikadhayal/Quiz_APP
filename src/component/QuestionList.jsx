// import React from "react";

// export default function QuestionList({questions, options}) {
//   return (
//     <div>
//       {questions}
//       <ul>
//         // { options.map((option,index)) => (
//          {options.map((option, index) => (
//             <li>
//             {options}
//             </li>
//         )
//         }
//         </ul>

      
//     </div>
//   );
// }




// import React from "react";

// export default function QuestionList({
//   question,
//   Options,
//   handleClick,
//   currentAnswer,
  
// }) {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-200 mb-6 ">{question}</h2>
//     <div className="space-y-3">

//       <ul>
//         {Options.map((option) => (
            
//             <li
//             onClick={() => handleClick(option)}
//             className={`cursor-pointer p-2 border rounded-lg ${
//                 currentAnswer === option ? "bg-slate-400" : ""
//             }`}
//             >
//             {option}
//           </li>
//         ))}
//       </ul>
//         </div>
//     </div>
//   );
// }

import React from "react";

export default function QuestionList({
  question,
  Options,
  handleClick,
  currentAnswer,
  
})   {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">{question}</h2>
      <div className="space-y-3">
        {Options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleClick(option)}
            className={`w-full p-4 text-left rounded-lg border transition-all duration-200 
              ${
                currentAnswer === option
                  ? "border-blue-500 bg-gray-800 text-white"
                  : "border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600 hover:bg-gray-800"
              }`}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center
                ${
                  currentAnswer === option
                    ? "border-blue-500"
                    : "border-gray-600"
                }`}
              >
                {currentAnswer === option && (
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                )}
              </div>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};