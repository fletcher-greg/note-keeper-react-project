import React, { useState } from "react";
import Input from "./Input";
import { Cross } from "../../../assets/minComps/svgs";
import { types } from "../../../store/types";
const { update_main_note } = types;
export default function NoteInput({
  noteData,
  input,
  toggle,
  setInput,
  send,
  id,
}) {
  const titleProps = { noteData, input, toggle, setInput, send, id };

  return (
    <div className="NoteInputParent">
      <NoteTitle {...titleProps} />
      <MainNote mainText={noteData.mainText} send={send} id={id} />
    </div>
  );
}

function NoteTitle({ input, toggle, setInput, send, id }) {
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

function MainNote({ mainText, send, id }) {
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
