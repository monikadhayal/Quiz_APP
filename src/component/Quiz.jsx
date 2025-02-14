import QuestionList from "./QuestionList";

export default function Quiz (){
  const questions = [
    {
      question: "what is React?",
      opation: ['CSS Framwork' , 'React Library','React Framework','testing tool'],
      answer: 'React Library',
    },
    {
      question: "what is 2 + 2 ?",
      opation: ["3", "4", "5", "6"],
      answer: "4",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    return(
        <div className="h-screen w-screen flex justify-center  text-3xl">
            <div>
           <QuestionList question={} />
            </div>
        </div>
    );
}