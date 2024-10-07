import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm/index";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <main className="container">
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </main>
  );
}

export default App;
