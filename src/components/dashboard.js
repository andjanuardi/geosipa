import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { showModal } from "./swal";
import Swal from "sweetalert2";
import Detail from "./aset/detail";
import Navbar from "./layout/navbar";
import Menu from "./layout/menu";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { status: session } = useSession();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [centerMap, setCenterMap] = useState({
    center: [2.629494, 96.062727],
    zoom: 10,
  });
  const [activeMarker, setActiveMarker] = useState();

  const [menu, setMenu] = useState([]);
  const [submenu, setSubmenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState(1);
  const refMaker = useRef({});

  const baseMap = {
    googleStreet: {
      url: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      name: "Google Map",
      link: "https://www.google.co.id/maps/",
    },
    googleSatelite: {
      url: "http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      name: "Google Map Satelite",
      link: "https://www.google.co.id/maps/",
    },
  };

  const [activeTileLayer, setActiveTileLayer] = useState(baseMap.googleStreet);

  useEffect(() => {
    getData();
    getMenu();
    getSubMenu(activeMenu);
  }, []);

  function reloadData() {
    getData();
    getMenu();
    getSubMenu(activeMenu);
  }

  async function getData() {
    await fetch(process.env.BASE_URL + "/api/koordinat")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }

  async function getMenu() {
    await fetch(process.env.BASE_URL + "/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((err) => console.log(err));
  }

  async function getSubMenu(id) {
    await fetch(process.env.BASE_URL + "/api/submenu", {
      method: "POST",
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSubmenu(data);
      })
      .catch((err) => console.log(err));
  }

  const Goto = ({ coor, zoom }) => {
    const map = useMap();
    try {
      map.flyTo(coor, zoom);
      if (typeof activeMarker !== undefined) {
        refMaker.current[activeMarker].openPopup();
      }
    } catch (error) {}
  };

  async function hapus(id) {
    Swal.fire({
      title: "Hapus",
      text: "Anda ingin menghapus ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(process.env.BASE_URL + "/api/aset/hapus", {
          method: "POST",
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            Swal.fire("Sukses", "Data Berhasil Dihapus", "success");
            reloadData();
          })
          .catch((err) => console.log(err));
      }
    });
  }

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />

      <div className="w-full h-full mt-[var(--h-navbar-mobile)] lg:mt-[var(--h-navbar)] fixed flex  ">
        {/* Menu */}
        <Menu
          setCenterMap={setCenterMap}
          setActiveMarker={setActiveMarker}
          getData={getData}
          getSubMenu={getSubMenu}
          setActiveMenu={setActiveMenu}
          reloadData={reloadData}
          menu={menu}
          submenu={submenu}
          activeMarker={activeMarker}
          open={open}
          setOpen={setOpen}
          getMenu={getMenu}
          setActiveTileLayer={setActiveTileLayer}
          baseMap={baseMap}
        />
        {/* Map */}
        <div className="flex-1">
          <MapContainer
            center={centerMap.center}
            zoom={centerMap.zoom}
            scrollWheelZoom={true}
            zoomControl={false}
          >
            <Goto coor={centerMap.center} zoom={centerMap.zoom} />
            <ZoomControl position="topright" />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={activeTileLayer.url}
            />
            {data.map((d, k) => (
              <Marker
                key={k}
                ref={(e) => (refMaker.current[d.id] = e)}
                position={[d.lat, d.long]}
                icon={
                  new icon({
                    iconSize: [25, 25],
                    iconUrl: `${d.icon}`,
                  })
                }
              >
                <Popup>
                  <div className="flex flex-col gap-2 ">
                    <div className=" flex gap-2  flex-col items-center">
                      <span className="">{d.tipe}</span>
                      <span className="font-bold">{d.nama}</span>
                      <span className=" italic">
                        ({d.lat} , {d.long})
                      </span>
                      <div className="flex justify-center w-full join">
                        <button
                          className="btn btn-xs text-white btn-info join-item"
                          onClick={() => showModal(<Detail data={d} />)}
                        >
                          <FaEye />
                          Detail
                        </button>
                        {session === "authenticated" && (
                          <button
                            className="btn btn-xs text-white btn-error join-item "
                            onClick={() => hapus(d.id)}
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
