
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ContactUs = () => {
    const contact = [
        {
            icon: <FiPhone className="text-[var(--main-blue)] text-4xl mx-auto mb-4 animate-bounce-slow" />,
            action: 'Make a call',
            title: 'Call us',
            info: '+91038777352'
        },
        {
            icon: <FiMail className="text-[var(--main-blue)]  text-4xl mx-auto mb-4 animate-bounce-slow" />,
            action: 'Send an email',
            title: 'Email Us',
            info: 'supportAppointment@gmail.com'
        },
        {
            icon: <FiMapPin className="text-[var(--main-blue)] text-4xl mx-auto mb-4 animate-bounce-slow" />,
            action: 'Visit us',
            title: '',
            info: 'Syria-Damascus-Park92'
        },
    ]
    return (
        <div className=" min-h-screen font-sans">
            {/* Header Section */}
            <header className="bg-gradient-to-br from-blue-500  to-purple-400 rounded-[6px] text-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-up" data-aos-duration="600">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-slide-in">
                        Contact Us
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        We're here to help you with your healthcare needs. Reach out to us anytime!
                    </p>
                    <a
                        href="#contact-form"
                        className="inline-block bg-white text-indigo-600 font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </header>

            {/* Contact Info Section */}
            <section className="py-20 ">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl text-[var(--main-blue)] font-bold  text-center mb-12">
                        Connect with Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {
                            contact && contact.map((e, i) => (
                                <div key={i} data-aos="fade-up" data-aos-duration="600" data-aos-delay={`${i*150}`}>
                                    <div className="bg-card  p-8 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 text-center">
                                        {
                                            e.icon
                                        }
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-300 mb-3">{e.title}</h3>
                                        <p className="text-gray-600 dark:text-slate-200 mb-2">{e.info}</p>
                                        <a
                                            href=""
                                            className="text-[var(--main-blue)] hover:text-blue-600 font-semibold transition-colors duration-300"
                                        >
                                            {e.action}

                                        </a>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 w-full">
                <div className="container w-full px-0 md:px-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[var(--main-blue)] text-center mb-12">
                        Send Us a Message
                    </h2>
                    <div className="w-full mx-auto bg-card p-2 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-primary   font-semibold mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full inputStyle"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-primary font-semibold mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full inputStyle"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-primary font-semibold mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Subject"
                                    className="w-full inputStyle"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-primary font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full inputStyle resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className='submitButton flex justify-center items-center gap-4 '
                                style={{ padding: '14px 0px' }}
                            >
                                Send Message <FiSend className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
};

export default ContactUs;