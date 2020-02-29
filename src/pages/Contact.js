import React from "react";

import "../assets/css/form.css";
import "../assets/css/gallery.css";
import "../assets/css/style.css";

function Contact() {
    return(<>
        <div>
            <h1 className="heading heading-text">Contact us</h1>
        </div>
        <form className="form main-text" action="mailto:d.cox.270891@gmail.com?subject=contact form" method="post" enctype="text/plain">
            <div className="group"v>
                <label className="label" for="first-name">
                    First name: 
                </label>
                <input id="first-name" className="input" type="text" name="first-name" placeholder="First name" autofocus/>
            </div>
            <div className="group">
                <label className="label" for="last-name">
                    Last name: 
                </label>
                <input id="last-name" className="input" type="text" name="last-name" placeholder="Last name"/>
            </div>
            <div className="group">
                <label className="label" for="email">
                    Email:
                </label> 
                <input id="email" className="input" type="email" name="email" placeholder="Bob@gmail.co.uk"/>
            </div>
            <div className="group">
                <label className="label" for="message">
                    Message: 
                </label>
                <textarea id="massage" className="input message" name="message" >
                    Write your message here...
                </textarea>
            </div>
            <input className="button" type="submit" value="Send"/>
        </form>
        <p className="main-text">
            You can also contact me on:<br/>
            <a href="https://www.linkedin.com/in/daniel-cox-979209194/" target="blank">LinkedIn</a><br/>
            <a href="https://github.com/Dcox270891" target="blank">GitHub</a><br/>
        </p>
    </>);
};

export default Contact;