
import { NavLink } from "react-router-dom"
const LinkComponent = ({ to, name, icon }) => {
  return (

    <NavLink to={to} className={(({ isActive }) => `text-[17px] font-medium flex items-center gap-1  ${isActive ? 'text-slate-100 bg-[var(--main-blue)]' : 'text-slate-800 dark:text-popover-foreground'} px-4 py-[3px] rounded-[5px] duration-300 hover:bg-[var(--main-blue)] hover:text-slate-100`)}
    >{name}
      {
        icon &&
        icon
      }
    </NavLink>


  )
}

export default LinkComponent