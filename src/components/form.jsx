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
    };

    //to prevent the form from posting when submitted and refreshing the page
    function formSubmitHandler(event) {
        event.preventDefault();
    }

    return <form action="" onSubmit={formSubmitHandler}>
        <h1>New note</h1>
        <input value={form.title} name="title" onChange={handleChange} placeholder="Enter title"></input>
        <textarea value={form.note} name="note" onChange={handleChange} placeholder="Enter note"></textarea>
        <button onClick={() => {
            props.addNote(form);
            setForm({ title: "", note: "" });
        }} >Add</button>
    </form>
};

export default Form;