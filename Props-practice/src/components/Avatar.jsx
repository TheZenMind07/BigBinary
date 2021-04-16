import React from "react";

function Avatar(props) {
    return (
        <div>
            <img className="circle-img" src={props.src} alt={props.alt} />
        </div>
    );
}

export default Avatar;
