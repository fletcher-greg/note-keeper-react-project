import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import Loader from "./MiniComps/Loader";
import useObjectToArray from "../utils/useObjectToArray";
// import NoteDetail from "./MiniComps/NoteDetail";
import NoteDetail from "./MiniComps/NoteDetail/index";
export default function NotePage({ id, state, send }) {
  const noteData = useObjectToArray(state, id); // get data from api
  usePost(state, send, state.status); // update post when changing text
  const noteProps = { noteData, send, id }; // props for child -> NoteDetail

  return (
    <div className="NotePage">
      {noteData ? <NoteDetail {...noteProps} /> : <Loader />}
    </div>
  );
}
