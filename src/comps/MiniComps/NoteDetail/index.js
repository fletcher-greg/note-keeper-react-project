import React from "react";
import "./NoteDetail.scss";

export default function NoteDetail({ children }) {
  return (
    <div className="NoteDetail">
      <div className="GridParent">{children}</div>
    </div>
  );
}
