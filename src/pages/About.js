import React from "react";

import "../assets/css/form.css";
import "../assets/css/gallery.css";
import "../assets/css/style.css";

function Index() {
    return(<>
        <div>
            <h1 className="heading heading-text">About me</h1>
        </div>
        <div className="main-text">    
            <img  className="photo" src="assets\images\me.png" height="300px" alt="Picture of me"/>
            <p>My name is Daniel Cox, I am currently working for Quick Consign as a coder and trainer of our platform.
                I am also currently undergoing a boot-camp course with University of Birmingham learning to become a full stack develeoper.
                On this Webisite i would like to show you some of the work i have completed.
            </p>
        </div>
        </>);
}

export default Index;