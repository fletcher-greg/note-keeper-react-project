import React, { useEffect, useState } from "react";

export default function useRead(url, send) {
  //   const { listData } = state;
  //   const [mount, setMount] = useState(false);

  const options = {
    method: "get",
  };

  useEffect(() => {
    fetch(url, options)
      .then((d) => d.json())
      .then((d) => {
        send({ type: "fetch_data", data: JSON.parse(d) });
      })
      .catch((e) => console.error(`error msg: ${e}`));
  }, []);
}
