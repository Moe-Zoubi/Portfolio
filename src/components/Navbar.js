import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return(
        <div className="navbar">
            <div className="nav-container">
                <h3>Mohammad Zoubi</h3>
                <div className="links-container">
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div  className="toggle-links" onClick={() => setShowLinks(!showLinks)} ><FontAwesomeIcon icon={faBars } size="2xl" /></div>
            </div>
            <div className={showLinks ? "mobile-nav show-mobile" : "mobile-nav"}>
                    <div  className="toggle-mobile" onClick={() => setShowLinks(!showLinks)} >
                        <FontAwesomeIcon icon={faXmark } size="2xl" />
                    </div>
                    <ul className="mobile-links">
                        <li onClick={() => setShowLinks(!showLinks)}><a href="#home">Home</a></li>
                        <li onClick={() => setShowLinks(!showLinks)}><a href="#about">About</a></li>
                        <li onClick={() => setShowLinks(!showLinks)}><a href="#projects">Projects</a></li>
                        <li onClick={() => setShowLinks(!showLinks)}><a href="#contact">Contact</a></li>
                    </ul>
                </div>
        </div>
    )
}


export default Navbar;