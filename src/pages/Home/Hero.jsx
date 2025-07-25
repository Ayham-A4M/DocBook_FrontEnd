
import { Link } from 'react-router-dom';
import { FaUserMd, FaHeartbeat, FaPills, FaClinicMedical } from 'react-icons/fa';
import {
  Card,

} from "@/components/ui/card"

const Hero = () => {

  return (
    <Card className="text-gray-800 dark:text-primary rounded-[8px] py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="max-[991px]:text-[40px]   text-6xl font-extrabold mb-4 leading-tight tracking-tight" data-aos="fade" data-aos-duration="600">
            Empower Your Health Journey
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0 text-gray-600 dark:text-primary" data-aos="fade" data-aos-duration="600" data-aos-delay="200">
            Instantly book with top doctors and manage your care with ease.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">

            <Link
              to="/doctors"
              className=" bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-1.5 px-8 rounded-full"
              data-aos="fade" data-aos-duration="600" data-aos-delay="400"
            >
              <span className=" flex items-center">
                <FaUserMd className="mr-2" />
                Meet Our Doctors
              </span>
            </Link>

          </div>
        </div>

        {/* Animated Icon Cluster */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative z-10" >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute top-0 left-0 animate-pulse">
              <FaHeartbeat className="text-5xl md:text-7xl text-blue-500 opacity-70 hover:text-blue-700 hover:scale-110 transition duration-300" />
            </div>
            <div className="absolute bottom-0 right-0 animate-pulse delay-200">
              <FaPills className="text-5xl md:text-7xl text-blue-400 opacity-70 hover:text-blue-700 hover:scale-110 transition duration-300" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-400">
              <FaClinicMedical className="text-6xl md:text-8xl text-blue-600 opacity-70 hover:text-blue-800 hover:scale-110 transition duration-300" />
            </div>
          </div>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-teal-100 rounded-full opacity-50 transform translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-36 md:h-36 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
};

export default Hero;