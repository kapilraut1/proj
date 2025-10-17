import React from "react";

const Notestaker = ({ onAddNote }) => {
  const [note, setNote] = React.useState({ content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(note);
    console.log(note);
    setNote({ content: "" });
  };

  return (
    <div className="flex justify-center items-center flex-col ml-110 border max-w-270 border-gray-300 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-blue-500">
        You can take your notes here.
      </h2>
      <div className="mt-4 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-40 p-2 border border-black-300 "
            placeholder="Write your notes here."
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          ></textarea>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            type="submit"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notestaker;
