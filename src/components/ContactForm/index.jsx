import React, { useState } from "react";
import "./ContactFormStyle.css";
import cookerBackground from "../../../public/assets/img/cookerBackground.png";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    alert("Seu formulário foi enviado com sucesso!")
    event.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
        <div className="formStyle">
        <h1 className="formStyleContact">Contact us</h1>
        
        <div id="temp">
          
        <section>
            <img src="../../../public/assets/img/cookerBackground.png" id="cookerPicture" />
        </section>
          
        <section id="containerInputs">

            <InputField for="inputName" type="text" id="inputName" pattern="[A-Za-z]{2,50}" placeholder="Enter your name..." className="title"> NAME </InputField>
                
            <InputField for="inputEmail" type="email" id="inputEmail" placeholder="Your email address..." className="title"> EMAIL ADDRESS </InputField>
                
            <section>
                <label for="inputEnquiry" className="title"> ENQUIRY TYPE </label>
                <select id="inputEnquiry">
                    <option value="" disabled selected hidden> {" "} Advertising </option>
                    <option value="a"> </option>
                    <option value="b"> </option>
                </select>
            </section>

            <InputField for="inputSubject" type="text" id="inputSubject" placeholder="Enter subject..." className="title"> SUBJECT </InputField>

            <section>
                <label for="inputMessages" className="title"> MESSAGES </label>
                <textarea id="inputMessages" placeholder="Enter your messages..." required />

                <SubmitButton className="btn"> Submit </SubmitButton>
                
            </section>

        </section>

        </div>
        </div>
    </form>
  );
};

export default ContactForm;
