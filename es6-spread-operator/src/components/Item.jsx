import React, { useState } from "react";

function Item(props) {
    const [isDone, setisDone] = useState(false);

    function textDecoration() {
        setisDone(prev => {
            return !prev;
        });
    }

    return (
        <li
            style={{ textDecoration: isDone ? "line-through" : "none" }}
            onClick={() => {
                props.delClick(props.id);
            }}
        >
            {props.item}
        </li>
    );
}

export default Item;
