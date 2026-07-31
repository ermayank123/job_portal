import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import appliedJobs from "../../data/appliedJobsData";

export default function AppliedJobs() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Applied Jobs
      </h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Applied Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>

          </thead>

          <tbody>

            {appliedJobs.map((job) => (

              <tr
                key={job.id}
                className="border-t"
              >
                <td className="p-4">
                  {job.company}
                </td>

                <td className="p-4">
                  {job.position}
                </td>

                <td className="p-4">
                  {job.appliedDate}
                </td>

                <td className="p-4">
                  {job.status}
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </JobSeekerLayout>
  );
}