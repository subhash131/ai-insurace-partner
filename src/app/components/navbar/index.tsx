"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuUser } from "react-icons/lu";

const navItems = [
  {
    name: "home",
    icon: IoHomeOutline,
  },
  {
    name: "chat",
    icon: IoChatbubbleEllipsesOutline,
  },
  {
    name: "history",
    icon: LuUser,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="top-0 left-0 h-screen w-20 flex items-center flex-col bg-[#FAFAFA] pt-4 pb-40 justify-between">
      <div className="flex flex-col gap-4">
        {navItems.map(({ icon: Icon, name }, index) => {
          return (
            <div
              key={name}
              className={`flex items-center justify-center p-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors ${
                name === pathname.substring(1) ? "bg-black text-white" : ""
              }`}
            >
              <Icon className="text-2xl" />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center p-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors">
          <IoSettingsOutline className="text-2xl" />
        </div>
        <div className="flex items-center justify-center p-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition-colors">
          <IoLogOutOutline className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
