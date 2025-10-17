import React from "react";

const Noteslist = ({ notes }) => {
  return (
    <div className="flex justify-center items-center flex-col ml-110 mt-30 border max-w-270 border-gray-300 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-blue-500">
        Your saved notes will appear here.
      </h2>
      <div className="mt-4 w-full max-w-md">
        {notes.length > 0 ? (
          notes.map((n) => (
            <div
              key={n._id}
              className="w-full p-2 mb-2 border rounded-md flex justify-between items-center"
            >
              {n.content}
              <div></div>
            </div>
          ))
        ) : (
          <p className="w-full p-2 rounded-md text-gray-500">
            No notes saved yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Noteslist;
