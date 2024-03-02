"use client";

import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div 
        onClick={closeMenu}
        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}
      {/* SideMenu */}
      <nav
        // TODO: efecto de slide
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          { "translate-x-full": !isSideMenuOpen }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer "
          onClick={
            closeMenu
          }
        />

        {/* Input */}
        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />

          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}

        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-3xl">Perfil</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-3xl">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-3xl">Ingresar</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-3xl">Salir</span>
        </Link>

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-400 my-10" />

        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-3xl">Productos</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-3xl">Ordenes</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center  mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-3xl">usuarios</span>
        </Link>
      </nav>
    </div>
  );
};
