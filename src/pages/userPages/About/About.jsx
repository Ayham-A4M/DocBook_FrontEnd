
import { FiCalendar, FiShield, FiArrowRight, FiClock, FiUserCheck, FiHeart, FiStar } from 'react-icons/fi';
import pic from '../../../assets/about-image.png'
const About = () => {
  const valueCards = [
    {
      title: "Compassionate Care",
      icon: <FiHeart className="text-[var(--main-blue)] text-4xl mx-auto mb-4 animate-bounce-slow" />,
      describe: "We design every feature to prioritize patient comfort and accessibility."
    },
    {
      title: "Trust & Security",
      icon: <FiShield className="text-[var(--main-blue)] text-4xl mx-auto mb-4 animate-bounce-slow" />,
      describe: "Your data is safeguarded with cutting-edge security protocols."
    },
    {
      title: "Excellence",
      icon: <FiStar className="text-[var(--main-blue)] text-4xl mx-auto mb-4 animate-bounce-slow" />,
      describe: "We strive for perfection in connecting you with top-tier providers."
    },
  ]

  const featureCards = [
    {
      title: "Effortless Scheduling",
      icon: <FiCalendar className="text-[var(--main-blue)] text-3xl mb-4" />,
      describe: "Book appointments in seconds with our intuitive interface.",
    },
    {
      title: "Verified Professionals",
      icon: <FiUserCheck className="text-[var(--main-blue)] text-3xl mb-4" />,
      describe: "Connect with trusted, certified healthcare providers.",
    },
    {
      title: "Always Available",
      icon: <FiClock className="text-[var(--main-blue)] text-3xl mb-4" />,
      describe: "Manage your appointments 24/7, anytime, anywhere.",
    },
    {
      title: "Data Protection",
      icon: <FiShield className="text-[var(--main-blue)] text-3xl mb-4" />,
      describe: "Your privacy is our priority with robust security measures.",
    },
  ]
  return (
    <div className="min-h-screen mb-7">
      {/* Header Section */}
      <header className="bg-gradient-to-br from-blue-500 to-purple-400 text-white py-24 rounded-[6px] relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10" data-aos="fade-up" data-aos-duration="600" >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-slide-in" >
            About Our Healthcare Platform
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed" data-aos-dealy="200">
            Simplifying medical appointments with a seamless, modern, and patient-first approach.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"

          >
            Join Now
          </a>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20  mt-5 w-full">
        <div className="container mx-auto px-3 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div >
              <h2 className="text-3xl sm:text-4xl font-bold  mb-6 text-[var(--main-blue)]">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                We're redefining healthcare access by offering a state-of-the-art platform that makes booking medical appointments effortless. Our vision is to create a world where patients and providers connect instantly, securely, and with confidence.
              </p>
              <a
                href="/learn-more"
                className="inline-flex items-center text-[var(--main-blue)] font-semibold hover:text-indigo-800 transition-colors duration-300"
              >
                Discover More
                <FiArrowRight className="ml-2 text-xl" />
              </a>
            </div>
            <div >
              <div className="relative group">
                <img
                  src={pic}
                  alt="Our Vision"
                  className="rounded-2xl shadow-lg w-full group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-t ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              valueCards.map((e, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="600" data-aos-delay={`${i * 150}`}>
                  <div className="bg-card p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 text-center">
                    {
                      e.icon
                    }
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-slate-200 mb-3">

                      {e.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300">
                      {e.describe}
                    </p>
                  </div>
                </div>
              ))
            }






          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Why We're Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
              featureCards.map((e, i) => (
                <div key={i} data-aos="fade" data-aos-duration="600" data-aos-delay={`${i * 150}`}>
                  <div  className="relative dark:bg-card bg-slate-100 p-6 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors overflow-hidden duration-300">
                    {
                      e.icon
                    }
                    <h3 className="text-lg font-semibold text-primary  mb-2">
                      {e.title}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-300 text-sm">
                      {e.describe}
                    </p>
                    <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-300 rounded-bl-full opacity-30"></div>
                  </div>
                </div>
              ))
            }






          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-tl from-blue-500 to-purple-400 rounded-[6px] text-white">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up" data-aos-duration="600">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Start Your Healthcare Journey Today
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Experience the easiest way to book medical appointments with our innovative platform.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </section>



    </div>
  );
};

export default About;