import React from "react";

function GalleryProjects({link, name, image}) {
    return (<>
    <div className="gallery-photo column--desktop-4">
        <a href={link} target="blank">
            <img className="gallery-photo" src={image}/>
        </a>    
        <div className="gallery-collar">
            {name}
        </div>
    </div>
    </>)
};

export default GalleryProjects;