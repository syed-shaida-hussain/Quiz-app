import {createContext , useContext , useReducer } from "react"
import { QuizReducer } from "../Reducers/QuizReducer";

const QuizContext = createContext()

const initialQuizState = { score: 0, questionNo: 1 , wrongAnswers : 0 ,rightAnswers : 0 , name : ""};

const QuizProvider = ({children}) => {
    const [quizState, dispatch] = useReducer(QuizReducer, initialQuizState);
    return <QuizContext.Provider value={{quizState , dispatch}}>
        {children}
    </QuizContext.Provider>
}

const useQuizData = () => useContext(QuizContext)

export { useQuizData , QuizProvider }