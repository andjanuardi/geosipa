import { useEffect, useState } from "react";

function useStat(status = true) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getStat();
  }, [status]);

  async function getStat() {
    await fetch("api/aset/stat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }
  return { data, getStat };
}

export default useStat;
