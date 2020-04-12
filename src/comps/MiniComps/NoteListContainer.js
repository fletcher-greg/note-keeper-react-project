import React from "react";

export default function NoteListContainer({ listData, send }) {
  return (
    <div className="NoteList">
      <div>
        {listData.map(({ text }, i) => (
          <div
            className="Note"
            onClick={() => send({ type: "open", id: i })}
            key={i}
          >
            <p>{text}</p>
          </div>
        ))}

        <div>
          <button onClick={() => send({ type: "add_note" })}>Add Note </button>
        </div>
      </div>
    </div>
  );
}
