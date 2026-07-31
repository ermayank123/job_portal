import { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";
import moderationJobsData from "../../data/moderationJobsData";

export default function JobModeration() {

  const [search, setSearch] = useState("");

  const filteredJobs = moderationJobsData.filter((job) =>
    job.position.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between items-center mb-5">

          <h1 className="text-3xl font-bold">
            Job Moderation
          </h1>

          <input
            type="text"
            placeholder="Search Job..."
            className="border px-4 py-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Company</th>
              <th>Position</th>
              <th>Location</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredJobs.map((job) => (

              <tr key={job.id} className="border-b">

                <td>{job.id}</td>
                <td>{job.company}</td>
                <td>{job.position}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>{job.status}</td>

                <td>

                  <div className="flex gap-2">

                    <button className="bg-green-600 text-white px-3 py-1 rounded">
                      Approve
                    </button>

                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Reject
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}