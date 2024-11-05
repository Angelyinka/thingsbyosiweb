import React from "react";
import Logo from "../../assets/Logo.jpg";
import { BsSearchHeartFill } from "react-icons/bs";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Selfiesticks",
    link: "/#",
  },
  {
    id: 3,
    name: "Led lights",
    link: "/#",
  },
  {
    id: 3,
    name: "Combo Deals",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];



const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-white dark:text-black duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-pink-600 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="tbo" className="w-20" />
              Thingsbyosi
            </a>
          </div>

          {/* Search bar */}
          <div className= "flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search Here"
                className="w-[200px] sm:w[200px] group-hover:w-[300px] 
                transition-all duration-300 
                rounded-full border border-gray-50 px-2 py-1 
                focus:outline-none focus:border-1 focus:border-pink-600 dark:border-gray-700
                dark:bg-pink-100"
              />
              <BsSearchHeartFill className="text-white group:hover:text-pink-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

              {/* Order button */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-pink-400 transition-all 
            duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping 
            className="text-xl text-white drop-shadow-sm cursor-pointer"
            />
          </button>

          {/* Dark mode Switch */}
          <DarkMode />
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-6">
          {Menu.map((data) =>(
              <li key={data.id}>
                <a href={data.link}
                className="inline-block px-4 hover:text-pink-600 duration-200"
                >{data.name}</a>
              </li>
            ))
          }
          {/* Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#"
            className="flex items-center gap-[2px] py-2"
            >
              Browse
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] 
            rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data)=> (
                  <li key={data.id}>
                    <a href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-pink-400"
                    >
                   {data.name}</a>
                  </li>
                ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
