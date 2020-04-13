import React from "react";
import { Cross } from "../../../assets/minComps/svgs";
export default function SideBar({ style, send }) {
  return (
    <div className="ExitButtonParent">
      <button style={style} onClick={() => send({ type: "back" })}>
        <Cross />
      </button>
    </div>
  );
}
