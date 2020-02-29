import React from "react";
import GalleryProjects from "../components/GalleryProjects";

import "../assets/css/form.css";
import "../assets/css/gallery.css";
import "../assets/css/style.css";

function Portfolio() {
    const projects = [
        {
            link: "http://stark-plateau-24544.herokuapp.com/",
            name: "Poll App",
            image: "../assets/images/",
        },
        {
            link: "https://nalinkane.github.io/Project-1/",
            name: "Restraunt Searcher",
            image: "../assets/images/food-search",
        },
        {
            link: "https://dcox270891.github.io/password-generator/",
            name: "Password Generator",
            image: "../assets/images/password-generator",
        },
        {
            link: "https://dcox270891.github.io/reactPortfolio/",
            name: "My React Portoflio",
            image: "../assets/images/",
        },
        {
            link: "https://github.com/Dcox270891/class-register",
            name: "Class Register",
            image: "../assets/images/",
        },
        {
            link: "https://github.com/Dcox270891/fitness-tracker/settings",
            name: "Fitness Tracker",
            image: "../assets/images/",
        },
    ]

    return(<>
        <div>
            <h1 className="heading heading-text">Portfolio</h1>
        </div>
        <div className="gallery">
            {
                projects.map(project => {
                    return <GalleryProjects
                        name={project.name} 
                        link={project.link} 
                        image={project.image} />
                })
            };
        </div>
    </>)
}

export default Portfolio;