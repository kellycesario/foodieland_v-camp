import React from 'react';
import './NewsletterStyle.css';
import emailBackgroundMobile from './../../assets/img/emailBackgroundMobile.png';

const SignNewsletter = () => {
    return (
        <section>
            <div>
                <img src={emailBackgroundMobile} alt="" />
            </div>

            <div>
                <h1>Deliciousness to your inbox</h1>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqut enim ad minim </p>
            </div>

            <div>
                <input type="email" placeholder="Your email address..."/>
            </div>

            <div className="formStyleButton">
                    <button type="submit" className="btn"> Submit </button>
            </div>
        </section>
    )

};

export default SignNewsletter;