import { useEffect, useState } from "react";

function useDataKoordinat(status = true) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [status]);

  async function getData() {
    await fetch(process.env.BASE_URL + "/api/koordinat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }
  return { data, getData };
}

export default useDataKoordinat;
