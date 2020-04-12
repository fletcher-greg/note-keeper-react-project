import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import Loader from "./MiniComps/Loader";
import useObjectToArray from "../utils/useObjectToArray";
import NoteDetail from "./MiniComps/NoteDetail";

export default function NotePage({ id, state, send }) {
  const text = useObjectToArray(state, id); // get data from api
  usePost(state, send, state.status); // update post when changing text
  const noteProps = { text, send, id }; // props for child -> NoteDetail

  if (text) {
    return <NoteDetail {...noteProps} />;
  }
  return <Loader />;
}
