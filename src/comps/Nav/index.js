import React from "react";
import "./Nav.scss";
import ColorPicker from "../ColorPicker";
export default function Nav({ toggle }) {
  return (
    <div className="NavParent">
      <nav className="NavWrapper">
        <div className="NavTitle">Note Keep</div>
        <ul>
          <li onClick={toggle}>Colour Settings</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
        </ul>
      </nav>
      <ColorPicker />
    </div>
  );
}
