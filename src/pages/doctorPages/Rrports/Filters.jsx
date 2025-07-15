
import {  FiDownload, FiSearch, } from 'react-icons/fi';
import {Button} from '@/components/ui/button'
const Filters = ({ setName, name,setFilterStatus }) => {
    const handleChangeStatus=(event)=>{
        console.log(event.target.value)
        event.preventDefault();
        setFilterStatus(event.target.value);
    }
    return (
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="relative w-full sm:w-80">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    value={name}
                    placeholder="Search reports..."
                    className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    onChange={(e) => { setName(e.target.value); }}
                />
            </div>
            <div className="flex gap-3 max-[776px]:flex-wrap">
                <Button value={'archived'} className="py-3 dark:bg-primary" onClick={handleChangeStatus}>
                        archived
                </Button>
                <Button value={'completed'} className="py-3 dark:bg-primary bg-green-500 hover:bg-green-600" onClick={handleChangeStatus}>
                        completed
                </Button>
                
               
            </div>
        </div>
    )
}

export default Filters