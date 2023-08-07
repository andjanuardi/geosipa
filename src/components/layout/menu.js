import React, { useRef } from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { showModal } from "../swal";
import Tambah from "../aset/tambah";
import Ubah from "../aset/ubah";
import TambahKategori from "../tipe/tambah";
import Swal from "sweetalert2";
import UbahKategori from "../tipe/ubah";
import { useSession } from "next-auth/react";

function Menu({
  activeMarker,
  setActiveMarker,
  setCenterMap,
  setActiveMenu,
  getSubMenu,
  menu,
  submenu,
  reloadData,
  open,
  setOpen,
  getMenu,
}) {
  const { status: session } = useSession();

  async function btnEdit(id) {
    await fetch("/api/aset/detail", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        showModal(<Ubah data={data[0]} reloadData={reloadData} />);
      })
      .catch((err) => console.log(err));
  }

  async function hapusKategori(id, nama) {
    Swal.fire({
      title: "Hapus",
      text: "Anda ingin menghapus kategori " + nama + " ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch("/api/tipe/hapus", {
          method: "POST",
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            Swal.fire("Sukses", "Data Berhasil Dihapus", "success");
            getMenu();
          })
          .catch((err) => console.log(err));
      }
    });
  }
  return (
    <div
      id="menu"
      className={` w-[var(--w-menu-mobile)] md:w-[var(--w-menu)] lg:w-[var(--w-menu)] lg:mt-[3em]  lg:ml-[3em] lg:rounded-lg  h-[calc(100dvh-var(--h-navbar-mobile))] lg:h-[calc(90vh-var(--h-navbar))] bg-white/50 backdrop-blur-lg fixed z-[999]   transition-all ${
        open
          ? "left-0"
          : "-left-[var(--w-menu-mobile)] lg:-left-[calc(var(--w-menu)+3em)]"
      } `}
    >
      <div className="flex flex-col py-5 h-full gap-2">
        <div className="h-fit self-center font-bold ">DAFTAR ASET</div>
        <div className="overflow-auto flex-1 rounded-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            {menu.map((d, k) => (
              <div
                key={k}
                tabIndex={0}
                className="collapse collapse-arrow   w-full  rounded-none hover:bg-blue-400/10   "
                onClick={() => {
                  getSubMenu(d.id);
                  setActiveMenu(d.id);
                }}
              >
                <input type="radio" name="menu" />
                <div className="collapse-title flex gap-3  text-md items-center font-medium ">
                  <img src={d.icon} alt="icon" className="h-[25px]" />
                  <span className="flex-1">{d.nama}</span>
                </div>
                <div className="collapse-content p-0 ">
                  <ul className="menu  bg-transparent   flex-nowrap  p-0 rounded-none  ">
                    {session === "authenticated" && (
                      <li>
                        <a className=" rounded-none flex justify-between">
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={() =>
                              showModal(
                                <Tambah data={d} reloadData={reloadData} />
                              )
                            }
                          >
                            <FaPlus />
                            <span>Tambah</span>
                          </button>
                          <div className="join">
                            <button
                              className="btn btn-ghost btn-sm join-item"
                              onClick={() =>
                                showModal(
                                  <UbahKategori getMenu={getMenu} data={d} />
                                )
                              }
                            >
                              <FaPencilAlt />
                            </button>
                            <button
                              className="btn btn-ghost btn-sm join-item"
                              onClick={() => hapusKategori(d.id, d.nama)}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </a>
                      </li>
                    )}

                    <div className=" max-h-[20em] overflow-auto">
                      {submenu.map((d, k) => (
                        <li
                          key={k}
                          className={`  hover:bg-black/20 hover:text-white ${
                            activeMarker === d.id && "bg-black/50 text-white"
                          }  `}
                          onClick={() => {
                            setCenterMap({ center: [d.lat, d.long], zoom: 16 });
                            setActiveMarker(d.id);
                            setOpen(false);
                          }}
                        >
                          <a className=" flex gap-4 hover:bg-transparent rounded-none text-xs">
                            <div>
                              {session === "authenticated" && (
                                <button
                                  className="btn btn-ghost btn-xs z-50"
                                  onClick={() => {
                                    btnEdit(d.id);
                                  }}
                                >
                                  <FaPencilAlt
                                    className={`${
                                      activeMarker === d.id
                                        ? "text-white"
                                        : "text-gray-800"
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            <img src={d.icon} alt="icon" className="h-[25px]" />
                            <span className="flex-1">{d.nama}</span>
                          </a>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            ))}
          </form>
        </div>
        {session === "authenticated" && (
          <div>
            <button
              className="btn btn-ghost w-full rounded-none"
              onClick={() => showModal(<TambahKategori getMenu={getMenu} />)}
            >
              <FaPlus /> Tambah Kategori
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
