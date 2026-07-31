import AdminLayout from "../../components/layout/admin/AdminLayout";
import adminJobsData from "../../data/adminJobsData";

export default function Jobs() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between items-center mb-5">

          <h1 className="text-2xl font-bold">
            Jobs Management
          </h1>

          <input
            type="text"
            placeholder="Search Jobs..."
            className="border px-4 py-2 rounded-lg"
          />

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            {adminJobsData.map((job) => (

              <tr key={job.id} className="border-b">

                <td className="p-3">{job.id}</td>
                <td className="p-3">{job.title}</td>
                <td className="p-3">{job.company}</td>
                <td className="p-3">{job.location}</td>
                <td className="p-3">{job.salary}</td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-xs
                    ${
                      job.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : job.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {job.status}
                  </span>

                </td>

                <td className="p-3 flex gap-2">

                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-red-600 text-white px-3 py-1 rounded">
                    Delete
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