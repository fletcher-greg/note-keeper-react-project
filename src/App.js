import React from "react";
import NoteListPage from "./comps/NoteListPage";
import NotePage from "./comps/NotePage";
import useNotes from "./hooks/useNotes";
import urls from "./utils/urls";
export default function Index() {
  const [state, send] = useNotes(urls.getData);
  const { view, id } = state;
  if (view === "detail") {
    return (
      <div className="App">
        <NotePage id={id} state={state} send={send} />
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <NoteListPage state={state} send={send} />
      </div>
    </>
  );
}