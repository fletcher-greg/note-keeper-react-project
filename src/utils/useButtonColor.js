import React, { useState } from "react";
const stateMachine = {
  initialState: "unsaved",
  states: { unsaved: { toggle: "saved" }, saved: { toggle: "unsaved" } },
};

export default function useButtonColor() {
  const [saved, setSaved] = useState(stateMachine.initialState);
  const cycle = (event) => setSaved(stateMachine.states[saved][event]);
  const styles = { background: saved === "saved" ? "green" : "white" };
  function toggle() {
    if (saved === "unsaved") cycle("toggle");
  }
  return { toggle, styles };
}
