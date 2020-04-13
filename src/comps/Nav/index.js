import React from "react";
import "./Nav.scss";
export default function Nav() {
  return (
    <div className="NavParent">
      <nav className="NavWrapper">
        <div className="NavTitle">Note Keep</div>
        <ul>
          <li>Settings</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
          <li>Nav Item</li>
        </ul>
      </nav>
    </div>
  );
}
