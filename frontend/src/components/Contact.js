import React from 'react';
import { useState, useEffect } from 'react';

import './comp-styles.css';


export default function Contact() {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    
    return (
    <>  
    <div className="container">
        <h2>Contact us</h2>
        <p>You got inspried and have even more ideas? Share them with us. LoreLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> 
    
        <form id="contactForm" onSubmit={handleSubmit}>
            <div className="flex-container">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" required />
            </div>
            <div className="flex-container">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" required />
            </div>
            <div className="flex-container">
                <label htmlFor="message">Message: </label>
                <textarea id="message" required />
            </div>
            <button style={{marginTop: "20px"}} type="submit">{status}</button>
        </form>
    </div>
        </>
    );
};

