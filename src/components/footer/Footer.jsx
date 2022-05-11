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
                            <a href="">Recipes</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                    </ul>
                    <hr />

                </nav>

                <p className="flowbaseCopyright">© 2020 Flowbase. Powered by <span className="highlight">Webflow</span></p>


                <div className="socialMediaDiv">
                    <nav className="socialMediaNav">
                        <ul>
                            <li>
                                <a href="">
                                    <img src={facebookLogo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={twitterLogo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={instagramLogo} alt="" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

