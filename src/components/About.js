import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import circularText from ".././images/about-section/spinning-text.png";
import computerIcon from ".././images/about-section/computer-icon.png";

function About() {


    return(
        <div className="about-section" id="about">
            <div className="about-container">
                <div className="about-img">
                    <div className="circular-text">
                        <img className="img-text rotate" src={circularText} alt="text" />
                        <img className="computer-icon" src={computerIcon} alt="computer icon" />
                    </div>
                </div>
                <div className="about-me">
                    <h4>ABOUT ME</h4>
                    <h3>Front-end React Developer based in LA, California. <FontAwesomeIcon icon={faMapPin} style={{color: "#005B9A"}} /></h3>
                    <p>
                        Hello, I'm Mohammad. I have a strong academic background and graduated with a second upper division GPA
                        in computer science. Making an intuitive user interface and user experience for my users is my passion.
                    </p>
                    <p>
                        React is the main component of my stack, along with JavaScript, and bootstrap CSS.
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default About;