import getDirection from "./Directions"
import { NavLink } from "react-router-dom"
import Logo from "../Logo"
import LoginORLogout from "../LoginORLogout"
import { ModeToggle } from "../dark-light-button"
const SideBar = ({ showSideBar, setShowSideBar }) => {
    return (
        <>
            {
                showSideBar &&
                <div className="w-full fixed h-[calc(100vh-72px)] top-[72px] z-30 bg-[#00000039] backdrop:blur-xl ">
                </div>
            }

            <div className={`fixed z-40 dark:bg-[#192538] duration-300 overflow-hidden   w-[80%] h-[calc(100vh-72px)] ${showSideBar ? 'right-0' : 'right-[-150%]'} bg-[#e2e9f2] top-[72px]`} >
                <div className="relative  flex flex-col px-2.5 py-4  gap-[20px] w-full">

                    <div className="absolute inset-0 ">
                        <div className="absolute top-[20%] left-[50%] w-16 aspect-square  bg-blue-200 rounded-full opacity-50 transform "></div>
                        <div className="absolute bottom-[-22%] left-[32%] w-16 aspect-square  bg-blue-200 rounded-full opacity-50 transform "></div>
                        <div className="absolute top-[56%] left-[66%] translate-x-[-57%] w-16 aspect-square  bg-green-300 rounded-full opacity-50 transform "></div>
                        <div className="absolute top-[0] right-0  w-16 aspect-square translate-x-[50%] bg-sky-200 rounded-full opacity-50 transform "></div>
                        <div className="absolute top-[80%] left-0 translate-x-[-30%]  w-16 aspect-square  bg-pink-200 rounded-full opacity-50 transform "></div>

                    </div>

                    <Logo />

                    <div className="w-full flex flex-col ">
                        {
                            getDirection().map((e, i) => (
                                <div className="w-full py-3.5 border-b-2 border-black dark:border-slate-400" key={i}>
                                    <NavLink to={e.to} onClick={() => { setShowSideBar(false) }} className={(({ isActive }) => ` flex w-fit items-center gap-2.5 dark:text-slate-100 relative text-[17px] font-medium px-3.5 py-1 rounded-[2px]   ${isActive ? 'text-slate-100 bg-[var(--main-blue)]' : 'text-slate-800'}`)}>
                                        {e.icon && e.icon}
                                        {e.name}
                                    </NavLink>

                                </div>
                            ))
                        }
                        <div className="w-full py-5 flex  justify-between mt-10 text-slate-100 text-[15px]">
                            <LoginORLogout theme={'user'} />
                            <ModeToggle />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar