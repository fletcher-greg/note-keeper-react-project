import React, { useState } from "react";
import Input from "./Input";
export default function NoteTitle({ text, send, id }) {
  // capture user input
  const [input, setInput] = useState(() => text);
  return (
    <div className="NoteTitle">
      <Input input={input} setInput={setInput} />

      <button
        className="Save"
        onClick={() => {
          send({ type: "update", newText: { input, id } });
        }}
      >
        Save
      </button>
      <button
        className="Remove"
        onClick={() => send({ type: "remove", id: id })}
      >
        Delete Note
      </button>
    </div>
  );
}
