import { FaSearch } from "react-icons/fa"

const SearchInput = ({ searchValue, setSearchValue }) => {

    return (
        <div className="relative w-[95%] max-w-[380px] ">
            <input type="text" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} className="inputStyle" placeholder="Search..." />
            <FaSearch className=" top-[50%] translate-y-[-50%] absolute left-[13px] text-[var(--main-blue)]" />
        </div>
    )
}

export default SearchInput