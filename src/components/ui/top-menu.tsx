"use client"
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {

  
  const openMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between  items-center w-full">
      {/* logo */}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span>| Shop</span>
        </Link>
      </div>

      {/*  Center Menu*/}

      <div className="hidden md:block">
        <Link
          href={"/category/men"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          hombres
        </Link>
        <Link
          href={"/category/women"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Mujeres
        </Link>
        <Link
          href={"/category/kid"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Niños
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center gap-2">
        <Link href={"/search"}>
        <IoSearchOutline className="w-5" />
        </Link>
        <Link href={"/cart"} >
            <div className="relative">
                <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white ">3</span>
                <IoCartOutline className="w-full" />
            </div>
        </Link>

        <button
        onClick={openMenu}
        className="m-2 p-2 rounded-md transition-all duration-300 hover:bg-gray-100">
            Menú
        </button>
      </div>


      
    </nav>
  );
};
