import SearchInput from '../../../components/SearchInput';
import SelectSpec from '../../../components/SelectSpec';
import { memo } from 'react';
const FilterDoctors = ({ setSpecialize, setSearchByName, searchByName }) => {




  return (
    <div className='w-full py-5 border-[2px] rounded-2xl px-2 '>
      <div className='flex  justify-between flex-col gap-3 md:flex-row'>
        <SearchInput setSearchValue={setSearchByName} searchValue={searchByName} />
        <SelectSpec setValue={setSpecialize} />
      </div>
    </div>
  );
};

export default memo(FilterDoctors);