import './App.css';
import { Homepage } from './Pages/Homepage/Homepage';
import {Routes , Route} from "react-router-dom"
import { Rules } from './Pages/RulePage/Rules';
import { Categories } from './Pages/Categories/Categories';
import { QuizPage } from './Pages/QuizPage/QuizPage';
import { ResultPage } from './Pages/ResultPage/Results';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/home" element = {<Homepage/>} />
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/rules" element = {<Rules />} />
        <Route path = "/categories" element = {<Categories />} />
        <Route path="/categories/quiz" element = {<QuizPage />} />
        <Route path="/results" element = {<ResultPage />} />
      </Routes>
    </div>
  );
}
export default App;
