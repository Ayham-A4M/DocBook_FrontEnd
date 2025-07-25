

const Title = ({ title, icon }) => {
    return (
        <div className="text-[var(--main-blue)] italic dark:text-slate-300 font-normal text-2xl flex items-center gap-2.5">
            <span>{title}</span>
            {icon}
        </div>

    )
}

export default Title