import { IoPulseOutline } from "react-icons/io5";

const Logo = ({ color,size }) => {
    return (
        <div className={`flex items-center w-fit gap-1  ${size?size:'text-[18px]'}  ${color ? color : 'text-[var(--main-blue)]'} `}>
            <IoPulseOutline />
            <span className=" font-extrabold text-[18px]">DocBook</span>
            <IoPulseOutline className="rotate-180" />
        </div>
    )
}

export default Logo