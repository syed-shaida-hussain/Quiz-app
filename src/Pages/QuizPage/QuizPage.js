import { useNavigate } from "react-router-dom";
import { useQuizData } from "../../Contexts/QuizContext";
import { allQuestions } from "../../Database/Questions";
import "./QuizPage.css"

const QuizPage = () => {
    const currentQuiz = localStorage.getItem("QUIZ_CATEGORY");

    const { quizState : { score , questionNo} , dispatch} = useQuizData()
    const navigate = useNavigate();
  
    const validateFunction = (option, question) => {
      if (option.isRight) {
        option.bgColor = "green";
        dispatch({ type: "RIGHT_ANSWER", payload: question.points });
      } else {
        option.bgColor = "red";
        dispatch({ type: "WRONG_ANSWER", payload: question.points });
      }
    };
    const currentQuestion = allQuestions[currentQuiz].questions.find(
      (question) => question.questionNo === questionNo
    );

    return (<div className="main-wrapper">
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
        <div className="score flex">
            <p className="question-counter">{questionNo <= allQuestions[currentQuiz].questions.length ? (
                <div>
                    Question : {questionNo}/ {allQuestions[currentQuiz].questions.length} 
                </div>
                ) :  navigate("/results")}</p>
                    <p>Current Score : {score}</p>
        </div>

        {questionNo <= allQuestions[currentQuiz].questions.length && (
        <div>
            <p className="question flex">{currentQuestion.question}</p>
            <p>
            {currentQuestion.options.map((option) => (
                <div>
                <p className="alert alert-options flex alert-info "
                    onClick={() => validateFunction(option, currentQuestion)}
                >
                    {option.option}
                </p>
                </div> 
            ))}
            <div className="centered">
                <button className="cta-btn btn" onClick = {() => { questionNo > 1 && dispatch({type : "GOTO_PREVIOUS_QUESTION"})}}>Previous</button>
            </div>
            </p>
        </div>
        )}   
    </div>)
}

export {QuizPage}

 


