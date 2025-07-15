import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../Logo';
const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 py-6 ">
      <div className=" px-3 max-w-6xl mx-auto ">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-8">

          {/* About Column */}
          <div className=' max-[768px]:flex flex-col  max-[768px]:items-center'>
            <div className='mb-3'>
              <Logo size={'text-[25px]'} />
            </div>
            <p>
              Simple healthcare
            </p>
          </div>



          {/* Contact Info */}
          <div className='max-[768px]:flex flex-col  max-[768px]:items-center'>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 max-[768px]:flex flex-col  max-[768px]:items-center">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 flex-shrink-0" />
                <span className="">(123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0" />
                <span className="">info@docbook.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span className="">123 Medical Plaza, San Francisco</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='max-[768px]:flex flex-col  max-[768px]:items-center'>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className=" text-slate-700  dark:text-slate-300  transition text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className=" text-slate-700  dark:text-slate-300  transition text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className=" text-slate-700  dark:text-slate-300 transition text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className=" text-slate-700 dark:text-slate-300  transition text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--main-blue)] pt-6 text-center  text-sm">
          <p>© {new Date().getFullYear()} DocBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;