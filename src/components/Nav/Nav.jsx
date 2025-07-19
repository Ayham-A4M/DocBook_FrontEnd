import getDirection from "./Directions";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { LuPanelRightClose } from "react-icons/lu";
import LinkComponent from "./LinkComponent"
import { useState } from "react";
import { ModeToggle } from "../dark-light-button";
import Logo from "../Logo";
import SideBar from "./SideBar";
import LoginORLogout from "../LoginORLogout";
import { memo } from 'react';

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showDropMenue, setShowDropMenu] = useState(false);
  return (
    <>
      <div className="w-full z-50 px-[15px] min-[800px]:px-[100px] py-5 bg-slate-50 dark:bg-slate-800 dark:border-slate-500 flex justify-between items-center border-b-2 border-[var(--main-blue)] fixed top-0">
        <Logo />
        <div className=" gap-6 min-[800px]:flex shrink  hidden items-center w-fit">
          <div className="flex gap-[6px] items-center w-fit">
            {
              getDirection().map((e, index) => (
               
                <LinkComponent to={e.to} icon={e.icon?e.icon:false} name={e.name} key={index} setShowDropMenu={setShowDropMenu} />


              ))
            }
            <ModeToggle/>
            <LoginORLogout />
          </div>
         
         
        </div>
        {
          !showSideBar ?
            <RiMenuUnfold2Fill className="min-[800px]:hidden    inline-block text-[30px] cursor-pointer text-[var(--main-blue)] mr-1.5" onClick={() => { setShowSideBar(prev => !prev) }} />
            : <LuPanelRightClose className="min-[800px]:hidden    inline-block text-[30px] cursor-pointer text-[var(--main-blue)] mr-1.5" onClick={() => { setShowSideBar(prev => !prev) }} />
        }

      </div>

      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

    </>

  )
}

export default memo(Nav)