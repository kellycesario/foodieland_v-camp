import React, { useState } from "react";
import "./NewsletterStyle.css";
import SubmitButton from "./../ContactForm/SubmitButton";
import InputField from "./../ContactForm/InputField";
import emailBackgroundMobile from "../../../public/assets/img/emailBackgroundMobile.png";
import emailBackground from "../../../public/assets/img/emailBackground.png";

const SignNewsletter = () => {
    const submitNewsHandler = (event) => {
      event.preventDefault();
      alert(event.target.inputNewsLetter.value)
      event.target.reset();
    };

  return (
    <section className="container">
      <section className="imgNewsletter">
        <div>
          <h1 className="imgTextTitle">Deliciousness to your inbox</h1>
          <p className="inviteText">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="">
          <form className="formNewsLetter" onSubmit={submitNewsHandler}>
            <label for="inputEmail" />
            <input 
                name="inputNewsLetter"
              type="email"
              className="emailInputFix"
              placeholder="Your email address..."
            />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default SignNewsletter;
