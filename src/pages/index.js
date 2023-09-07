import Grafik from "@/components/grafik";
import useStat from "@/hooks/useStat";
import { useRouter } from "next/router";
import { FaMap } from "react-icons/fa";

export default function Welcome() {
  const { data: stat } = useStat();
  const router = useRouter();

  return (
    <div className="bg-blue-300 min-h-[100dvh]">
      <div className="bg-[url('/assets/bg.png')] bg-repeat min-h-[100dvh]  ">
        <div className="bg-blue-300/60 p-4 flex flex-col gap-5 justify-center items-center min-h-[100dvh]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-white/50  lg:w-fit p-4  lg:p-10 rounded-lg backdrop-blur-lg shadow-lg flex flex-col gap-7">
              <div className="flex flex-col gap-5 lg:gap-10 justify-center">
                <div className="flex justify-around">
                  <img src="/assets/logo.png" className="h-[100px] " />
                  <img src="/assets/logo-kemenhub.png" className="h-[100px] " />
                </div>
                <div className="text-center">
                  <div className="font-bold lg:text-xl">
                    Selamat Datang di Portal
                  </div>
                  <div className="font-black text-4xl lg:text-5xl my-3 drop-shadow-lg ">
                    <span className="text-sky-700">Geo</span>
                    <span className="text-white">SIPA</span>
                  </div>
                  <div className="font-semibold text-xs lg:text-sm  ">
                    Sistem Informasi Pengelolaan Aset Berbasis Geospasial
                  </div>
                  <div className="font-bold text-xs lg:text-sm">
                    Dinas Perhubungan Kabupaten Simeulue
                  </div>
                </div>
              </div>
              <button
                className="btn btn-success text-white px-7 w-fit self-center"
                onClick={() => router.push("/dashboard")}
              >
                <FaMap />
                Lihat Peta
              </button>
            </div>
            <div className=" lg:w-[50vw] text-xs text-center leading-4 flex flex-col gap-4  bg-white/50 backdrop-blur-lg p-3 lg:p-10 rounded-lg  ">
              <div className="font-black text-lg">Jumlah Aset</div>
              <div className="stats shadow stats-vertical lg:stats-horizontal bg-white/50">
                {stat.stat &&
                  stat.stat.map((d, k) => (
                    <div className="stat" key={k}>
                      <div className="stat-title font-bold">{d.label}</div>
                      <div className={`stat-value drop-shadow-md `}>
                        {d.data[0]}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="hidden lg:block">
                <Grafik />
              </div>
              <div>
                <b>GeoSIPA</b> merupakan aplikasi untuk mendesiminasikan data
                dan informasi geospasial aset Dinas Perhubungan di Kab.
                Simeulue. Aplikasi ini digunakan untuk berbagai kebutuhan,
                seperti : mengakses data transportasi yang menjadi kewenagan
                pemerintah Kab. Simeulue yaitu pada sektor: darat maupun laut
                dan berbagi pakai data untuk kebutuhan visualisasi atau analisis
                bagi lembaga maupun organisasi terkait yang membutuhkan data
                geospasial Dinas Perhubungan. Segala macam bentuk penggunaan
                data pada GeoSIPA diwajibkan untuk mencantumkan sumber data
                terkait, dalam hal ini adalah Dinas Perhubungan Kab. Simeulue
              </div>
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
