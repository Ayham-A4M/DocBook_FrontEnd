import { Button } from '@/components/ui/button'
import { MdDelete } from "react-icons/md";
const TableBody = ({ setShowDeletePopUp, setUserId, data }) => {
  return (
    <>
      {
        data?.users?.length > 0
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
            <td className="py-6 text-slate-500 dark:text-slate-300 text-center" colSpan={5}>
              No users in system
            </td>
          </tr>

      }


    </>
  )
}

export default TableBody