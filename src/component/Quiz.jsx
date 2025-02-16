// import QuestionList from "./QuestionList";
// import { useState } from "react";

import QuestionList from "./QuestionList";

// export default function Quiz (){
//   const questions = [
//     {
//       question: "what is React?",
//       option: ['CSS Framwork' , 'React Library','React Framework','testing tool'],
//       answer: 'React Library',
//     },
//     {
//       question: "what is 2 + 2 ?",
//       option: ["3", "4", "5", "6"],
//       answer: "4",
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentAnswer , setCurrentAnswer] = useState(null);

//   const handleClick = (option) => {
//        setCurrentAnswer(option)
//   }

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setCurrentAnswer(null);
//   }
//     return (
//       <div className="h-screen w-screen flex justify-center  text-3xl">
//         {currentQuestionIndex < questions.length?
//         <div>
//           <QuestionList
//             question={questions[currentQuestionIndex].question}
//             options={questions[currentQuestionIndex].option}
//             handleClick={handleClick}
//             currentAnswer={currentAnswer}
//           />
//           <button
//             className="bg-[#0dbc72] rounded-[20px] w-[60%] cursor-pointer"
//             disabled={currentAnswer === null}
//             // classname={currentAnswer === null ? 'button-disable' : 'button'}
//             onClick={handleNextQuestion}
//           >
//             Next Question
//           </button>
//         </div>
//         : " " }
//       </div>
//     )
// }




// import QuestionList from "./QuestionList";
// import { useState } from "react";

// export default function Quiz() {
//   const questions = [
//     {
//       question: "What is React?",
//       options: [
//         "CSS Framework",
//         "React Library",
//         "React Framework",
//         "Testing Tool",
//       ],
//       answer: "React Library",
//     },
//     {
//       question: "What is 2 + 2?",
//       options: ["3", "4", "5", "6"],
//       answer: "4",
//     },
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [currentAnswer, setCurrentAnswer] = useState(null);

//   const handleClick = (option) => {
//     setCurrentAnswer(option);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     setCurrentAnswer(null);
//   };

//   return (
//     <div className="h-screen w-screen flex justify-center items-center text-3xl">
//       {currentQuestionIndex < questions.length ? (
//         <div className="text-center">
//           <QuestionList
//             question={questions[currentQuestionIndex].question}
//             options={questions[currentQuestionIndex].options}
//             handleClick={handleClick}
//             currentAnswer={currentAnswer}
//           />
//           <button
//             className={`bg-[#0dbc72] text-white rounded-[20px] w-[60%] p-2 mt-4 cursor-pointer ${
//               currentAnswer === null ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={currentAnswer === null}
//             onClick={handleNextQuestion}
//           >
//             Next Question
//           </button>
//         </div>
//       ) : (
//         <h2>Quiz Completed! 🎉</h2>
//       )}
//     </div>
//   );
// }






// import React from "react";
// import { useState } from "react";

// export default function Quiz() {
//  const questions = [
//     {
//         question: "What is React ?",
//         options:[
//             "CSS Framework",
//             "React Library",
//             "React Framework",
//             "Teasting Tool",
//         ],
//         answer: "React Library",
//     },
//     {
//         question: "What is 2 + 2?",
//         options:["3","4","5","6"],
//         answer:"4",
//     }
//  ]

// const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0);
// const [currentAnswer , setCurrentAnswer] = useState(null);
// const [ score , setScore] = useState(0);

// const handleClick = (option) => {
//     setCurrentAnswer(option)
//     if (option === questions[currentQuestionIndex].answer){
//         setScore(score+1)
//     }
// }
// const handleNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setCurrentAnswer(null);
// }
//     return (
//       <div className="min-h-screen bg-gray-950 text-white">
//         <div className="max-w-2xl mx-auto p-6"></div>
//         <div className="bg-gray-900 rounded-xl shhadow-xl p-8"></div>
//         {currentQuestionIndex < questions.length ? (
//           <div className="space-y-8">
//             <QuestionList
//               question={questions[currentQuestionIndex].question}
//               Options={questions[currentQuestionIndex].options}
//               handleClick={handleClick}
//               currentAnswer={currentAnswer}
//             />
//             <div className="flex justify-end">

//             <button className="bg-blue-500" onClick={handleNextQuestion}>
//               Next Question
//             </button>
//           </div>
//         ) : (
//           <ul>
//             <li> Your Scroe:{score} </li>
//             <br />
//             <h2>Quiz Completed! 🎉</h2>
//           </ul>
//         )}
//       </div>
//     );
// }



import React from "react";
import { useState } from "react"; 

export default function Quiz() {
  const questions = [
    {
      question: "What is React.js?",
      options: [
        "A CSS framework",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "A JavaScript framework",
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-gray-900 rounded-xl shadow-xl p-8">
          {currentQuestionIndex < questions.length ? (
            <div className="space-y-8">
              <QuestionList
                question={questions[currentQuestionIndex].question}
                Options={questions[currentQuestionIndex].options}
                handleClick={handleClick}
                currentAnswer={currentAnswer}
              />
              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  disabled={!currentAnswer}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200
                    ${
                      currentAnswer
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-800 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  Next Question
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <h2 className="text-3xl font-bold text-gray-200">
                Quiz Completed! 🎉
              </h2>
              <p className="text-xl text-gray-400">
                Your Score: {score}/{questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}