import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogIn, BiMenu } from "react-icons/bi";
import { showModal } from "../swal";
import Profil from "../profil";
import Login from "../login";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navbar({ open, setOpen }) {
  const [dataUser, setDataUser] = useState([]);
  const { status: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    session === "authenticated" && getDataUser();
  }, []);

  async function getDataUser() {
    await fetch(process.env.BASE_URL + "/api/user/detail", {
      method: "POST",
      body: JSON.stringify({ id: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDataUser(data[0]);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex h-[var(--h-navbar-mobile)] lg:h-[var(--h-navbar)]   bg-blue-400 drop-shadow-lg fixed w-screen z-50 ">
      <div
        className=" bg-blue-600 h-full  lg:w-[var(--w-menu)] flex gap-3  items-center p-4"
        onClick={() => router.push("/")}
      >
        <div>
          <img
            className="w-[3em] lg:w-[2em]"
            src={`${process.env.BASE_URL}/assets/logo.png`}
          />
        </div>
        <div>
          <div className=" text-white font-extrabold lg:text-[20pt]">
            GeoSIPA
          </div>
          <div className=" text-white lg:font-bold block lg:hidden text-xs">
            Dinas Perhubungan Kab. Simeulue
          </div>
        </div>
      </div>
      <div className="  flex-1 lg:flex gap-4 justify-end  items-center p-3 hidden ">
        <button
          className="btn btn-sm btn-ghost text-white text-lg "
          onClick={() => setOpen(!open)}
        >
          <BiMenu className="text-xl" />
        </button>
        {/* <label
          htmlFor="my-drawer"
          className="btn btn-sm btn-ghost drawer-button text-white text-lg "
        >
          <BiMenu className="text-xl" />
        </label> */}
        <div className=" flex-1 text-white lg:font-bold hidden lg:block text-sm">
          Sistem Informasi Pengeloaan Aset Berbasis Geospasial Dinas Perhubungan
          Kab. Simeulue
        </div>
        {session === "authenticated" && (
          <>
            <div className=" text-white font-bold">{dataUser.nama}</div>
            <div
              className="btn btn-sm btn-ghost text-white text-lg"
              onClick={() => showModal(<Profil />)}
            >
              <FaUserAlt />
            </div>
          </>
        )}
        {session !== "authenticated" && (
          <div
            className="btn btn-sm btn-ghost text-white text-lg"
            onClick={() => showModal(<Login />)}
          >
            <BiLogIn />
          </div>
        )}
      </div>
      <div className=" h-full justify-center  flex-1 items-center p-3 lg:hidden join ">
        {/* <label
          htmlFor="my-drawer"
          className="btn btn-md btn-ghost bg-white/20  drawer-button text-white text-lg join-item "
        >
          <BiMenu className="text-xl" />
        </label> */}
        <button
          className="btn btn-md bg-white/20 btn-ghost text-white text-lg join-item "
          onClick={() => setOpen(!open)}
        >
          <BiMenu className="text-xl" />
        </button>
        {session === "authenticated" && (
          <div
            className="btn btn-md bg-white/20 btn-ghost text-white  join-item"
            onClick={() => showModal(<Profil getDataUser={getDataUser} />)}
          >
            <FaUserAlt />
          </div>
        )}
        {session !== "authenticated" && (
          <div
            className="btn btn-md bg-white/20 btn-ghost text-white text-lg join-item"
            onClick={() => showModal(<Login />)}
          >
            <BiLogIn />
          </div>
        )}
      </div>
    </div>
  );
}
