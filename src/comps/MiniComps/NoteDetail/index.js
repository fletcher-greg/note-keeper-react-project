import React, { useState } from "react";
import "./NoteDetail.scss";
import SideBar from "./SideBar";
import NoteInput from "./NoteInput";
import { NoteTitle } from "./NoteInput";
import { MainNote } from "./NoteInput";
import useButtonColor from "../../../utils/useButtonColor";
export default function NoteDetail({ send, noteData, id }) {
  // get button styles and toggle them. Also save note on change
  const { toggle, style } = useButtonColor();
  const { mainText, text } = noteData;
  const titleProps = { toggle, send, id, text };
  const mainNoteProps = { mainText, send, id };
  return (
    <div className="NoteDetail">
      <div className="GridParent">
        <SideBar style={style} send={send} />
        <NoteInput>
          <NoteTitle {...titleProps} />
          <MainNote {...mainNoteProps} />
        </NoteInput>
      </div>
    </div>
  );
}
