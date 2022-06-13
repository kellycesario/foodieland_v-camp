import React from "react";
import "./mainFooter.css";
import "./mediaQuerie.css";
import database from "./../../../../database.json";
import foodieLandLogo from "@icons/foodielandLogo.svg";

export default function MainFooter() {
  return (
    <footer>
      <div className="containerDiv">
        <div className="topContainer">
          <div className="containerHeaderDiv">
            <img src={foodieLandLogo} />
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>

          <nav className="navThroughPages">
            <ul>
              <li>
                <a href="/recipes">Recipes</a>
              </li>
              <li>
                <a href="/blogListPage">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/aboutUs">About us</a>
              </li>
            </ul>
          </nav>
        </div>

        <hr />

        <div className="bottomContainer">
          <p className="flowbaseCopyright">
            © 2020 Flowbase. Powered by{" "}
            <span className="highlight">Webflow</span>
          </p>

          <div className="socialMediaDiv">
            <nav className="socialMediaNav">
              <ul>
                {database.socialMedia.forEach((el) => {
                  console.log("");
                })}

                {/* temp Save */}
                <li>
                  <a href="">
                    <img src={database.socialMedia[0].image} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={database.socialMedia[1].image} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={database.socialMedia[2].image} alt="" />
                  </a>
                  {/* temp Save */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
