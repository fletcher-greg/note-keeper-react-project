import React from "react";

const memoized = React.memo(function Input({ input, setInput }) {
  return (
    <input
      className="NoteTitle-Input"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
});

export default memoized;
