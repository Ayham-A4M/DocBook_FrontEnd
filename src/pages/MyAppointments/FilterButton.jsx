

const FilterButton = ({ name, color, setAppointmentsType, setPage }) => {
    const changeFilter = (event) => {
        event.preventDefault();
        setAppointmentsType(event.target.value);
        setPage(1);
    }
    return (
        <button className={`rounded-full cursor-pointer w-fit py-0.5 px-3 text-[12px] ${color} text-slate-100`} value={name} onClick={(e) => { changeFilter(e) }}>{name}</button>
    )
}

export default FilterButton