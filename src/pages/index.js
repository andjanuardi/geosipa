import Loader from "@/components/loading";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FaMap } from "react-icons/fa";

export default function Welcome() {
  const router = useRouter();
  return (
    <div className="bg-blue-300">
      <div className="bg-[url('/assets/bg.png')] ">
        <div className="bg-blue-300/60  h-[100dvh] w-screen flex flex-col gap-5 justify-center items-center">
          <div className="bg-white/50 w-[80vw] lg:w-[60vw] p-10 rounded-lg backdrop-blur-lg shadow-lg flex flex-col gap-7">
            <div className="flex gap-10 justify-center">
              <img src="/assets/logo.png" className="h-[100px]" />
              <div className="text-center">
                <div className="font-bold text-xl">
                  Selamat Datang di Portal
                </div>
                <div className="font-black text-5xl my-4 drop-shadow-lg ">
                  <span className="text-sky-700">Geo</span>
                  <span className="text-white">SIPA</span>
                </div>
                <div className="font-bold">
                  Sistem Informasi Pengelolaan Aset Berbasis Geospasial
                </div>
                <div className="font-bold">
                  Dinas Perhubungan Kabupaten Simeulue
                </div>
              </div>
              <img src="/assets/logo-kemenhub.png" className="h-[100px]" />
            </div>
            <button
              className="btn btn-success text-white px-7 w-fit self-center"
              onClick={() => router.push("/peta")}
            >
              <FaMap />
              Lihat Peta
            </button>
            <div className="text-xs text-center leading-4   ">
              <b>GeoSIPA</b> merupakan aplikasi untuk mendesiminasikan data dan
              informasi geospasial aset Dinas Perhubungan di Kab. Simeulue.
              Aplikasi ini digunakan untuk berbagai kebutuhan, seperti :
              mengakses data transportasi yang menjadi kewenagan pemerintah Kab.
              Simeulue yaitu pada sektor: darat maupun laut dan berbagi pakai
              data untuk kebutuhan visualisasi atau analisis bagi lembaga maupun
              organisasi terkait yang membutuhkan data geospasial Dinas
              Perhubungan. Segala macam bentuk penggunaan data pada GeoSIPA
              diwajibkan untuk mencantumkan sumber data terkait, dalam hal ini
              adalah Dinas Perhubungan Kab. Simeulue
            </div>
          </div>
          <div className=" text-xs ">
            <div className=" text-center">
              Hak Cipta @ Dinas Perhubungan Kab. Simeulue
            </div>
            <div className=" text-center">
              Programmer : Andri Januardi, Fauzi Lestari, Teuku Alvian <br />
              Ahli Geospasial : Zulkiram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
