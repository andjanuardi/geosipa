import { useEffect, useState } from "react";

function useMenu(status = true) {
  const [menu, setMenu] = useState([]);
  const [jenis, setJenis] = useState([]);
  const [menuitem, setMenuitem] = useState([]);

  useEffect(() => {
    reloadDataMenu();
  }, [status]);

  async function getMenu() {
    await fetch(process.env.BASE_URL + "/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }

  async function getJenis() {
    await fetch(process.env.BASE_URL + "/api/jenis")
      .then((res) => res.json())
      .then((data) => {
        setJenis(data);
      })
      .catch((err) => console.log(err));
  }

  async function getListMenu() {
    await fetch(process.env.BASE_URL + "/api/menuitem")
      .then((res) => res.json())
      .then((data) => {
        setMenuitem(data);
      })
      .catch((err) => console.log(err));
  }

  function reloadDataMenu() {
    getMenu();
    getJenis();
    getListMenu();
  }
  return {
    menu,
    getMenu,
    jenis,
    getJenis,
    menuitem,
    getListMenu,
    reloadDataMenu,
  };
}

export default useMenu;
