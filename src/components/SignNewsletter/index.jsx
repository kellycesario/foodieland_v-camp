import React, { useState } from 'react';
import './NewsletterStyle.css';
import emailBackgroundMobile from '../../../public/assets/img/emailBackgroundMobile.png';

const SignNewsletter = () => {
    
    const submitNewsHandler = (event) => {
        event.preventDefault();
        console.log(event);
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
            <form onSubmit={submitNewsHandler}>
                <div className="insertEmail">
                    <input type="email" className="input" placeholder="Your email address..." required/>
                </div>

                 <button type="submit" className="btn"> Submit </button>
                
            </form>
        </section>
        </section>
    )

};

export default SignNewsletter;