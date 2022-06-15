import React, { useState } from "react";

import "./NewsletterStyle.css";

const SignNewsletter = () => {
  const submitNewsHandler = (event) => {
    event.preventDefault();
    alert("Now you are subscribed!");
    event.target.reset();
  };

  return (
    <section className="newsletter">
      <section className="newsletter__image">
        <h1 className="newsletter__imageTitle">Deliciousness to your inbox</h1>
        <p className="newsletter__imageText">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <form className="newsletter__form" onSubmit={submitNewsHandler}>
          <label for="input__email" />
          <input
            name="input__newsletter"
            type="email"
            className="newsletter__input"
            placeholder="Your email address..."
          />
          {/* <MainInput InsideInput={true}></MainInput> */}
          <button className="btn btn--large btn--insideInput" >Submit</button>
        </form>
      </section>
    </section>
  );
};

export default SignNewsletter;
