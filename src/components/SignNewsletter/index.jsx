import React, { useState } from 'react';
import './NewsletterStyle.css';
import emailBackgroundMobile from '../../../public/assets/img/emailBackgroundMobile.png';

const SignNewsletter = () => {
    
    const submitNewsHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }
    
    return (
        <section>
            <div>
                <h1>Deliciousness to your inbox</h1>
                <p className="inviteText">Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqut enim ad minim </p>
            </div>
            <form onSubmit={submitNewsHandler}>
                <div className="insertEmail">
                    <input type="email" className="input" placeholder="Your email address..." required/>
                </div>

                <div className="styleButton">
                    <button type="submit" className="btn"> Submit </button>
                </div>
        </form>
        </section>
    )

};

export default SignNewsletter;