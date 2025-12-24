import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Mobile Top Bar (FIXED) ===== */}
      <div className="
        md:hidden fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-4 py-3 border-b bg-white
      ">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl font-bold"
        >
          ☰
        </button>

        <img src={assets.logo} className="h-8" alt="logo" />
      </div>

      {/* ===== Overlay ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== Sidebar ===== */}
      <div
        className={`
          fixed md:static
          top-0 md:top-0 left-0 z-50
          pt-14 md:pt-0
          w-[70%] sm:w-[60%] md:w-[18%]
          min-h-screen bg-white border-r-2
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4 pt-4 pl-6 text-[15px]">
          <NavLink
            to="/add"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          >
            <img className="w-5 h-5" src={assets.add_icon} alt="" />
            <p>Add Items</p>
          </NavLink>

          <NavLink
            to="/list"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="" />
            <p>List Items</p>
          </NavLink>

          <NavLink
            to="/orders"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="" />
            <p>Orders</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
