import React, { useState } from "react";
import "./ContactFormStyle.css";
import cookerBackground from "@img/cookerBackground.png";
import InputField from "./InputField";
import LabelField from "./ContactLabel";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEnquiry, setEnteredEnquery] = useState("");
  const [enteredSubject, setEnteredSubject] = useState("");
  const [enteredMessages, setEnteredMessages] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    alert(`Hi ${enteredName}, your form has been sent successfully!`);
    event.target.reset();
  };

  const nameChanged = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChanged = (event) => {
    setEnteredEmail(event.target.value);
  };

  const enquiryChanged = (event) => {
    setEnteredEnquery(event.target.value);
  };

  const subjectChanged = (event) => {
    setEnteredSubject(event.target.value);
  };

  const messagesChanged = (event) => {
    setEnteredMessages(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="form__section">
      <section className="title__section">
        <h1 className="form__title">Contact us</h1>
      </section>
      <section className="image__section">
        <img
          src="../../../public/assets/img/cookerBackground.png"
          className="cooker__picture"
          />
      </section>

          {/* 
            Notes para kelly
            
            classePadraoContainer {
              estilizacoes
            }

            ex de variacoes:

            classePadraoContainer--email
            classePadraoInput--select
          
          */}
      <section className="input__section__name">
        <LabelField for="input__name" id="input__title">
          {" "}
          NAME{" "}
        </LabelField>
        <InputField
          type="text"
          value1={enteredName}
          className="input__name"
          pattern="[A-Za-z]{2,50}"
          placeholder="Enter your name..."
          onChange={nameChanged}
          required
        />
      </section>

      <section className="input__section__email">
        <LabelField for="input__email" id="input__title">
          {" "}
          EMAIL ADDRESS{" "}
        </LabelField>
        <InputField
          type="email"
          value={enteredEmail}
          className="input__email"
          placeholder="Your email address..."
          onChange={emailChanged}
          required
        />
      </section>

      <section className="input__section__enquiry">
        <LabelField for="input__enquiry" id="input__title">
          {" "}
          ENQUIRY TYPE{" "}
        </LabelField>
        <select
          value={enteredEnquiry}
          className="input__enquiry"
          onChange={enquiryChanged}
        >
          <option value="" disabled defaultValue hidden>
            {" "}
            Advertising{" "}
          </option>
          <option value="a"> </option>
          <option value="b"> </option>
        </select>
      </section>

      <section className="input__section__subject">
        <LabelField for="input__subject" id="input__title">
          {" "}
          SUBJECT{" "}
        </LabelField>
        <InputField
          type="text"
          value={enteredSubject}
          className="input__subject"
          placeholder="Enter subject..."
          onChange={subjectChanged}
          required
        />
      </section>

      <section className="input__section__messages">
        <LabelField for="input__messages" id="input__title">
          {" "}
          MESSAGES{" "}
        </LabelField>
        <textarea
          value={enteredMessages}
          className="input__messages"
          placeholder="Enter your messages..."
          onChange={messagesChanged}
          required
        />
      </section>

      <SubmitButton className="button__submit"> Submit </SubmitButton>
    </form>
  );
};

export default ContactForm;
