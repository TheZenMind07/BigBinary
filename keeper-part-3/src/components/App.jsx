import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(prev => {
            return [...prev, note];
        });
    }

    function deleteNote(id) {
        setNotes(prev => {
            return prev.filter((note, index) => index !== id);
        });
    }

    return (
        <div>
            <Header />
            <CreateArea add={addNote} />
            {notes.map((note, index) => {
                return <Note key={index} id={index} del={deleteNote} title={note.title} content={note.content} />;
            })}
            {/* <Note key={1} id =title="Note title" content="Note content" /> */}
            <Footer />
        </div>
    );
}

export default App;
