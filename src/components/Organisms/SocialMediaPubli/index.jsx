import React from "react";
import PubliCard from "../../Molecules/PubliCard";

import "./style.scss"

import post1 from "@img/post1.png";
import post2 from "@img/post2.png";
import post3 from "@img/post3.png";
import post4 from "@img/post4.png";

import instagramIcon from "@img/instagramIcon.png";

const SocialMediaPubli = () => {

    return (
        <section className="socialMediaPubli">
            <h1 className="socialMediaPubli__title">Check out @foodieland_te on Instagram</h1>
            <p className="socialMediaPubli__text">Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqut enim ad minim </p>
        <ul className="socialMediaList">

            <li className="socialMediaItem">                     
                <a target="_blank" href="https://www.instagram.com/p/CeycrxFLuCO/">
                    <PubliCard
                    img={post1}
                    />
                </a>
            </li> 

            <li className="socialMediaItem">  
                <a target="_blank" href="https://www.instagram.com/p/CeycXQirv-n/">
                    <PubliCard
                    img={post2}
                    />
                </a>
            </li>

            <li className="socialMediaItem"> 
                <a target="_blank" href="https://www.instagram.com/p/CeycIpeLT9n/">
                    <PubliCard
                    img={post3}
                    />
                </a>
            </li>

            <li className="socialMediaItem">
                <a target="_blank" href="https://www.instagram.com/p/Ceyb0zMrZB9/">
                    <PubliCard
                    img={post4}
                    />
                </a>
            </li>

        </ul>
        
        <a target="_blank" href="https://www.instagram.com/foodieland_te/">
            <button className="socialMediaPubli__button"> Visit Our Instagram
                <img src={instagramIcon} /> 
            </button>
        </a>

        </section>
    );
}

export default SocialMediaPubli;