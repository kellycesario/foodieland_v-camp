import React, { useState } from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
        const [enteredName, setEnteredName] = useState('');
        const [enteredEmail, setEnteredEmail] = useState('');
        const [enteredEnquiry, setEnteredEnquery] = useState('');
        const [enteredSubject, setEnteredSubject] = useState('');
        const [enteredMessages, setEnteredMessages] = useState('');

        const nameChanged = (event) => {
            setEnteredName(event.target.value)
        };

        const emailChanged = (event) => {
            setEnteredEmail(event.target.value)
        };

        const enquiryChanged = (event) => {
            setEnteredEnquery(event.target.value)
        };

        const subjectChanged = (event) => {
            setEnteredSubject(event.target.value)
        };

        const messagesChanged = (event) => {
            setEnteredMessages(event.target.value)
        };

    return (
        <form>
            <div className="formStyle">
                <h1 className="formStyleContact">Contact us</h1>
                    <section className="titles">
                        <label>NAME</label>
                    <div className="formStyleName">
                        <input type="text" onChange={nameChanged} className="formPlaceholder" placeholder="Enter your name..." required />
                    </div>
                    </section>

                    <section className="titles">
                    <label>EMAIL ADDRESS</label>
                <div className="formStyleEmail">
                    <input type="email" onChange={emailChanged} className="formPlaceholder" placeholder="Your email address..." required />
                </div>
                </section>

                <section className="titles">
                <label>ENQUIRY TYPE</label>
                <div className="formStyleEnquiry" placeholder="Advertising">
                    <input type="/" onChange={enquiryChanged} placeholder="Advertising" />
                    <select className="formPlaceholder">
                        <option value="a">  </option>
                        <option value="b">  </option>
                    </select>
                </div>
                </section>
                
                <section className="titles">
                <label>SUBJECT</label>
                <div className="formStyleSubject">
                    <input type="text" onChange={subjectChanged} className="formPlaceholder" placeholder="Enter subject..." required /> 
                </div>
                </section>

                <section className="titles">
                <label>MESSAGES</label>

                <div className="formStyleMessages">
                    <input type="text" onChange={messagesChanged} className="formPlaceholder" placeholder="Enter your messages..." required />
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