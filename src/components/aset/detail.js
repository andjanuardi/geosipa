import React from "react";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { closeModal } from "../swal";

export default function Detail({ data }) {
  const [d, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    await fetch(process.env.BASE_URL + "/api/aset/detail", {
      method: "POST",
      body: JSON.stringify({ id: data.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="lg:w-[30vw] ">
      <div
        style={{
          backgroundImage: `url(${
            d.gambar === "/assets/img.jpg"
              ? process.env.BASE_URL + d.gambar
              : d.gambar
          })`,
        }}
        className=" h-52 bg-center bg-cover overflow-hidden rounded-t-md flex flex-col justify-between pb-2"
      >
        <div className="flex gap-2 pl-4 pr-2 py-2 items-center bg-white/50 shadow">
          <img src={d.icon} className="h-[20px]" />
          <span className="flex-1 text-left text-sm font-bold ">{d.nama}</span>
          <button onClick={() => closeModal()} className="btn btn-sm btn-ghost">
            <FaTimes />
          </button>
        </div>
        <small className=" text-right pr-2 italic">
          {d.lat}, {d.long}
        </small>
      </div>
      <table className="table table-xs my-4 ">
        <tbody>
          <tr>
            <th className=" whitespace-nowrap pl-4">No Aset</th>
            <td className="w-full pr-4">{d.no_aset}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Kode</th>
            <td className="w-full pr-4">{d.kode}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Provinsi</th>
            <td className="w-full pr-4">{d.prov}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Kabupaten</th>
            <td className="w-full pr-4">{d.kab}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Kecamatan</th>
            <td className="w-full pr-4">{d.kec}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Desa</th>
            <td className="w-full pr-4">{d.desa}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Tipe</th>
            <td className="w-full pr-4">{d.tipe}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Sumber Dana</th>
            <td className="w-full pr-4">{d.sdana}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">
              Tahun Pembangunan / <br /> Pengadaan
            </th>
            <td className="w-full pr-4">
              {d.tahun === "0000" ? "-" : d.tahun}
            </td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Fungsi</th>
            <td className="w-full pr-4">{d.fungsi}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Jenis</th>
            <td className="w-full pr-4">{d.jenis}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Status</th>
            <td className="w-full pr-4">{d.status}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Kondisi</th>
            <td className="w-full pr-4">{d.kondisi}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Kewenangan</th>
            <td className="w-full pr-4">{d.kewenangan}</td>
          </tr>
          <tr>
            <th className=" whitespace-nowrap pl-4">Keterangan</th>
            <td className="w-full pr-4">{d.ket}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
