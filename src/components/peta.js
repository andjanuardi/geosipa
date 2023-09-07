import Loader from "@/components/loading";
import dynamic from "next/dynamic";
import MenuAset from "@/components/layout/menu2";
import useMenu from "@/hooks/useMenu";
import Navbar from "@/components/layout/navbar";
import useDataKoordinat from "@/hooks/useDataKoordinat";

import React, { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
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
import { showModal } from "@/components/swal";
import Detail from "@/components/aset/detail";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [centerMap, setCenterMap] = useState({
    center: [2.629494, 96.062727],
    zoom: 10,
  });
  const [activeMarker, setActiveMarker] = useState();
  const {
    menu,
    getMenu,
    jenis,
    getJenis,
    menuitem,
    getListMenu,
    reloadDataMenu,
  } = useMenu();

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

  const { data, getData } = useDataKoordinat(true);

  const refMaker = useRef({});

  const Goto = ({ coor, zoom }) => {
    const map = useMap();
    try {
      map.flyTo(coor, zoom);
      if (typeof activeMarker !== undefined) {
        refMaker.current[activeMarker].openPopup();
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="drawer   ">
        <input
          id="my-drawer"
          type="checkbox"
          checked={open}
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <div>
            <Navbar open={open} setOpen={setOpen} />
            <div className="w-full h-full mt-[var(--h-navbar-mobile)] lg:mt-[var(--h-navbar)] fixed flex  ">
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
                              {/* {session === "authenticated" && (
                        <button
                          className="btn btn-xs text-white btn-error join-item "
                          onClick={() => hapus(d.id)}
                        >
                          <FaTrash />
                        </button>
                      )} */}
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
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu p-0 py-5 w-[var(--w-menu-mobile)]  lg:w-[var(--w-menu)] min-h-full bg-white text-base-content mt-[var(--h-navbar-mobile)] lg:mt-[var(--h-navbar)]">
            <MenuAset
              setCenterMap={setCenterMap}
              setActiveMarker={setActiveMarker}
              setActiveTileLayer={setActiveTileLayer}
              baseMap={baseMap}
              menu={menu}
              getMenu={getMenu}
              jenis={jenis}
              getJenis={getJenis}
              menuitem={menuitem}
              getListMenu={getListMenu}
              reloadDataMenu={reloadDataMenu}
              setOpen={setOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}
