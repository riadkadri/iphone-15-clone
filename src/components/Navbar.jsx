import React from "react";
import { appleImg } from "../utils";
import { bagImg } from "../utils";
import { searchImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width justify-between">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => {
            return (
              <li key={i} className="px-5 text-sm cursor-pointer text-gray">
                <a href="#">{nav}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <a href="">
            <img src={bagImg} alt="search" width={18} height={18} />
          </a>
          <a href="">
            <img src={searchImg} alt="bag" width={18} height={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
