import React from "react";

import Item from "./Item";
function List(props) {
    return (
        <div>
            <ul>
                {props.items.map((currentitem, index) => {
                    return <Item key={index} id={index} item={currentitem} delClick={props.delClick} />;
                })}
            </ul>
        </div>
    );
}

export default List;
