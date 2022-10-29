import './App.css';
import { Homepage } from './Pages/Homepage/Homepage';
import {Routes , Route} from "react-router-dom"
import { Rules } from './Pages/RulePage/Rules';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/home" element = {<Homepage/>} />
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/rules" element = {<Rules />} />
      </Routes>
    </div>
  );
}
export default App;
