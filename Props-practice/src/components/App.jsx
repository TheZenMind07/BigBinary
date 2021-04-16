import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import contacts from "../contacts";

function App() {
    return (
        <div>
            <Heading title="My Contacts" />
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                avatar="avatar_img"
                mobile={contacts[0].phone}
                mail={contacts[0].email}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                avatar="avatar_img"
                mobile={contacts[1].phone}
                mail={contacts[1].email}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].imgURL}
                avatar="avatar_img"
                mobile={contacts[2].phone}
                mail={contacts[2].email}
            />
        </div>
    );
}

export default App;
