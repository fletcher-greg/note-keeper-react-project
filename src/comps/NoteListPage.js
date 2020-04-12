import React from "react";
import usePost from "../hooks/usePost";
import Loader from "./MiniComps/Loader";
import NoteListContainer from "./MiniComps/NoteListContainer";
export default function NoteListPage({ state, send }) {
  usePost(state, send, state.listData.length); // get post data from api

  const { listData } = state;
  const noteListProps = { listData, send }; // set props for child component -> NoteListContainer

  if (state) {
    return <NoteListContainer {...noteListProps} />;
  }
  return <Loader />;
}
