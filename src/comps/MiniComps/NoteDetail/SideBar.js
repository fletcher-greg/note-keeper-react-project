import React from "react";
import { Cross } from "../../../assets/minComps/svgs";
export default function SideBar({ send, data }) {
  console.log("sidebar");
  console.log(data.mainText);
  return (
    <div className="ExitButtonParent">
      <button onClick={() => send({ type: "back" })}>
        <Cross />
      </button>
    </div>
  );
}
