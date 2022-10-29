import "./Homepage.css"
import "../../Utils/utils.css"
import {useNavigate} from "react-router-dom"
const Homepage = () => {
    const navigate = useNavigate()
    return (<div>
        <h1 className="highlighted mb1 mt1 ml1">DoUknow ?</h1>
        <hr className="bg-primary mb1" />
        <h1 className="centered mb1"><span className="text">Welcome to</span> <span className="highlighted">DoUknow</span></h1>
        <p className="text centered fs-medium mb1"><span className="highlighted">DoUknow</span> is an interactive web app which provides facility to play online Quizes related to <span className="highlighted">Marvel and Gaming</span> . </p>
        <p className="text centered fs-medium mb1">Take this quiz if you want to test your knowledge and learn some new stuff.</p>
        <div className="centered"><button className=" btn cta-button" onClick = {() => navigate("/rules")}> Let's play</button></div>
    </div>)
}

export {Homepage}