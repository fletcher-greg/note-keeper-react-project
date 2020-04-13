import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import NoteInput from "./MiniComps/NoteDetail/NoteInput";
import NoteTitle from "./MiniComps/NoteDetail/NoteTitle";
import MainNote from "./MiniComps/NoteDetail/MainNote";
import SideBar from "./MiniComps/NoteDetail/SideBar";
import Loader from "./MiniComps/NoteListContainer/components/Loader";
import useObjectToArray from "../utils/useObjectToArray";

import NoteDetail from "./MiniComps/NoteDetail/index";
export default function NotePage({ id, state, send }) {
  const { text, mainText, loading } = useObjectToArray(state, id); // get data from api
  usePost(state, send, state.status); // update post when changing text

  const titleProps = { send, id, text };
  const mainNoteProps = { mainText, send, id };
  return (
    <div className="NotePage">
      {!loading ? (
        <NoteDetail>
          <SideBar send={send} data={text} />
          <NoteInput>
            <NoteTitle {...titleProps} />
            <MainNote {...mainNoteProps} />
          </NoteInput>
        </NoteDetail>
      ) : (
        <Loader />
      )}
    </div>
  );
}
