import { useRef, useState } from "react";
import { closeModal } from "../swal";
import convertToBase64 from "../convertToBase64";
import Swal from "sweetalert2";
import { Field, Form, Formik } from "formik";

function TambahKategori({ getMenu }) {
  const inputFile = useRef();
  const [imgFile, setImgFile] = useState("/assets/icon/marker.png");

  async function ubahIcon(e) {
    try {
      const file = e.target.files[0];
      if (file.size > 102400) {
        alert("Ukuran file lebih dari 100 Kb");
      } else {
        setImgFile(await convertToBase64(file));
      }
    } catch (error) {}
  }

  return (
    <Formik
      initialValues={{
        nama: "",
        icon: imgFile,
      }}
      onSubmit={async (values) => {
        values.icon = imgFile;

        await fetch("/api/tipe/tambah", {
          method: "POST",
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              getMenu();
              Swal.fire("Sukses", "Data Berhasil Disimpan", "success");
            } else {
            }
          })
          .catch((err) => console.log(err));

        // alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <div className="flex flex-col p-5 gap-5 lg:w-[30vw]">
          <div className=" font-bold">Tambah Kategori</div>
          <div className="flex join">
            <div
              className="join-item btn btn-md bg-slate-100"
              onClick={() => inputFile.current.click()}
            >
              <img src={imgFile} className="w-[20px] h-[20px]" />
            </div>
            <Field
              className="input flex-1 btn-md join-item input-bordered"
              type="text"
              placeholder="Masukkan Kategori"
              required
              name="nama"
            />
          </div>
          <input
            className="input hidden"
            type="file"
            ref={inputFile}
            accept="image/png, image/jpeg"
            onChange={ubahIcon}
          />
          <div className="flex join self-end">
            <label
              className="btn btn-sm join-item"
              onClick={() => closeModal()}
            >
              Batal
            </label>
            <button className="btn btn-sm btn-success join-item">Simpan</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default TambahKategori;
