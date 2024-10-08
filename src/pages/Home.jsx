import { useState } from "react";
import NoteForm from "../components/NoteForm/index";
import NoteList from "../components/NoteList";

function Home() {
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

export default Home;
