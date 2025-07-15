import { FaStethoscope, FaUser, FaNotesMedical, FaCalendarCheck, FaListAlt } from 'react-icons/fa';

const AdminDashboardSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center">
            <FaStethoscope className="text-blue-600 text-4xl mr-3" />
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="mt-2 h-6 w-80 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-200 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center">
                <div className="text-gray-200 text-3xl mr-4">
                  {index === 0 && <FaUser />}
                  {index === 1 && <FaStethoscope />}
                  {index === 2 && <FaNotesMedical />}
                  {index === 3 && <FaCalendarCheck />}
                </div>
                <div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <div className="flex items-center mb-6">
            <FaUser className="text-blue-600 mr-2" />
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-12">
          <div className="flex items-center mb-6">
            <FaListAlt className="text-blue-600 mr-2" />
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-200 mr-3 animate-pulse"></div>
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-5 w-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex items-center mb-6">
            <FaCalendarCheck className="text-blue-600 mr-2" />
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                  <th className="py-3 px-4">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4">
                      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
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