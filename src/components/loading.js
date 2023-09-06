import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Loader() {
  return (
    <div
      className={`fixed flex items-center justify-center bg-blue-400/50 backdrop-blur-sm w-screen h-[100dvh] z-50`}
    >
      <div className="relative">
        <span className="loading loading-ring w-[200px] h-[200px] text-white"></span>
        <div className="font-black text-5xl  drop-shadow-lg ">
          <span className="text-sky-700">Geo</span>
          <span className="text-white">SIPA</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
