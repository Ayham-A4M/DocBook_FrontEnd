import { Outlet } from "react-router-dom"
import useUser from "../../hooks/useUser"
import { Navigate } from "react-router-dom"
import Loader1 from "../Loader1"
const PortectRoute = ({ role }) => {
  const { user, loading } = useUser();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader1 />
      </div>
    )
  }
  if (role == user?.role) {
    return <Outlet />
  }
  if (user) {
    return <Navigate to={'/unauthorized'} replace />
  }
  return <Navigate to={'/login_signup'} replace />

}

export default PortectRoute