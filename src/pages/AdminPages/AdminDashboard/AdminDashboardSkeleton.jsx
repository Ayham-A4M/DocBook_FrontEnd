import { FaStethoscope, FaUser, FaNotesMedical, FaCalendarCheck, FaListAlt } from 'react-icons/fa';

const AdminDashboardSkeleton = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center">
            <div className="h-10 w-64 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
          </div>
          <div className="mt-2 h-6 w-80 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className=" rounded-lg p-6 shadow-sm  md:border-l-4 max-[776px]:border-t-4 border-gray-200 dark:border-slate-700 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center">
                <div>
                  <div className="h-5 w-24 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-2"></div>
                  <div className="h-8 w-16 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg p-8 shadow-sm mb-12">
        
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-16 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-slate-700">
                    <td className="py-4 px-4">
                      <div className="h-5 w-32 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-24 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-16 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-20 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default AdminDashboardSkeleton;