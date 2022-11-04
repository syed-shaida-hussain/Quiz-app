export function QuizReducer(state , action) {
  switch (action.type) {
    case "RIGHT_ANSWER":
      return {
        ...state,
        score: state.score + action.payload,
        questionNo: state.questionNo + 1,
        rightAnswers : state.rightAnswers + 1
      };
    case "WRONG_ANSWER":
      return {
        ...state,
        score: state.score - 2,
        questionNo: state.questionNo + 1,
        wrongAnswers : state.wrongAnswers + 1
      };
    case "RESET":
      return {
        ...state,
        score: 0,
        questionNo: 1,
        wrongAnswers : 0,
        rightAnswers : 0
      };
    case "GOTO_PREVIOUS_QUESTION":
      return {
        ...state,
        questionNo: state.questionNo - 1
      };
    case "SET_NAME" : {
      return {
        ...state , name : action.payload
      }
    }
    default:
      return { ...state };
  }
}
