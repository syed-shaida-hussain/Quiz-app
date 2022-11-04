import { useNavigate } from "react-router-dom"
import { useQuizData } from "../../Contexts/QuizContext"
const ResultPage = () => {

    const navigate = useNavigate()
    const {quizState: {name , score , rightAnswers , wrongAnswers} , dispatch} = useQuizData();
    const resetScore = () => {
        dispatch({type : "RESET"})
        navigate("/categories")
    }
    return <main className="main-wrapper result">
    <h2 className="centered  mb1">Results for <span className="highlighted">{name}</span> </h2>
    <div className="score flex">
        Final Score : {score}
    </div>
    <div>
        <p className="mb1 mt1"> Right Answers : <span className="green">{rightAnswers}</span> </p>
        <p>Wrong Answers : <span className="highlighted">{wrongAnswers}</span> </p>
    </div>
    <div className="centered">
         <button className="btn cta-btn" onClick={() => resetScore()}>More Quizes</button>
    </div>


</main>
}

export {ResultPage}

{/* <div className="centered">
    <h2 className="text-color mt1 mb1">Results</h2>
    <div>
         <p>Total score : {score} </p>
    </div>
    <button className="btn cta-btn" onClick={() => navigate("/categories")}>More Quizes</button>
</div> */}

