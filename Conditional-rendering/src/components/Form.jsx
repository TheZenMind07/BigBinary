import React from "react";

import Input from "./Input";
function Form(props) {
    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {props.button === "Register" && <Input type="password" placeholder="Confirm Password" />}
            <button type="submit">{props.button}</button>
        </form>
    );
}

export default Form;
