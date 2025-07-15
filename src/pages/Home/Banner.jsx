import { FaUserPlus, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,

} from "@/components/ui/card"
const Banner = () => {


    return (
        <Card className="bg-card py-16 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div
                        className="relative z-[20] bg-white text-gray-800 dark:bg-slate-700 dark:text-popover-foreground rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto flex flex-col items-center text-center transform transition duration-500 hover:shadow-2xl"

                    >
                        {/* Decorative Element */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-teal-200 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-200 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2 animate-pulse"></div>

                        {/* Icon and Heading */}
                        <div className="mb-6">
                            <FaUserPlus className="text-5xl md:text-6xl text-blue-500 animate-bounce" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-primary">
                            Join Your Health Hub
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-md dark:text-popover-foreground">
                            Create an account to unlock seamless appointment booking, personalized care plans, and exclusive health tips.
                        </p>

                        {/* Call to Action */}
                        <Link
                            to="/login_signup"
                            className="relative bg-blue-500 text-white font-semibold py-3 px-8 rounded-full overflow-hidden group flex items-center"
                        >
                            <span className="absolute inset-0 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
                            <span className="relative flex items-center">
                                Get Started
                                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-24 bg-teal-100 opacity-50">

                </div>

        </Card>
    );
};

export default Banner;