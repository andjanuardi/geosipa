import React, { useRef } from "react";
import { useState } from "react";
import { FaCamera, FaTimes } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";

import { closeModal } from "../swal";
import convertToBase64 from "../convertToBase64";

export default function Tambah({ data = [], reloadData }) {
  const [profilImg, setprofilImg] = useState(
    process.env.BASE_URL + "/assets/img.jpg"
  );

  const [IconImg, setIconImg] = useState(data.icon);
  const inputProfil = useRef();
  const inputIcon = useRef();

  const [loadingStat, setLoadingStat] = useState(0);

  async function fileUpload(e) {
    const file = e.target.files[0];

    if (file.size > 2097152) {
      alert("Ukuran file lebih dari 2 Mb");
    } else {
      setprofilImg(await convertToBase64(file));
    }
  }

  async function IconUpload(e) {
    const file = e.target.files[0];
    if (file.size > 102400) {
      alert("Ukuran file lebih dari 100 Kb");
    } else {
      setIconImg(await convertToBase64(file));
    }
  }

  return (
    <div>
      <div className="flex gap-2 pl-4 pr-2 py-2 items-center  shadow">
        <img src={IconImg} className="h-[20px]" />
        <span className="flex-1 text-left text-sm font-bold ">
          Tambah {data.nama}
        </span>
        <button onClick={() => closeModal()} className="btn btn-sm btn-ghost">
          <FaTimes />
        </button>
      </div>
      <Formik
        initialValues={{
          no_aset: "",
          kode: "",
          nama: "",
          prov: "Aceh",
          kab: "Simeulue",
          kec: "",
          desa: "",
          tahun: "",
          sdana: "",
          fungsi: "",
          jenis: "",
          status: "",
          kondisi: "",
          kewenangan: "",
          lat: "",
          long: "",
          ket: "",
          gambar: "",
        }}
        onSubmit={async (values) => {
          setLoadingStat(1);
          values.id_tipe = data.id;
          values.gambar = profilImg;
          values.icon = IconImg;
          await fetch(process.env.BASE_URL + "/api/aset/tambah", {
            method: "POST",
            body: JSON.stringify(values),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire("Sukses", "Data Berhasil Disimpan", "success");
                reloadData();
              } else {
                setLoadingStat(2);
              }
            })
            .catch((err) => console.log(err));
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="flex gap-5 p-5 flex-wrap w-full">
            <div
              style={{ backgroundImage: `url(${profilImg})` }}
              className={`  w-full min-h-[300px] bg-cover bg-center overflow-hidden flex flex-col justify-end   rounded drop-shadow`}
            >
              <div className="self-end m-3 flex gap-2">
                <div>
                  <label
                    className="btn"
                    onClick={() => inputIcon.current.click()}
                  >
                    <img src={IconImg} className="w-[20px] h-[20px]" />
                  </label>
                  <input
                    ref={inputIcon}
                    type="file"
                    className="hidden"
                    onChange={IconUpload}
                    accept="image/png, image/jpeg"
                  />
                </div>
                <div>
                  <label
                    className="btn"
                    onClick={() => inputProfil.current.click()}
                  >
                    <FaCamera />
                  </label>
                  <input
                    ref={inputProfil}
                    type="file"
                    className="hidden"
                    onChange={fileUpload}
                    accept="image/png, image/jpeg"
                  />
                </div>
              </div>
            </div>
            <div className="text-left flex flex-col p-5 shadow-lg  gap-2 w-full overflow-auto">
              <div>
                <small>Nama</small>

                <Field
                  required
                  name="nama"
                  className="input input-sm input-bordered w-full mt-2"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <small>Latitude</small>

                  <Field
                    type="number"
                    min={0}
                    step={0.000000000001}
                    required
                    name="lat"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
                <div className="flex-1">
                  <small>Logitude</small>

                  <Field
                    type="number"
                    min={0}
                    step={0.000000000001}
                    required
                    name="long"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <small>No Aset</small>
                  <Field
                    required
                    name="no_aset"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <small>Kode</small>
                  <Field
                    required
                    name="kode"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <small>Provinsi</small>
                  <Field
                    required
                    name="prov"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <small>Kabupaten</small>
                  <Field
                    required
                    name="kab"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <small>Kecamatan</small>
                  <Field
                    required
                    name="kec"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <small>Desa</small>
                  <Field
                    required
                    name="desa"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <small>Sumber Dana</small>
                  <Field
                    required
                    name="sdana"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>

                <div className="flex-1">
                  <small>Tahun Pembangunan / Pengadaan</small>
                  <Field
                    required
                    type="text"
                    min={0}
                    name="tahun"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>

              <div>
                <small>Fungsi</small>
                <Field
                  required
                  component="textarea"
                  name="fungsi"
                  className="input input-sm input-bordered w-full mt-2 h-[70px]"
                />
              </div>
              <div className="flex-1">
                <small>Jenis</small>
                <Field
                  required
                  name="jenis"
                  className="input input-sm input-bordered w-full mt-2"
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <small>Status</small>
                  <Field
                    required
                    name="status"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
                <div className="flex-1">
                  <small>Kondisi</small>
                  <Field
                    required
                    name="kondisi"
                    className="input input-sm input-bordered w-full mt-2"
                  />
                </div>
              </div>

              <div>
                <small>Kewenangan</small>
                <Field
                  required
                  name="kewenangan"
                  className="input input-sm input-bordered w-full mt-2"
                />
              </div>

              <div>
                <small>Keterangan</small>
                <Field
                  required
                  component="textarea"
                  name="ket"
                  className="input input-sm input-bordered w-full mt-2 h-[70px]"
                />
              </div>
            </div>
          </div>

          <div className="px-6 py-3 flex justify-end">
            <button
              type="submit"
              disabled={loadingStat === 1 && true}
              className="btn btn-md btn-success"
            >
              {loadingStat === 1 && (
                <>
                  <span>Menyimpan</span>
                  <span className="loading loading-spinner loading-md"></span>
                </>
              )}
              {loadingStat != 1 && <span>Tambah</span>}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
