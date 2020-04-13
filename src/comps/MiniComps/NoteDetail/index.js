import React, { useState } from "react";
import "./NoteDetail.scss";
import SideBar from "./SideBar";
import NoteInput from "./NoteInput";

import useButtonColor from "../../../utils/useButtonColor";
export default function NoteDetail({ send, noteData, id }) {
  // capture user input
  const [input, setInput] = useState(() => noteData.text);
  // get button styles and toggle them. Also save note on change
  const { toggle, style } = useButtonColor();
  const noteInputProps = { input, noteData, setInput, toggle, send, id };
  return (
    <div className="NoteDetail">
      <div className="GridParent">
        <SideBar style={style} send={send} />
        <NoteInput {...noteInputProps} />
      </div>
    </div>
  );
}
