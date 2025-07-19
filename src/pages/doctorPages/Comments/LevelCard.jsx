
import StatsCard from "../../../components/StatsCard";
import { BsStars } from "react-icons/bs";
import { GiStethoscope } from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";
import { FaCrown,FaSeedling } from "react-icons/fa6";
import { memo } from 'react';

const doctorLevel = (rate) => {
    const Levels = {
        "Newbie": { icon: <FaSeedling className="text-[25px] text-green-400" />, title: 'Newbie' },
        "Rising Star": { icon: <BsStars className="text-[25px] text-purple-400" />, title: 'Rising Star' },
        "Trusted Healer": { icon: <GiStethoscope className="text-[25px] text-blue-500" />, title: 'Trusted Healer' },
        "Elite Doctor": { icon: <RiMedalFill className="text-[25px] text-yellow-400" />, title: 'Elite Doctor' },
        "Legendary Healer": { icon: <FaCrown className="text-[25px] text-yellow-500" />, title: 'Legendary Healer' },
    }
    const type = (
        (rate < 1.9 && rate >= 0) ?"Newbie": (rate>=2&&rate<3.5)?"Rising Star":(rate>=3.5&&rate<4.5)?"Trusted Healer":(rate<5&&rate>=4.5)?"Elite Doctor":"Legendary Healer"
)
    return Levels[type];

}


const LevelCard = ({ doctorRate }) => {
    const { icon, title } =doctorLevel(doctorRate);
    return (
        
            <StatsCard icon={icon} status={'Tire'} value={<span className="text-[18px]">{title}</span>} borderColor={'border-green-300'} />
        
    )
}

export default memo(LevelCard)