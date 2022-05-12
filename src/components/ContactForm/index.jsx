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
                <section>
                    <label className="title">NAME</label>
                    <div className="formStyleName">
                        <input type="text" id="inputForm" pattern="[A-Za-z]{2,50}" className="formPlaceholder" placeholder="Enter your name..." required />
                    </div>
                </section>

                <section>
                    <label className="title">EMAIL ADDRESS</label>
                    <div className="formStyleEmail">
                        <input type="email" id="inputForm" className="formPlaceholder" placeholder="Your email address..." required />
                    </div>
                </section>

                <section>
                    <label className="title">ENQUIRY TYPE</label>
                    <div className="formStyleEnquiry" placeholder="Advertising">
                        <input type="" id="inputForm" placeholder="Advertising" />
                        <select className="formPlaceholder" id="idSelect">
                            <option value="a">  </option>
                            <option value="b">  </option>
                        </select>
                    </div>
                </section>

                <section>
                    <label className="title">SUBJECT</label>
                    <div className="formStyleSubject">
                        <input type="text" id="inputForm" className="formPlaceholder" placeholder="Enter subject..." required />
                    </div>
                </section>

                <section>
                    <label className="title">MESSAGES</label>
                    <div className="formStyleMessages">
                        <input type="text" id="inputForm" className="formPlaceholder" placeholder="Enter your messages..." required />
                    </div>
                </section>

                <div>
                    <button type="submit" className="btn"> Submit </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;