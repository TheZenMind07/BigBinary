import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
    return <div className="container">{userIsRegistered ? <Form button="Register" /> : <Form button="Login" />}</div>;
}

export default App;
