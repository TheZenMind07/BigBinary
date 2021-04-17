import React, { useState } from "react";

function App() {
    const [color, setcolor] = useState("white");

    function mouseOut() {
        setcolor("white");
    }
    function mouseOver() {
        setcolor("black");
    }
    return (
        <div className="container">
            <h1>Hello</h1>
            <input type="text" placeholder="What's your name?" />
            <button style={{ backgroundColor: color }} onMouseOut={mouseOut} onMouseOver={mouseOver}>
                Submit
            </button>
        </div>
    );
}

export default App;
