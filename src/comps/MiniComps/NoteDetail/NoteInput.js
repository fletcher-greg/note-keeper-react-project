import React, { useState } from "react";
import Input from "./Input";
import { Cross } from "../../../assets/minComps/svgs";
import { types } from "../../../store/types";
const { update_main_note } = types;
export default function NoteInput({ children }) {
  return <div className="NoteInputParent">{children}</div>;
}

export function NoteTitle({ toggle, text, send, id }) {
  // capture user input
  const [input, setInput] = useState(() => text);
  return (
    <div className="NoteTitle">
      <Input input={input} setInput={setInput} />

      <button
        className="Save"
        onClick={() => {
          send({ type: "update", newText: { input, id } });
          toggle();
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

export function MainNote({ mainText, send, id }) {
  console.log(mainText);
  const [input, setInput] = useState(() => mainText);
  return (
    <div className="MainNoteParent">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button
          onClick={() => send({ type: update_main_note, data: { input, id } })}
          className="SaveBtn"
        >
          Save
        </button>
        <button className="ExitBtn">
          <Cross />
        </button>
      </div>
    </div>
  );
}
