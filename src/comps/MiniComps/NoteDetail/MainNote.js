import React, { useState } from "react";

import { Cross } from "../../../assets/minComps/svgs";
import { types } from "../../../store/types";
const { update_main_note } = types;
export default function MainNote({ mainText, send, id }) {
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
