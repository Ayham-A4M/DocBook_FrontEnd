

const Section = ({ title, children }) => {
    return (
        <section className="bg-card rounded-2xl shadow-lg md:p-6 p-3 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-3xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#4B9CD3] font-bold mb-6 pb-3 border-b-2 border-blue-200 ">
                {title}
            </h2>
            {children && <div className="animate__animated animate__fadeInUp">{children}</div>}
        </section>
    );
};

export default Section;