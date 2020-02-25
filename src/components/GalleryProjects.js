import React from "react";

function GalleryProjects({link, name, image}) {
    return (<>
    <div class="gallery-photo column--desktop-4">
        <a href={link} target="blank">
            <img class="gallery-photo" src={image}/>
        </a>    
        <div class="gallery-collar">
            {name}
        </div>
    </div>
    </>)
};

export default GalleryProjects;