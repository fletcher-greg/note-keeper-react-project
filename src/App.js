import React from "react";
import "./App.scss";
import NoteListPage from "./comps/NoteListPage";
import NotePage from "./comps/NotePage";
import useNotes from "./hooks/useNotes";
import urls from "./utils/urls";
import Nav from "./comps/Nav";
export default function Index() {
  const [state, send] = useNotes(urls.getData);
  const { view, id } = state;

  return (
    <div className="App">
      <Nav />
      {view === "detail" ? (
        <NotePage id={id} state={state} send={send} />
      ) : (
        <NoteListPage state={state} send={send} />
      )}
    </div>
  );
}
