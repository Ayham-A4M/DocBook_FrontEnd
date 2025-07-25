import useGetRole from "../../hooks/useGetRole"
import { CiCircleInfo, CiHeadphones } from "react-icons/ci";
import { FaUserDoctor, FaChartLine, FaCalendarDays,FaUserGroup } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { RiRobot2Line, RiApps2AddFill } from "react-icons/ri";
import {
    FiCalendar,
    FiUser,
} from 'react-icons/fi';
import { CiBookmark } from "react-icons/ci";

import { GoHome } from "react-icons/go";
import { TbHeartbeat } from "react-icons/tb";
import {BiCommentDots} from "react-icons/bi"
const getDirection = () => {
    const role = useGetRole();

    const userdirection = [
        { to: '/', name: 'home', icon: <GoHome /> },
        { to: '/doctors', name: 'doctors', icon: <TbHeartbeat /> },
        { to: '/about', name: 'about', icon: <CiCircleInfo /> },
        { to: '/contact', name: 'contact', icon: <CiHeadphones /> },
        { to: '/myappointments', name: 'appointly', icon: <SlCalender /> },
        { to: '/AIChat', name: 'VitaBot ', icon: <RiRobot2Line /> },
    ]
    const doctordirection = [
        { to: '/doctorappointments', name: 'Appointments', icon: <FiCalendar /> },
        { to: '/reports', name: 'Reports', icon: <FiUser /> },
        { to: '/comments', name: 'Comments', icon: <BiCommentDots /> },
        { to: '/doctorProfile', name: 'Profile', icon: <CiCircleInfo /> },
        { to: '/upcomingAppointments', name: 'Bookings', icon: <CiBookmark /> },

    ]
    const admindirection = [
        { to: '/statistics', name: 'Statistics', icon: <FaChartLine /> },
        { to: '/allDoctors', name: 'Doctors', icon: <FaUserDoctor /> },
        { to: '/newdoctor', name: 'New Doctor', icon: <RiApps2AddFill /> },
        { to: '/allUsers', name: 'Users', icon: <FaUserGroup /> },
        { to: '/holidays', name: 'Holidays', icon: <FaCalendarDays /> },
    ]
   
    if (role == "admin") { return admindirection }
    else if (role == "doctor") { return doctordirection }
    return userdirection
}

export default getDirection