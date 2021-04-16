import React from "react";

import Notes from "../notes";
import Note from "./Note";

function List() {
    return (
        <div>
            {Notes.map(currentNote => {
                return <Note title={currentNote.title} key={currentNote.key} content={currentNote.content} />;
            })}
        </div>
    );
}

export default List;
