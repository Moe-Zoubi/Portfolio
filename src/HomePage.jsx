import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import github from "./images/socials/github.png";
import linkedIn from "./images/socials/linkedin.png";
import reactIcon from "./images/tech-stack/react-icon.png";
import jsIcon from "./images/tech-stack/js-icon.png";
import bootstrapIcon from "./images/tech-stack/bootstrap.png";
import firebaseIcon from "./images/tech-stack/firebase-icon.png";
import cssIcon from "./images/tech-stack/css-icon.png";
import htmlIcon from "./images/tech-stack/html-icon.png";
import About from "./components/About";


const HomePage = () => {

    return(
        <div className="homepage" id="home">
            <div className="intro" >
                <h1>Front-End React Developer</h1>
                <p>Hi, I'm Moe. A passionate Front-end React Developer based in LA, California. <FontAwesomeIcon icon={faMapPin} style={{color: "red"}} /></p>
                <ul className="socials-links">
                    <li><a href="https://www.linkedin.com/in/mohammad-zoubi-21a555224/"><img src={linkedIn} alt="linkedIn icon" /></a></li>
                    <li><a href="https://github.com/Moe-Zoubi"><img src={github} alt="github icon" /></a></li>
                </ul>
                <div className="tech-stack">
                    <h3>Tech Stack <span>|</span></h3>
                    <ul className="tech-items">
                        <li className="item">
                            <li><img src={htmlIcon} alt="html icon" /></li>
                            <li><img src={cssIcon} alt="css icon" /></li>
                        </li>
                        <li className="item">
                            <li><img src={jsIcon} alt="javascript icon" /></li>
                            <li><img src={bootstrapIcon} alt="bootstrap icon" /></li>
                        </li>
                        <li className="item">
                            <li><img src={firebaseIcon} alt="firebase icon" /></li>
                            <li><img src={reactIcon} alt="react icon" /></li>
                        </li>
                    </ul>
                </div>
            </div>
            <About />
        </div>
    )
}

export default HomePage;