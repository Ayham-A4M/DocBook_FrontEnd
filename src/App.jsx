import './index.css'
import React, { createContext, Suspense, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import PortectRoute from './components/Auth/PortectRoute'
import LoadingPage from './components/LoadingPage'
import Home from "./pages/Home/Home"
import MainLayout from './layout/MainLayout'
import DoctorLayout from './layout/DoctorLayout'
import UnAuthorized from './pages/UnAuthorized/UnAuthorized'
import useGetUser from './hooks/useGetUser'
import { ThemeProvider } from './components/theme-provider'
import AOS from 'aos';
import 'aos/dist/aos.css';
import useScrollTop from './hooks/useScrollTop'

// Lazy Components
// userPages
const Doctors = React.lazy(() => import('./pages/userPages/Doctors/Doctors'))
const MyAppointments = React.lazy(() => import('./pages/userPages/MyAppointments/MyAppointments '))
const DoctorPage = React.lazy(() => import('./pages/userPages/DoctorPage/DoctorPage'))
const About = React.lazy(() => import('./pages/userPages/About/About'))
const ContactUs=React.lazy(()=>import('./pages/userPages/Contact/ContactUs'));
const Login_SignUp = React.lazy(() => import('./pages/Login-SingUp/Login_SignUp'))
const AIChat = React.lazy(() => import('./pages/userPages/AIChat/AIChat'))
const ReportPage = React.lazy(() => import('./pages/userPages/Report/ReportPage'));
// doctorPages
const DoctorAppointments = React.lazy(() => import('./pages/doctorPages/MangmentAppointments/DoctorAppointments'))
const Reports = React.lazy(() => import('./pages/doctorPages/Rrports/Reports'))
const Comments = React.lazy(() => import('./pages/doctorPages/Comments/Comments'))
const DoctorProfile = React.lazy(() => import('./pages/doctorPages/Profile/DoctorProfile'))
const UpComingAppointments = React.lazy(() => import('./pages/doctorPages/UpComingAppointments/UpComingAppointments'))
// adminPages

const NewDoctor = React.lazy(() => import('./pages/AdminPages/NewDoctor/NewDoctor'))
const AllDoctors = React.lazy(() => import('./pages/AdminPages/AllDoctors/AllDoctors'))
const AdminDashboard = React.lazy(() => import('./pages/AdminPages/AdminDashboard/AdminDashboard'))
const HolidayPage = React.lazy(() => import('./pages/AdminPages/Holidays/HolidayPage'))
const AllUsers = React.lazy(() => import('./pages/AdminPages/AllUsers/AllUsers'))


//public pages
const SuccessfulAppointment = React.lazy(() => import('./pages/SuccessfulOperation/SuccessfulAppointment'));

export const User = createContext({});
const App = () => {
  useScrollTop();
  const { user, setUser, loadingUser } = useGetUser();
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className=" overflow-hidden">
        <Toaster position='bottom-right' reverseOrder={true} gutter={8} toastOptions={{ duration: 5000 }} />
        <User.Provider value={{ user, setUser, loadingUser }}>
          <Suspense fallback={<LoadingPage />}>
            <Routes>

              {/* User Routes */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                {/* <Route element={<PortectRoute role={'user'} />}> */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctorpage" element={<DoctorPage />} />
                <Route path="/myappointments" element={<MyAppointments />} />
                <Route path="/report" element={<ReportPage />} />
              </Route>
              {/* </Route> */}
              {/* <Route element={<PortectRoute role={'user'} />}> */}
              <Route path="/AIChat" element={<AIChat />} />
              {/* </Route> */}
              {/* User Routes */}


              {/* doctor routes */}
              {/* <Route element={<PortectRoute role={'doctor'} />}> */}
              <Route element={<DoctorLayout />}>
                <Route path="/doctorappointments" element={<DoctorAppointments />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/doctorProfile" element={<DoctorProfile />} />
                <Route path="/reportPage" element={<ReportPage />} />
                <Route path="/upcomingAppointments" element={<UpComingAppointments />} />
              </Route>
              {/* </Route> */}
              {/* doctor routes */}

              {/* admin routes */}

              {/* <Route element={<PortectRoute role={'admin'} />}> */}
              <Route element={<DoctorLayout />}>

                <Route path="/statistics" element={<AdminDashboard />} />
                <Route path="/allDoctors" element={<AllDoctors />} />
                <Route path="/newdoctor" element={<NewDoctor />} />
                <Route path="/allUsers" element={<AllUsers />} />
                <Route path="/holidays" element={<HolidayPage />} />
              </Route>

              {/* </Route> */}



              {/* admin routes */}

              {/* public routes */}
              <Route path="/loading" element={<LoadingPage />} />
              <Route path="/login_signup" element={<Login_SignUp />} />
              <Route path="/unauthorized" element={<UnAuthorized />} />
              <Route path="/successfulOperation" element={<SuccessfulAppointment />} />
              {/* public routes */}
            </Routes>
          </Suspense>
        </User.Provider>
      </div>
    </ThemeProvider>
  )
}
export default App