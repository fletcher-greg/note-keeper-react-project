import React from "react";
import formatText from "../utils/formatText";
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
            <p>{formatText(text, 8)}</p>
          </div>
        ))}

        <div>
          <button onClick={() => send({ type: "add_note" })}>Add Note </button>
        </div>
      </div>
    </div>
  );
}
