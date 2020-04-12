import React, { useEffect, useState } from "react";

export default function usePost(state, send, watchValue) {
  const { listData } = state;

  const options = {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ listData: state.listData }),
  };

  useEffect(() => {
    console.log(state.status);
    if (state.status === "updating") {
      console.log("posting");
      fetch("http://localhost:3002/update", options)
        .then((d) => {
          console.log(`res: ${d}`);
          console.log("yoyo");
          send({ type: "changed_note" });
        })
        .catch((e) => console.error(`error msg: ${e}`));
    }
  }, [watchValue]);
}
