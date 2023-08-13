import { FaKey, FaPencilAlt, FaSave, FaTimes } from "react-icons/fa";
import { closeModal } from "./swal";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { signOut } from "next-auth/react";
import { sessionData } from "@/pages";
import Swal from "sweetalert2";

function Profil() {
  const [editMode, setEditMode] = useState(false);
  const [gantiPasswordMode, setGantiPasswordMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch(process.env.BASE_URL + "/api/user/detail", {
      method: "POST",
      body: JSON.stringify({ id: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data[0]);
        } else {
        }
      })
      .catch((err) => console.log(err));
  }

  function timeStampView(date) {
    const tgl = new Date(date);

    return `${tgl.getDate() < 10 ? "0" + tgl.getDate() : tgl.getDate()}/${
      tgl.getMonth() + 1 < 10 ? "0" + (tgl.getMonth() + 1) : tgl.getMonth() + 1
    }/${tgl.getFullYear()} ${
      tgl.getHours() < 10 ? "0" + tgl.getHours() : tgl.getHours()
    }:${tgl.getMinutes() < 10 ? "0" + tgl.getMinutes() : tgl.getMinutes()} WIB`;
  }

  return (
    <div className=" lg:w-[40vw] flex flex-col w-fit  ">
      <div className="flex px-5 py-3 bg-blue-600 rounded-t text-white ">
        <span className="font-bold  text-left flex-1">Profil</span>
        <button onClick={() => closeModal()}>
          <FaTimes />
        </button>
      </div>
      {!editMode && data && (
        <>
          <div className=" flex-col p-5 flex">
            <span className="font-black">{data.nama}</span>
            <span className="text-sm">NIP. {data.nip}</span>
            <span className="text-sm font-bold">Administrator</span>
          </div>
          <div className="flex flex-col bg-green-300/50 mx-5 p-3 rounded-lg">
            <span className="text-xs">Login Terakhir</span>
            <span className="text-md font-bold">
              {timeStampView(data.lastlogin)}
            </span>
          </div>
        </>
      )}
      {editMode && (
        <Formik
          initialValues={{
            id: data.id,
            nama: data.nama,
            nip: data.nip,
          }}
          onSubmit={async (values) => {
            await fetch(process.env.BASE_URL + "/api/user/ubah", {
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  window.location.reload();
                  setEditMode(false);
                  getDataUser();
                } else {
                }
              })
              .catch((err) => console.log(err));

            // alert(JSON.stringify(values));
          }}
        >
          <Form>
            <div className="flex flex-col p-5 gap-4">
              <div className="font-bold">Ubah Profil</div>
              <div className="join flex">
                <label className="join-item w-[5em] bg-blue-300/50 flex justify-center items-center p-3">
                  Nama
                </label>
                <Field
                  required
                  name="nama"
                  placeholder="Masukkan Nama"
                  className="input input-bordered join-item flex-1"
                />
              </div>
              <div className="join flex">
                <label className="join-item w-[5em] bg-blue-300/50 flex justify-center items-center p-3">
                  NIP
                </label>
                <Field
                  required
                  name="nip"
                  placeholder="Masukkan NIP"
                  className="input input-bordered join-item flex-1"
                />
              </div>
              <div className="join self-end">
                <label
                  className="btn btn-error w-fit join-item"
                  onClick={() => setEditMode(false)}
                >
                  <FaSave /> Batal
                </label>
                <button
                  type="submit"
                  className="btn btn-success w-fit join-item"
                >
                  <FaSave /> Simpan
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      )}

      {!editMode && (
        <div className="p-5 join flex justify-center">
          <button
            className="btn btn-success join-item"
            onClick={() => setEditMode(!editMode)}
          >
            <FaPencilAlt /> Ubah
          </button>
          <button
            className="btn btn-info join-item"
            onClick={() => setGantiPasswordMode(!gantiPasswordMode)}
          >
            <FaKey /> Ganti Password
          </button>
          <button
            className="btn btn-error join-item"
            onClick={() =>
              Swal.fire(
                "Keluar",
                "Ingin Keluar Dari Aplikasi ?",
                "question"
              ).then((e) => e.isConfirmed && signOut())
            }
          >
            <BiLogOut /> Keluar
          </button>
        </div>
      )}
      {gantiPasswordMode && (
        <Formik
          initialValues={{
            id: 1,
            pass: "",
          }}
          onSubmit={async (values) => {
            await fetch(process.env.BASE_URL + "/api/user/pass", {
              method: "POST",
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data) {
                  setGantiPasswordMode(false);
                } else {
                }
              })
              .catch((err) => console.log(err));
          }}
        >
          <Form>
            <div className="join flex mx-5 mb-5">
              <Field
                required
                type="password"
                name="pass"
                placeholder="Masukkan Password Baru"
                className="input input-bordered join-item flex-1"
              />
              <button type="submit" className="btn btn-success join-item">
                Ganti
              </button>
              <label
                className="btn btn-error join-item"
                onClick={() => setGantiPasswordMode(false)}
              >
                <FaTimes />
              </label>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
}

export default Profil;
