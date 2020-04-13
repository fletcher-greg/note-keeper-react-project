import React, { useState } from "react";
import "./App.scss";
import NoteListPage from "./comps/NoteListPage";
import NotePage from "./comps/NotePage";
import useNotes from "./hooks/useNotes";
import urls from "./utils/urls";
import Nav from "./comps/Nav";
export default function Index() {
  const [state, send] = useNotes(urls.getData);
  const { view, id } = state;
  console.log(state.listData);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((b) => !b);
  return (
    <div className="App">
      <Nav />

      {view === "detail" && state.listData ? (
        <NotePage id={id} state={state} send={send} />
      ) : (
        <NoteListPage state={state} send={send} />
      )}
    </div>
  );
}
