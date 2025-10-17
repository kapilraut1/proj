import React, { useState } from "react";
import Notestaker from "./components/Notestaker";
import Noteslist from "./components/Noteslist";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    if (!note.content.trim()) return; // ignore empty notes
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, _id: Date.now().toString() },
    ]);
  }

  return (
    <>
      <div className="text-3xl font-bold text-green-500 flex justify-center items-center py-4">
        Notes App 📝
      </div>
      <Notestaker onAddNote={addNote} />
      <Noteslist notes={notes} />
    </>
  );
}

export default App;
