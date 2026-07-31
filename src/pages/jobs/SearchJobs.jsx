import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import jobsData from "../../data/jobsData";

export default function SearchJobs() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Search Jobs
      </h1>

      <div className="grid gap-4">

        {jobsData.map((job) => (

          <div
            key={job.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg">
              {job.position}
            </h2>

            <p>{job.company}</p>

            <p>{job.location}</p>

            <p>{job.salary}</p>
          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}