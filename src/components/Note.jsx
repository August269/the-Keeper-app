import React from "react";

function Note(props) {
    return <div className="note" onClick={() => (props.deleteItem(props.index))}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>;
};

export default Note;