import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setNote(prev => {
            return { ...prev, [name]: value };
        });
    }

    return (
        <div>
            <form
                onSubmit={() => {
                    props.add(note);
                    setNote({ title: "", content: "" });
                    event.preventDefault();
                }}
            >
                <input onChange={changeHandler} name="title" placeholder="Title" value={note.title} />
                <textarea
                    onChange={changeHandler}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
