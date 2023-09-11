import { useEffect, useRef, useState } from "react";
import { FaDownload, FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import { showModal } from "../swal";
import TambahKategori from "../tipe/tambah";
import hapusKategori from "../tipe/hapus";
import UbahKategori from "../tipe/ubah";
import Tambah from "../aset/tambah";
import Ubah from "../aset/ubah";
import hapus from "../aset/hapus";
import { useSession } from "next-auth/react";
import * as XLSX from "xlsx";
import { dateNow, dateToTable } from "../datefunction";

function MenuAset({
  setCenterMap,
  setActiveMarker,
  setActiveTileLayer,
  baseMap,
  menu,
  getMenu,
  jenis,
  menuitem,
  reloadDataMenu,
  setOpen,
}) {
  const [itemCari, setItemCari] = useState([]);
  const [inputCari, setInputCari] = useState("");
  const { status: session } = useSession();

  useEffect(() => {
    cari();
  }, [inputCari]);

  async function cari() {
    await fetch(process.env.BASE_URL + "/api/menuitem", {
      method: "POST",
      body: JSON.stringify({ q: inputCari }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItemCari(data);
      })
      .catch((err) => console.log(err));
  }

  async function btnDownload() {
    await fetch("api/aset/download", { method: "POST" })
      .then((e) => e.json())
      .then((data) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
        //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        XLSX.writeFile(workbook, `GeoSipa.xlsx`);
      });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="font-black text-center">TIPE PETA</div>

      <div className="flex gap-2 p-2 px-5 ">
        <div
          onClick={() => setActiveTileLayer(baseMap.googleSatelite)}
          className=" btn flex  flex-1 bg-[url('/assets/satelit.jpg')]  rounded-lg bordered border-1 border-white/50 hover:font-bold cursor-pointer drop-shadow-sm text-white"
        >
          Google Satelite
        </div>
        <div
          onClick={() => setActiveTileLayer(baseMap.googleStreet)}
          className=" btn flex-1 bg-[url('/assets/peta.jpg')]  rounded-lg bordered border-1 border-white/50 hover:font-bold cursor-pointer drop-shadow-sm text-white"
        >
          Google Street
        </div>
      </div>
      <div className="font-black text-center">DAFTAR ASET</div>
      <div className="px-4 flex flex-col relative">
        <div className="flex join">
          <input
            className="input input-bordered flex-1 join-item"
            placeholder="Cari.."
            onChange={(e) => setInputCari(e.currentTarget.value)}
          />
          {session === "authenticated" && (
            <button
              className="btn btn-info text-white join-item"
              onClick={() => btnDownload()}
            >
              <FaDownload />
            </button>
          )}
        </div>
        {itemCari.length > 0 && (
          <ul
            tabIndex={0}
            className={`z-[1] menu p-2 shadow bg-base-100 rounded-box absolute top-14 `}
          >
            {itemCari.map((d, k) => (
              <li
                key={k}
                onClick={() => {
                  setCenterMap({
                    center: [d.lat, d.long],
                    zoom: 16,
                  });
                  setOpen(false);
                  setActiveMarker(d.id);
                }}
              >
                <a>{d.nama}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="menu w-full rounded-box gap-2">
        {menu.map((d, k) => (
          <li key={k}>
            <details>
              <summary className="flex">
                {/* <input
                  type="checkbox"
                  className="checkbox checkbox-xs"
                  defaultChecked
                /> */}
                <img src={d.icon} alt="icon" className="h-[25px]" />
                <div className="flex-1 uppercase font-bold">{d.nama}</div>
              </summary>
              <ul>
                {session === "authenticated" && (
                  <li>
                    <div className="btn-group hover:bg-transparent active:!bg-transparent active:!text-current">
                      <button
                        className="btn btn-sm btn- btn-ghost"
                        onClick={() =>
                          showModal(
                            <Tambah data={d} reloadData={reloadDataMenu} />
                          )
                        }
                      >
                        <FaPlus /> Tambah
                      </button>
                      <button
                        className="btn btn-sm btn- btn-ghost"
                        onClick={() =>
                          showModal(<UbahKategori getMenu={getMenu} data={d} />)
                        }
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        className="btn btn-sm btn- btn-ghost"
                        onClick={() => hapusKategori(d.id, d.nama, getMenu)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                )}

                {jenis
                  .filter((e) => e.id_tipe === d.id)
                  .map((d2, k2) => (
                    <>
                      {d2.jenis === "-" &&
                        menuitem
                          .filter(
                            (e) => e.id_tipe === d.id && e.jenis === d2.jenis
                          )
                          .map((d3, k3) => (
                            <li
                              key={k3}
                              onClick={() => {
                                setCenterMap({
                                  center: [d3.lat, d3.long],
                                  zoom: 16,
                                });
                                setActiveMarker(d3.id);
                                setOpen(false);
                              }}
                            >
                              <a className="flex">
                                {/* <input
                                  type="checkbox"
                                  className="checkbox checkbox-xs"
                                  defaultChecked
                                /> */}
                                <div className="flex-1 flex gap-2">
                                  <img
                                    src={d3.icon}
                                    alt="icon"
                                    className="h-[25px]"
                                  />
                                  {d3.nama}
                                </div>
                                {session === "authenticated" && (
                                  <div>
                                    <button
                                      className="btn btn-sm btn- btn-ghost"
                                      onClick={() => {
                                        showModal(
                                          <Ubah
                                            data={d3}
                                            reloadData={reloadDataMenu}
                                          />
                                        );
                                      }}
                                    >
                                      <FaPencilAlt />
                                    </button>
                                    <button
                                      className="btn btn-sm btn- btn-ghost"
                                      onClick={() =>
                                        hapus(d3.id, d3.nama, reloadDataMenu)
                                      }
                                    >
                                      <FaTrashAlt />
                                    </button>
                                  </div>
                                )}
                              </a>
                            </li>
                          ))}
                      {d2.jenis !== "-" && (
                        <li key={k2}>
                          <details>
                            <summary className="flex">
                              {/* <input
                                type="checkbox"
                                className="checkbox checkbox-xs"
                                defaultChecked
                              /> */}
                              <div className="flex-1 font-bold uppercase">
                                {d2.jenis}
                              </div>
                            </summary>
                            <ul>
                              {menuitem.filter(
                                (e) =>
                                  e.id_tipe === d.id && e.jenis === d2.jenis
                              ).length <= 0 && (
                                <li>
                                  <a>Memuat Data..</a>
                                </li>
                              )}
                              {menuitem
                                .filter(
                                  (e) =>
                                    e.id_tipe === d.id && e.jenis === d2.jenis
                                )
                                .map((d3, k3) => (
                                  <li
                                    key={k3}
                                    onClick={() => {
                                      setCenterMap({
                                        center: [d3.lat, d3.long],
                                        zoom: 16,
                                      });
                                      setActiveMarker(d3.id);
                                      setOpen(false);
                                    }}
                                  >
                                    <a className="flex gap-2">
                                      {/* <input
                                        type="checkbox"
                                        className="checkbox checkbox-xs"
                                        defaultChecked
                                      /> */}
                                      <img
                                        src={d3.icon}
                                        alt="icon"
                                        className="h-[25px]"
                                      />
                                      <div className="flex-1">{d3.nama}</div>
                                      {session === "authenticated" && (
                                        <>
                                          <button
                                            className="btn btn-sm btn- btn-ghost"
                                            onClick={() => {
                                              showModal(
                                                <Ubah
                                                  data={d3}
                                                  reloadData={reloadDataMenu}
                                                />
                                              );
                                            }}
                                          >
                                            <FaPencilAlt />
                                          </button>
                                          <button
                                            className="btn btn-sm btn- btn-ghost"
                                            onClick={() =>
                                              hapus(
                                                d3.id,
                                                d3.nama,
                                                reloadDataMenu
                                              )
                                            }
                                          >
                                            <FaTrashAlt />
                                          </button>
                                        </>
                                      )}
                                    </a>
                                  </li>
                                ))}
                            </ul>
                          </details>
                        </li>
                      )}
                    </>
                  ))}
              </ul>
            </details>
          </li>
        ))}
        {session === "authenticated" && (
          <li>
            <button
              className="btn btn-sm"
              onClick={() => showModal(<TambahKategori getMenu={getMenu} />)}
            >
              <FaPlus /> Tambah Kategori
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default MenuAset;
