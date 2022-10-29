import "./Rules.css"
import "../../Utils/utils.css"
import {useNavigate} from "react-router-dom"
const Rules = () => {
    const navigate = useNavigate();
    return (<div>
         <h1 className="centered mt1 highlighted heading-text">Rules</h1>
    <hr/>
    <main className="rule-book">
        <div className="rules">
            <h3 className="rule">Rule 1 :
                <p className="rule-text">
                    For taking a quiz you just need to click on the category card.
                </p>
            </h3>
        </div>
        <div className="rules">
            <h3 className="rule mt1">Rule 2 :
                <p className="rule-text">
                    You will be asked 5 questions for each quiz you take.
                </p>
            </h3>
        </div>
        <div className="rules">
            <h3 className="rule mt1">Rule 3 :
                <p className="rule-text">
                   For every right answer , you will be rewarded with five points.
                </p>
            </h3>
        </div>
        <div className="rules">
            <h3 className="rule mt1">Rule 4 :
                <p className="rule-text">
                    For every wrong answer , two points will be deducted from your total points.
                </p>
            </h3>
        </div>
    </main>
    <div className="centered ">
        <button className="btn home-btn" onClick={() => navigate("/home")}>Back Home</button>
        <button className="btn cta-button">Take Quiz</button>
    </div>
    </div>)
}

export {Rules}