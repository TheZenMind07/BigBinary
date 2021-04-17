import React, { useState } from "react";

function App() {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function clickHandler(event) {
        //   let field = event.target.name;
        // let val = event.target.value;
        const { name, value } = event.target;
        console.log(event.target);

        // if (field === "fName") {
        //     setContact(prev => {
        //         return {
        //             fName: val,
        //             lName: prev.lName,
        //             email: prev.email
        //         };
        //     });
        // } else if (field === "lName") {
        //     setContact(prev => {
        //         return {
        //             fName: prev.fName,
        //             lName: val,
        //             email: prev.email
        //         };
        //     });
        // } else if (field === "email") {
        //     setContact(prev => {
        //         return {
        //             fName: prev.fName,
        //             lName: prev.lName,
        //             email: val
        //         };
        //     });
        // }
        setContact(prev => {
            return { ...prev, [name]: value };
        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input onChange={clickHandler} name="fName" placeholder="First Name" value={contact.fName} />
                <input onChange={clickHandler} name="lName" placeholder="Last Name" value={contact.lName} />
                <input onChange={clickHandler} name="email" placeholder="Email" value={contact.email} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
