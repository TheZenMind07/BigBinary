import React, { useState } from "react";

import List from "./List";

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

    function delClick(id) {
        setItem(prevItems => {
            return prevItems.filter((item, index) => index !== id);
        });
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
            <List items={items} delClick={delClick} />
        </div>
    );
}

export default App;
