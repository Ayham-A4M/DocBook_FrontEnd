

const StatsticsCard = ({name,value,borderColor}) => {
    return (
        <div className={`bg-white dark:bg-slate-700 p-4 rounded-lg shadow border-l-4 hover:translate-y-[-5px] duration-300 ${borderColor} `} >
            <h3 className={`font-medium capitalize text-${borderColor.slice(7)}`}>{name}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    )
}

export default StatsticsCard