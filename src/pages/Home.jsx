import { useContext, useEffect, useState } from "react";
import NoteForm from "../components/NoteForm/index";
import NoteList from "../components/NoteList";
import AuthContext from "../context/AuthContext";
import BaseNavbar from "../components/Base/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <main className="container">
      <BaseNavbar />
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </main>
  );
}

export default Home;
