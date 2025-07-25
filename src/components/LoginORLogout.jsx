import { NavLink } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { BsFillKeyFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { Button } from '@/components/ui/button'
import { memo } from 'react';
import axiosInstance from "../helper/axiosInterceptor";
const LoginORLogout = ({ theme }) => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/api/auth/logout');
            if (response.status == 200) {
                toast.success(response?.data?.msg ||'You are now logged out ')
                setUser(null);
                return navigate('/', { replace: true });
            }
        } catch (err) {
            toast.error(err.response.data.msg)
        }
    }

    return (
        <>
            {
                user
                    ?

                    <Button variant="outline"
                        size="icon"
                        onClick={() => handleLogout()}
                        className="relative z-20">

                        <IoLogOut className="text-red-500 size-[1.2rem]" />
                    </Button>



                    :

                    <NavLink to={'/login_signup'}>
                        <Button variant="outline"
                            size="icon"
                            className="relative z-20">
                            <BsFillKeyFill className=" text-popover-foreground size-[1.2rem]" />
                        </Button>

                    </NavLink>

            }





        </>
    )
}

export default memo(LoginORLogout)