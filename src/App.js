import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import Noteslist from "./notes";
import Form from "./components/form";
import React, { useState } from "react";


function App() {
  const [list, updateList] = useState([]);

  //function to add items to the dynamic state list
  function addNote(item) {
    updateList(prevValues => {
      return [...prevValues,
        item
      ];
    });
  };

  function deleteItem(index) {
    updateList((prevItems) => {
      let tempList = [...prevItems];//use new list bc prevItems is immutable
      tempList.splice(index, 1);
      return tempList;
    })
  }

  return (
    <div className="App">
      <Header />
      <section>
        <Form
          addNote={addNote}
        />
      </section>
      <section>
        {list.map((item, index) => <Note
          key={index}
          index={index}
          title={item.title}
          content={item.note}
          deleteItem={deleteItem}
        />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
