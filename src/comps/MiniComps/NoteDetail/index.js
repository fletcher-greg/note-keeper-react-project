import React, { useState } from "react";
import "./NoteDetail.scss";
// import SideBar from "./SideBar";
// import NoteInput from "./NoteInput";
// import { NoteTitle } from "./NoteInput";
// import { MainNote } from "./NoteInput";
// import useButtonColor from "../../../utils/useButtonColor";
export default function NoteDetail({ children }) {
  return (
    <div className="NoteDetail">
      <div className="GridParent">{children}</div>
    </div>
  );
}
