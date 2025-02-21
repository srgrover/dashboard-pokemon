import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculatorOutline, IoFootball, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const MenuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visual principal'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={40} />,
    title: 'Counter',
    subTitle: 'Contador cliente side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generación esatática'
  }
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: '400px' }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center gap-2 text-lg md:text-2xl font-bold text-white">
          <IoLogoReact />
          <span>
            Dash
          </span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image 
              width={50} height={50} 
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jonathan Moya</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        
      {
        MenuItems.map( item => (
          <SidebarMenuItem 
            key={item.path}
            {...item} 
          />
        ))
      }
      </div>
    </div>
  );
};
