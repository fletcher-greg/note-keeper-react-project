import React, { useEffect, useState } from "react";
import Input from "./Input";
import useButtonColor from "../../utils/useButtonColor";
export default function NoteDetail({ send, text, id }) {
  // capture user input
  const [input, setInput] = useState(() => "");
  // get button styles and toggle them. Also save note on change
  const { toggle, style } = useButtonColor();
  return (
    <div className="NoteDetail">
      <div>
        <button style={style} onClick={() => send({ type: "back" })}>
          <span aria-label="finger pointing back" role="img">
            👈
          </span>
        </button>
        Details
        <div>current Text: {text.text}</div>
        <div>
          <Input input={input} setInput={setInput} />
          <button
            onClick={() => {
              send({ type: "update", newText: { input, id } });
              toggle();
            }}
          >
            Save
          </button>
          <button onClick={() => send({ type: "remove", id: id })}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
