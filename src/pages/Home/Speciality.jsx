
import SpecialityCard from "../../components/SpecialityCard"
import heart from '../../assets/speciality/heart.svg'
import child from '../../assets/speciality/child.svg'
import neurologist from '../../assets/speciality/Neurologist.svg'
import dermatologist from '../../assets/speciality/dermatologist.svg'
import stomach from '../../assets/speciality/stomach.svg'
import doctor from '../../assets/speciality/doctor.svg'
const Speciality = () => {
    const specialityArray = [
        { pic: doctor, title: 'General' },
        { pic: heart, title: 'Cardiologist' },
        { pic: child, title: 'pediatrician' },
        { pic: neurologist, title: 'Neurologist' },
        { pic: dermatologist, title: 'Dermatologist' },
        { pic: stomach, title: 'Gastroenterologist' },
    ]
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center text-slate-800 dark:text-primary  gap-5">
                <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="text-5xl font-bold text-[var(--main-blue)] mb-6">
                       Match with Experts
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Find the best doctors, professionals, or services in your exact field of need because the right expertise makes all the difference.
                    </p>
                </div>
                <div className="grid md:grid-cols-6 gap-3.5 grid-cols-2">
                    {
                        specialityArray.map((ele, i) => (
                            <div className="w-full flex items-center justify-center" key={i}>
                                <div data-aos-duration="500" data-aos="fade-left" data-aos-delay={`${i * 100}`}>
                                    <SpecialityCard pic={ele.pic} title={ele.title} />
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Speciality