import { useState } from "react";
import React from "react";
import Notestaker from "./components/Notestaker";
import Noteslist from "./components/Noteslist";

function App() {
  const [notes, setNotes] = useState({ content: "" });

  async function addNote(note) {
    console.log("Adding ");
  }
  return (
    <>
      <div className="text-3xl font-bold text-green-300 flex justify-center items-center py-2">
        To do app
      </div>
      <Notestaker onAddNote={addNote} />
      <Noteslist notes={notes} />
    </>
  );
}

export default App;
