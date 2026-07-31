import AdminLayout from "../../components/layout/admin/AdminLayout";
import reportsData from "../../data/reportsData";

export default function Reports() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
            Generate Report
          </button>

        </div>

        <table className="w-full">

          <thead>

            <tr className="bg-gray-50 border-b">

              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Report Name</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {reportsData.map((report) => (

              <tr key={report.id} className="border-b">

                <td className="p-3">{report.id}</td>
                <td className="p-3">{report.report}</td>
                <td className="p-3">{report.date}</td>

                <td className="p-3">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    {report.status}
                  </span>

                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    Download
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}