import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import carRental from "../images/websites/car-rental.png";
import expenseTracker from "../images/websites/expense-tracker.png";
import gymPulse from "../images/websites/gym-pulse.png";
import ecommerceWebsite from "../images/websites/ecommerce-website.png";

function Projects(){


    return(
        <div className="project-section" id="projects">
            <div className="project-header">
                <h3>Projects</h3>
                <h2>Each project is a unique piece of developement</h2>
            </div>
            <div className="projects-container">
                <div className="project">
                    <div className="project-img">
                        <img src={expenseTracker} alt="expense tracker website" />
                    </div>
                    <div className="project-description">
                        <h4>Expense Tracker</h4>
                        <p>
                            Users may keep an eye on and manage their financial 
                            activities with the use of an expense tracker website. 
                            It arranges income and spending, offers insights via 
                            graphs and charts, and encourages efficient planning 
                            for better money management.
                        </p>
                        <ul className="project-tech">
                            <li className="tech-item">
                                <li>React</li>
                                <li>Bootstrap CSS</li>
                            </li>
                            <li className="tech-item">
                                <li><a href="https://github.com/Moe-Zoubi/Expense-tracker">Code <FontAwesomeIcon icon={faLink} /></a></li>
                                <li><a href="https://expense-tracker-978fe.web.app/">Live Demo <FontAwesomeIcon icon={faLink} /></a></li>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="project">
                    <div className="project-description">
                        <h4>Gym Pulse</h4>
                        <p>
                            A gym's website offers a wealth of information about fitness, 
                            including class schedules, membership options, and tools to 
                            assist users in reaching their fitness objectives.
                        </p>
                        <ul className="project-tech">
                            <li className="tech-item">
                                <li>React</li>
                                <li>Vanilla CSS</li>
                            </li>
                            <li className="tech-item">
                                <li><a href="https://github.com/Moe-Zoubi/Gym-Pulse">Code <FontAwesomeIcon icon={faLink} /></a></li>
                                <li><a href="https://gym-pulse.netlify.app/">Live Demo <FontAwesomeIcon icon={faLink} /></a></li>
                            </li>
                        </ul>
                    </div>
                    <div className="project-img">
                        <img src={gymPulse} alt="gym website" />
                    </div>
                </div>
                <div className="project">
                    <div className="project-img">
                        <img src={carRental} alt="car rental website" />
                    </div>
                    <div className="project-description">
                        <h4>Car Rental</h4>
                        <p>
                            An online platform that lets customers rent cars for personal 
                            or professional usage is known as a car rental. The website offers 
                            an automobile search, comparison, and reservation interface.
                        </p>
                        <ul className="project-tech">
                            <li className="tech-item">
                                <li>React</li>
                                <li>Vanilla CSS</li>
                            </li>
                            <li className="tech-item">
                                <li><a href="https://github.com/Moe-Zoubi/Car-rental">Code <FontAwesomeIcon icon={faLink} /></a></li>
                                <li><a href="https://moe-car-rental.netlify.app/">Live Demo <FontAwesomeIcon icon={faLink} /></a></li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <div className="project-description">
                        <h4>E-commerce Website</h4>
                        <p>
                            This brand prioritizes the user experience, making 
                            it simple for customers to find and buy the things 
                            they need with an emphasis on simplicity and clean design.
                        </p>
                        <ul className="project-tech">
                            <li className="tech-item">
                                <li>React</li>
                                <li>Vanilla CSS</li>
                            </li>
                            <li className="tech-item">
                                <li><a href="https://github.com/Moe-Zoubi/Ecommerce-shop">Code <FontAwesomeIcon icon={faLink} /></a></li>
                                <li><a href="https://moe-ecommerce.netlify.app/">Live Demo <FontAwesomeIcon icon={faLink} /></a></li>
                            </li>
                        </ul>
                    </div>
                    <div className="project-img">
                        <img src={ecommerceWebsite} alt="e-commerce website" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;