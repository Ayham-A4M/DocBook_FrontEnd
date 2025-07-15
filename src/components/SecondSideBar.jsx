import { NavLink } from "react-router-dom";
import LoginORLogout from "./LoginORLogout";
import getDirection from './Nav/Directions';
import Logo from '../components/Logo'
import { ModeToggle } from "./dark-light-button";
// this side bar for admin and doctors roles
const SecondSideBar = ({ showSideBar }) => {
    const directions = getDirection();
    return (
        <>


            <div className={`w-64 max-[991px]:w-[70%] relative dark:bg-gray-800   bg-[var(--main-blue)] min-h-screen text-white p-6 max-[991px]:top-0 ${showSideBar ? 'max-[991px]:left-[0px]' : 'max-[991px]:left-[-100%]'}  max-[991px]:absolute z-30 `}>

                <div className='mb-6'>
                    <Logo color={'text-white'} />
                </div>

                <nav className="space-y-4    ">
                    {
                        directions.map((e, i) => (
                            <NavLink to={e.to} key={i} className={(({ isActive }) => `flex items-center gap-3 p-2 ${isActive ? 'bg-gray-300/15 border-r-6 border-white' : ''} rounded-tl-lg rounded-bl-lg rounded-tr-[3px] rounded-br-[3px]`)}>
                                {
                                    e.icon
                                }
                                {
                                    e.name
                                }
                            </NavLink>
                        ))
                    }
                    <div className="justify-between  items-center flex w-full">
                        <LoginORLogout />
                        <ModeToggle />
                    </div>

                </nav>
            </div>


        </>
    )
}

export default SecondSideBar