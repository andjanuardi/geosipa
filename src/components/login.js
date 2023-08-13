import { Field, Form, Formik } from "formik";
import md5 from "md5";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import { closeModal } from "./swal";

export default function Login() {
  return (
    <div className=" rounded overflow-hidden flex flex-col bg-blue-400 gap-3">
      <div className=" p-7 text-white bg-blue-700 flex gap-5 drop-shadow-lg">
        <div>
          <img
            className=" w-[5em]"
            src={`${process.env.BASE_URL}/assets/logo.png`}
          />
        </div>
        <div>
          <div className=" font-black text-[20pt]">GeoSIPA</div>
          <div className=" font-bold">
            Sistem Informasi Pengelolaan Aset Berbasis Geospasial
            <br />
            Dinas Perhubungan Kab. Simeulue
          </div>
        </div>
      </div>
      <Formik
        initialValues={{
          user: "",
          pass: "",
        }}
        onSubmit={async (values) => {
          const status = await signIn("credentials", {
            redirect: false,
            user: values.user,
            pass: md5(values.pass),
            callbackUrl: process.env.NEXTAUTH_URL,
          });
          if (status.ok) {
            Swal.fire("Sukses", "Selamat datang", "success").then((e) => {
              e.isConfirmed && window.location.reload();
            });
          } else {
            Swal.fire("Oops", "Nama Pengguna dan Kata Sandi Salah", "error");
          }
          //   alert(JSON.stringify(values));
        }}
      >
        <Form>
          <div className=" p-7 flex flex-col gap-5">
            <div>
              <Field
                required
                className="input w-full"
                name="user"
                placeholder="Nama Pengguna"
              />
            </div>
            <div>
              <Field
                required
                name="pass"
                type="password"
                className="input w-full "
                placeholder="Password"
              />
            </div>
          </div>
          <div className=" px-7 flex justify-end ">
            <div className="join">
              <label
                className="btn btn-error  join-item"
                onClick={() => closeModal()}
              >
                Batal
              </label>
              <button className="btn btn-success  join-item">Masuk</button>
            </div>
          </div>
        </Form>
      </Formik>
      <div className=" text-xs text-white/70">
        <div className=" text-center">
          Hak Cipta @ Dinas Perhubungan Kab. Simeulue
        </div>
        <div className=" text-center mb-7">
          Programmer : Andri Januardi, Fuazi Lestari, Teuku Alvian <br />
          Ahli Geospasial : Zulkiram
        </div>
      </div>
    </div>
  );
}
