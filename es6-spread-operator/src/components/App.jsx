import React, { useState } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItem] = useState([]);
    function changeHandler() {
        setInputText(event.target.value);
    }
    function clickHandler() {
        setItem(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={changeHandler} type="text" value={inputText} />
                <button onClick={clickHandler}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map(currentitem => {
                        return <li> {currentitem} </li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
