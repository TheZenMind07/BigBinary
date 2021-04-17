import React, { useState } from "react";

function App() {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    });

    function changeHandler(event) {
        const field = event.target.name;
        const val = event.target.value;
        console.log(event.target);
        if (field === "fName") {
            setFullName(prev => {
                return {
                    fname: val,
                    lname: prev.lname
                };
            });
        } else if (field === "lName") {
            setFullName(prev => {
                return {
                    fname: prev.fname,
                    lname: val
                };
            });
        }
    }

    // function clickHandler() {
    //     setfname(name);

    //     event.preventDefault();
    // }

    return (
        <div className="container">
            <h1>
                Hello {fullName.fname} {fullName.lname}
            </h1>
            <form>
                <input onChange={changeHandler} name="fName" placeholder="First Name" value={fullName.name} />
                <input onChange={changeHandler} name="lName" placeholder="Last Name" value={fullName.lname} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
