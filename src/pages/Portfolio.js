import React from "react";
import GalleryProjects from "../components/GalleryProjects";

function Portfolio() {
    const Projects = [
        {link: "https://dcox270891.github.io/password-generator/",
        name: "Password Generator",
        image: "",},
        {link: "https://nalinkane.github.io/Project-1/",
        name: "Restraunt Searcher",
        image: "",},
    ]

    return(<>
        <div>
            <h1 class="heading heading-text">Portfolio</h1>
        </div>
        <div class="gallery">
            {Projects.map(project => {
                    return <GalleryProjects name={project.name} link={project.link} image={project.image} />
                })};
        </div>
    </>)
}

export default Portfolio;