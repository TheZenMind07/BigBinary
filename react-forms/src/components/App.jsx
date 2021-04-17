import React, { useState } from "react";

function App() {
    const [name, setname] = useState("");
    const [fname, setfname] = useState("");
    function changeHandler() {
        setname(event.target.value);
    }

    function clickHandler() {
        setfname(name);

        event.preventDefault();
    }

    return (
        <div className="container">
            <form onSubmit={clickHandler}>
                <h1>Hello {fname} </h1>
                <input onChange={changeHandler} type="text" placeholder="What's your name?" value={name} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
