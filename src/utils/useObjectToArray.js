import React, { useEffect, useState } from "react";
import getData from "./arrayToObject";

export default function useObjectToArray(state, id) {
  const [text, setText] = useState(undefined);
  const { listData } = state;

  useEffect(() => {
    setText(getData(listData, id)); // here we convert the array to an object
  }, [id, listData]);

  return text;
}
