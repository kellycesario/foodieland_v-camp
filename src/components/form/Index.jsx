import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="formStyle">
                <h1 className="formStyleContact">Contact us</h1>
                <section className="titles">
                    <label>NAME</label>
                    <div className="formStyleName">
                        <input type="text" pattern="[A-Za-z]" className="formPlaceholder" placeholder="Enter your name..." required />
                    </div>
                </section>

                <section className="titles">
                    <label>EMAIL ADDRESS</label>
                    <div className="formStyleEmail">
                        <input type="email" className="formPlaceholder" placeholder="Your email address..." required />
                    </div>
                </section>

                <section className="titles">
                    <label>ENQUIRY TYPE</label>
                    <div className="formStyleEnquiry" placeholder="Advertising">
                        <input type="" placeholder="Advertising" />
                        <select className="formPlaceholder">
                            <option value="a">  </option>
                            <option value="b">  </option>
                        </select>
                    </div>
                </section>

                <section className="titles">
                    <label>SUBJECT</label>
                    <div className="formStyleSubject">
                        <input type="text" className="formPlaceholder" placeholder="Enter subject..." required />
                    </div>
                </section>

                <section className="titles">
                    <label>MESSAGES</label>
                    <div className="formStyleMessages">
                        <input type="text" className="formPlaceholder" placeholder="Enter your messages..." required />
                    </div>
                </section>

                <div className="formStyleButton">
                    <button type="submit" className="btn"> Submit </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;