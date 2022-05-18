import React, { useState } from 'react';
import './NewsletterStyle.css';
import SubmitButton from "./../ContactForm/SubmitButton";
import InputField from "./../ContactForm/InputField";
import emailBackgroundMobile from '../../../public/assets/img/emailBackgroundMobile.png';
import emailBackground from '../../../public/assets/img/emailBackground.png';

const SignNewsletter = () => {
    
    const submitNewsHandler = (event) => {
        event.preventDefault();
        console.log(event);
        alert("Seu formulário foi enviado com sucesso!")
        event.target.reset();
    }
    
    return (
        <section className="container">
        <section className="imgNewsletter">
            <div>
                <h1 className="imgTextTitle">Deliciousness to your inbox</h1>
                <p className="inviteText">Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqut enim ad minim </p>
            </div>
            <div className="box">
            <form onSubmit={submitNewsHandler}>
                <InputField for="inputEmail" type="email" id="inputEmail" placeholder="Your email address...">  </InputField>
                <SubmitButton className="btn"> Submit </SubmitButton>
            </form>
            </div>
        </section>
        </section>
    )

};

export default SignNewsletter;