import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
        event.target.reset();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formStyle">
                <h1 className="formStyleContact">Contact us</h1>
                <section>
                    <label for="inputName" className="title">NAME</label>
                        <input type="text" id="inputName" pattern="[A-Za-z]{2,50}" placeholder="Enter your name..." required />
                </section>

                <section>
                    <label for="inputEmail" className="title">EMAIL ADDRESS</label>
                        <input type="email" id="inputEmail" placeholder="Your email address..." required />
                </section>

                <section>
                    <label for="inputEnquiry" className="title">ENQUIRY TYPE</label>
                        <select id="inputEnquiry">
                            <option value ="" disabled selected hidden> Advertising</option>
                            <option value="a">  </option>
                            <option value="b">  </option>
                        </select>
                </section>

                <section>
                    <label for="inputSubject" className="title">SUBJECT</label>
                        <input type="text" id="inputSubject" placeholder="Enter subject..." required />
                </section>

                <section>
                    <label for="inputMessages" className="title">MESSAGES</label>
                        <textarea id="inputMessages" placeholder="Enter your messages..." required />
                </section>

                <button type="submit" className="btn"> Submit </button>
                
            </div>
        </form>
    );
};

export default ContactForm;