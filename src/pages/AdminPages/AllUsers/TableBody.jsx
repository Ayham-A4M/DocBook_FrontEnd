import { Button } from '@/components/ui/button'
import { MdDelete } from "react-icons/md";
import users from '../../../assets/users.svg'
const TableBody = ({ setShowDeletePopUp, setUserId, data }) => {
  return (
    <>
      {
        data?.users?.length>0
          ?
          data.users.map((e) => (
            <tr className="hover:bg-slate-100 dark:hover:bg-slate-800" key={e._id}>
              <td className="py-4 text-center">{e.fullName}</td>
              <td className="py-4 text-center">{e.email}</td>
              <td className="py-4 text-center">{e.age || 0}</td>
              <td className="py-4 text-center">{e.phoneNumber}</td>
              <td className="py-4 text-center">
                <Button variant="outline" size="icon" onClick={() => { setShowDeletePopUp(true); setUserId(e._id) }}>
                  <MdDelete className="text-red-500" />
                </Button>
              </td>
            </tr>
          ))
          :
          <tr>
            <td colSpan={5} className='py-12 gap-3'>
              <div className='flex items-center flex-col gap-3 w-full '>
                <div className='w-fit'>
                  <img src={users} className='size-44' />
                </div>
                <span className='text-gray-500 dark:text-slate-300'>No users in system</span>
              </div>
            </td>
          </tr>

      }


    </>
  )
}

export default TableBody