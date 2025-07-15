import Hero from "./Hero"
import Speciality from "./Speciality"
// import DoctorCard from "../../components/DoctorCard"
import Stats from "./Stats"
import Banner from "./Banner"
import useUser from "../../hooks/useUser"
const Home = () => {
  const { user, setUser } = useUser();
  return (
    <div className="w-full min-h-[150vh] flex flex-col  gap-[50px] pb-7">
      <Hero />
      <Speciality />

      <Stats />
      {
        !user &&
        <Banner />
      }
    </div>
  )
}

export default Home