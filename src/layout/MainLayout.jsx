import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
const MainLayout = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="px-[15px]  pt-20 min-h-screen md:px-[100px] ">
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}

export default MainLayout