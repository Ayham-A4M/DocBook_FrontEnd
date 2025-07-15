

const Header = ({icon,title,subTitle}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-8 gap-4">
            <div className="flex items-center gap-4 text-[var(--main-blue)]">

                {
                    icon
                }

                <div>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-gray-500 dark:text-slate-300">{subTitle}</p>
                </div>
            </div>

        </div>
    )
}

export default Header