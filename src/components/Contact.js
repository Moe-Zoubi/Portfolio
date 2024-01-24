import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMapLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";



function Contact() {


    return(
        <div className="contact-section" id="contact">
            <h4>CONTACT</h4>
            <h3>Don't be shy! Hit me up!</h3>
            <ul className="contact-info">
                <li>
                    <FontAwesomeIcon icon={faMapLocationDot } size="2xl" className="info-icon" />
                    <div className="info-item">
                        <p>Location</p>
                        <p>Los Angeles, California</p>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope } size="2xl" className="info-icon" />
                    <div className="info-item">
                        <p>Email</p>
                        <p>moe.zoubi2@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact;