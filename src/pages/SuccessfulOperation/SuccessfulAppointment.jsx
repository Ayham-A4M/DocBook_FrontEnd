import done from '../../assets/done.svg';
import telescope from '../../assets/telescope.svg';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SuccessfulAppointment = () => {
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search);
    const Message = queryParams.get('MSG')
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className='flex items-center flex-col gap-4'>
                {
                    location.state?.OKMSG ?
                        <>
                            <div className='w-fit' data-aos="fade-up" data-aos-duration="1200">
                                <img src={done} alt="DoneSVG" className='size-60' />
                            </div>
                            <span className=' font-light text-xl px-4 text-center text-[var(--main-blue)]' data-aos="fade-up" data-aos-duration="1100">{location.state.OKMSG}</span>
                        </>

                        :
                        <>
                            <div className='w-fit' data-aos="fade-up" data-aos-duration="1200">
                                <img src={telescope} alt="DoneSVG" className='size-60' />
                            </div>
                            <span className='text-popover-foreground font-light text-xl px-4 text-center' data-aos="fade-up" data-aos-duration="1100">Ooops!! searching for something</span>

                        </>

                }
                <div className='flex items-center gap-6' data-aos="fade-up" data-aos-duration="1000">
                    <span className='text-[var(--main-blue)]'>Back to home</span>
                    <Link to={'/'}>
                        <Button size="icon" variant="outline" className="border-2">
                            <IoHome />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default SuccessfulAppointment