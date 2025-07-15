import Login from "./Login"
import SingUp from "./SignUp"
import { useEffect, useState } from "react"
import onlineDoctor from '../../assets/LoginSvgs/onlineDoctor.svg'
import doctorTeam from '../../assets/LoginSvgs/doctorTeam.svg'
import report from '../../assets/LoginSvgs/report.svg'
import security from '../../assets/LoginSvgs/security.svg'

const Login_SignUp = () => {
    const leftSectionContent = [
        { pic: onlineDoctor, caption: 'Your health matters__anytime,anywhere' },
        { pic: doctorTeam, caption: 'Together for your health__trusted skilled,compassionate' },
        { pic: report, caption: 'Knowlidge is power__understand your health better' },
        { pic: security, caption: 'Your health information__is safe with us' }
    ]

    const [leftContentCounter, setLeftContentCounter] = useState(0);
    const [showSignUp, setShowSignUp] = useState(true);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setLeftContentCounter(prev => prev >= 3 ? 0 : prev + 1)

        }, 8000)
        return () => clearInterval(interval)
    }, [leftSectionContent.length])
    return (
        <div className="flex bg-white  light justify-center items-center px-3 min-h-screen">
           

            <div className=" w-full shadow-2xl max-w-[1000px] gap-0 grid grid-cols-1 md:grid-cols-2">
                {
                    showSignUp
                        ?
                        <SingUp setShowSignUp={setShowSignUp} />
                        :
                        <Login setShowSignUp={setShowSignUp} />
                }
                <div className="bg-[#2c4ca2] relative  items-center justify-center rounded-r-[6px] hidden md:flex">
                    <div className="absolute h-72 w-72 rounded-full bg-[#3457b7] z-0   top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></div>
                    <div className="absolute h-56 w-56 rounded-full bg-[#4365c3] z-0  top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"></div>
                    <div className="flex items-center  justify-center z-20">
                        <div key={leftContentCounter} className=" flex items-center flex-col gap-12" data-aos="fade" data-aos-duration="600">
                            <img src={leftSectionContent[leftContentCounter].pic} alt="onlineDoctor" className="size-72  transition-all duration-300" />
                            <span className="text-slate-100">{leftSectionContent[leftContentCounter].caption}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login_SignUp