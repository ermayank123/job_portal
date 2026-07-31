import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import appliedJobs from "../../data/appliedJobsData";

export default function ApplicationTracking() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Application Tracking
      </h1>

      <div className="space-y-4">

        {appliedJobs.map((job) => (

          <div
            key={job.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold">
              {job.position}
            </h3>

            <p>
              Company : {job.company}
            </p>

            <p>
              Status : {job.status}
            </p>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}