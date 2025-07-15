import { FaUsers, FaAward, FaClock, FaHeart, FaTrophy, FaShieldAlt } from "react-icons/fa";

const Stats = () => {
    const stats = [
        {
            icon: FaUsers,
            number: "75,000+",
            label: "Satisfied Patients",
            description: "Health transformations",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: FaAward,
            number: "100+",
            label: "Expert Physicians",
            description: "Specialized doctors",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: FaClock,
            number: "24/7",
            label: "Emergency Services",
            description: "Round the clock",
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-50"
        },
        {
            icon: FaTrophy,
            number: "99.2%",
            label: "Success Rate",
            description: "Treatment outcomes",
            color: "from-purple-500 to-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: FaShieldAlt,
            number: "20+",
            label: "Years of Excellence",
            description: "Healthcare leadership",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-50"
        },
        {
            icon: FaHeart,
            number: "100%",
            label: "Patient Care",
            description: "Compassionate service",
            color: "from-pink-500 to-pink-600",
            bgColor: "bg-pink-50"
        }
    ];

    return (
        <section className="py-20 ">
            <div className="container mx-auto">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="600">
                    <h2 className="text-5xl font-bold text-[var(--main-blue)] mb-6">
                        Excellence in Numbers
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Our dedication to outstanding healthcare is reflected in these milestones
                        and the countless lives we've touched along the way.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                    {stats.map((stat, index) => (

                        <div key={index} className="group text-center" data-aos="fade" data-aos-duration="600" data-aos-delay={`${index*100}`}>

                            <div className={`${stat.bgColor} dark:bg-secondary rounded-2xl p-8 border  hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                    <stat.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-3xl font-bold text-popover-foreground mb-2">{stat.number}</h3>
                                <p className="font-semibold text-muted-foreground mb-2">{stat.label}</p>
                                <p className="text-sm text-muted-foreground">{stat.description}</p>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;