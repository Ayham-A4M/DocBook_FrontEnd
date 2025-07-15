import { useContext } from "react"
import { User } from "../App"
const useUser = () => {
    const user=useContext(User);
    return {user:user.user,setUser:user.setUser,loading:user.loadingUser}
}

export default useUser