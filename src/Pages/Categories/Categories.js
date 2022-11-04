import {useNavigate} from "react-router-dom"
import AvengersCoverImg from "../../Images/avengers-cover.jpg"
import GamingCoverImg from "../../Images/gaming-cover.jpg"
const Categories = () => {
    const navigate = useNavigate();
    return (<div>
        <h1 className="heading-text centered mb1 mt1 highlighted">Quiz Categories</h1>
            <main className="container">
                <section className="card card-with-overlay-text" onClick = {() => {
                    localStorage.setItem("QUIZ_CATEGORY" , "marvel")
                    navigate("/categories/quiz")
                    }}>
                <img className="card-overlay-img" src={AvengersCoverImg} alt="Avengers-cover" />
                <h2 className=" text-color heading mt1 mb1">
                   Marvel Quiz
                    <div className="highlighted mb1 mt1">Whatever it takes!</div>
                   Total Questions : 10
                </h2>
                </section>

                <section className="card card-with-overlay-text" onClick = {() => {
                    localStorage.setItem("QUIZ_CATEGORY" , "gaming")
                    navigate("/categories/quiz")
                    }}>
                <img className="card-overlay-img" src= {GamingCoverImg} alt="Gaming-cover" />
               
                <h2 className=" text-color heading mt1 mb1">
                   Gaming Quiz
                    <div className="highlighted mb1 mt1">Born Gamer!</div>
                   Total Questions : 10
                </h2>
                </section>
            </main>
            <div className="centered mt1">
                 <button className="btn home-btn" onClick={() => navigate("/home")}>Back Home</button>
                <button className="btn fs1 cta-btn" onClick = { () => navigate("/rules")}>See Rules</button>
            </div>
    </div>)
}

export {Categories}