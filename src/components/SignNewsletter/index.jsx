import React, { useState } from "react";
import "./NewsletterStyle.css";
import SubmitButton from "./../ContactForm/SubmitButton";
import InputField from "./../ContactForm/InputField";
import emailBackgroundMobile from "../../../public/assets/img/emailBackgroundMobile.png";
import emailBackground from "../../../public/assets/img/emailBackground.png";

const SignNewsletter = () => {
    const submitNewsHandler = (event) => {
      event.preventDefault();
      alert("Now you are subscribed!")
      event.target.reset();
    };

  return (
    <section className="newsletter__container">
      <section className="newsletter__image">
        <div>
          <h1 className="newsletter__image--title">Deliciousness to your inbox</h1>
          <p className="newsletter__invite-text">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div>
          <form className="newsletter__form" onSubmit={submitNewsHandler}>
            <label for="input__email" />
            <input name="input__newsletter" type="email" className="input__email--newsletter" placeholder="Your email address..." />
            <button type="submit" className="button__submit newsBtn">Subscribe</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default SignNewsletter;