import React, { useEffect, useState } from "react";
import getData from "./arrayToObject";
const updateWithData = (loading, data) => {
  if (loading) {
    const { text, mainText } = data;
    return { text, mainText, loading: false };
  }
  return { text: null, mainText: null, loading: true };
};
export default function useObjectToArray(state, id) {
  const [text, setText] = useState(undefined);
  const { listData } = state;

  useEffect(() => {
    setText(getData(listData, id)); // here we convert the array to an object
  }, [id, listData]);

  return updateWithData(text !== undefined, text);
}
