import { Outlet } from "react-router-dom"
import SecondSideBar from "../components/SecondSideBar";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";



const DoctorLayout = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className={`${showSideBar ? 'h-screen overflow-y-hidden' : ''}`}>
            <div className="flex w-full relative">
                <SecondSideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />



                <div className="w-full  rounded-tr-[6px] rounded-br-[6px] min-h-screen ">
                    <div className="py-4 px-4 hidden justify-end max-[991px]:flex border-b-2 border-blue-400">
                        <CiMenuFries className="text-[25px]" onClick={() => { setShowSideBar(prev => !prev) }} />
                    </div>
                    <div className="w-full px-2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorLayout