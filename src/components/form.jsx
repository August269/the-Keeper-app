import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Form(props) {
    const [form, setForm] = useState({ title: "", note: "" });
    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setForm(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    };

    //to modify the isExpanded state when the input text-area is clicked
    function handleExpansion() {
        setIsExpanded(true);
    }

    //to prevent the form from posting when submitted and refreshing the page
    function formSubmitHandler(event) {
        event.preventDefault();
    }

    return <form action="" onSubmit={formSubmitHandler} className="create-note" >
        <input value={form.title} name="title" onChange={handleChange} placeholder="Title" className={!isExpanded && "visually-hidden"}></input>
        <textarea value={form.note} name="note" onChange={handleChange} placeholder="Create a note..." rows={isExpanded ? 3 : 1} onClick={handleExpansion}></textarea>
        <Zoom in={isExpanded}>
            <Fab onClick={() => {
                props.addNote(form);
                setForm({ title: "", note: "" });
                setIsExpanded(false);
            }} >
                <AddCircleOutlineIcon />
            </Fab>
        </Zoom>
    </form>
};

export default Form;