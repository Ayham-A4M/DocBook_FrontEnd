import search from '../../assets/search.svg';
import DoctorCard from "../../components/DoctorCard";
import FilterDoctors from "./FilterDoctors";
import useGetDoctors from "../../hooks/useGetDoctors";
import Loader1 from "../../components/Loader1";
import PaginationButtons from '../../components/PaginationButtons';
import MainTitle from '../../components/MainTitle';
const Doctors = () => {
  const { doctors, limit, loading, setSpecialize, setSearchByName, searchByName,page,setPage } = useGetDoctors();

  return (
    <div className="w-full max-w-full mx-auto py-3">
      {/* Filter Section */}
      <div className="mb-6">
        <MainTitle mainTitle={'Your Health Journey Starts Here'} subTitle={'Connect with trusted doctors and book appointments with confidence'}/>
        
        <FilterDoctors setSpecialize={setSpecialize} setSearchByName={setSearchByName} searchByName={searchByName} />
      </div>

      {/* Doctors Grid */}
      {
        loading ?
          <div className="py-6 flex flex-col justify-center items-center gap-6">
            <Loader1 />
            <span className="text-center text-gray-500 text-lg">Loading ...</span>
          </div>
          :
          (doctors?.length > 0 && doctors) ?
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                doctors?.map((doctor, i) => (
                  <div key={i} className="flex justify-center">
                    <DoctorCard doctor={doctor} />
                  </div>
                ))
              }
            </div>
            :
            <div className="py-6 flex flex-col items-center justify-center gap-6 ">
              <div className="w-fit">
                <img src={search} alt="doctor_not_found" className='size-48' />
              </div>
              <span className="text-center text-gray-500 text-lg">Doctor not found </span>
            </div>
      }
      <div className='py-6 flex justify-center'>
        <PaginationButtons limit={limit} setPage={setPage} page={page}/>
      </div>

    </div>
  );
};


export default Doctors;