import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  function
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input type="text" placeholder="What's your name?" value ={name} />
      <button onClick={click}>Submit</button>
    </div>
  );
}

export default App;
