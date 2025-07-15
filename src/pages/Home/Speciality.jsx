
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
                <h1 className="text-3xl  dark:text-primary font-extrabold text-[var(--main-blue)]">Find by Speciality</h1>
                <span className="text-center w-5/10 font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti voluptates debitis eligendi possimus. Non ea odit consectetur esse beatae </span>
                <div className="grid md:grid-cols-6 gap-3.5 grid-cols-2">
                    {
                        specialityArray.map((ele, i) => (
                            <div className="w-full flex items-center justify-center" key={i}>
                                <div data-aos-duration="500" data-aos="fade-left" data-aos-delay={`${i*100}`}>
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