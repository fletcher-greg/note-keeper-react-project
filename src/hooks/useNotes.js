import React, { useReducer, useMemo, useEffect } from "react";
import { reducer } from "../store/reducer";
let data = Array(1)
  .fill(1)
  .map((_, i) => ({ text: "Add a note", id: i }));

let initialState = {
  listData: data,
  view: "list",
  detailData: undefined,
  id: undefined,
  status: undefined,
};
// let initialState = {
//     listData: data,
//     view: "list",
//     detailData: undefined,
//     id: undefined,
//   };

//   const [state, send] = useReducer(reducer, initialState);
//   useMemo(() => useRead("http://localhost:3002/data", send), []);
export default function useNotes(url) {
  const [state, send] = useReducer(reducer, initialState);

  const options = {
    method: "get",
  };
  const fetcher = useMemo(() => {
    const fetchResource = (options) => {
      send({ type: "fetch_init" });
    };
    fetchResource.cancel = () => console.log("cancel that please");
    return fetchResource;
  }, []);

  useEffect(() => {
    if (state.status === "pending") {
      fetch(url, options)
        .then((d) => d.json())
        .then((d) => {
          send({ type: "fetch_data", data: JSON.parse(d) });
        })
        .catch((e) => console.error(`error msg: ${e}`));
    }
  }, [state, fetcher, url, options]);
  useEffect(() => {
    fetcher();
    return () => fetcher.cancel();
  }, [fetcher]);
  return [state, send];
}
