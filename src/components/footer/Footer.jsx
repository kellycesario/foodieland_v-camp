import React from "react";
import './footer.css'
import foodieLandLogo from './../../assets/icons/foodielandLogo.svg'
import facebookLogo from './../../assets/icons/facebookLogo.svg'
import twitterLogo from './../../assets/icons/twitterLogo.svg'
import instagramLogo from './../../assets/icons/instagramLogo.svg'


export default function Footer() {
    return (
        <footer>
            <div className="containerDiv">

                <div className="containerHeaderDiv">
                    <img src={foodieLandLogo} />
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>

                <nav className="navThroughPages">
                    <ul>
                        <li>
                            Recipes
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            About us
                        </li>
                    </ul>
                    
                    <hr />
                </nav>



                <div className="socialMediaDiv">
                    <label htmlFor="footerSocialMediaNav">© 2020 Flowbase. Powered by Webflow
                    </label>
                    <nav id="socialMediaNav">
                        <ul>
                            <li>
                                <img src={facebookLogo} alt="" />
                            </li>
                            <li>
                                <img src={twitterLogo} alt="" />
                            </li>
                            <li>
                                <img src={instagramLogo} alt="" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

