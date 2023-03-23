import React, { useState } from "react";

function Form(props) {
    const [form, setForm] = useState({ title: "", note: "" });

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setForm(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return <div className="form">
        <h1>New note</h1>
        <input value={form.title} name="title" onChange={handleChange} placeholder="Enter title"></input>
        <textarea value={form.note} name="note" onChange={handleChange} placeholder="Enter note"></textarea>
        <button onClick={() => {
            props.addNote(form);
            setForm({ title: "", note: "" });
        }} >Add</button>
    </div>;
};

export default Form;