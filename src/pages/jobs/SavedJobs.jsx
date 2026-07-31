import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import jobsData from "../../data/jobsData";

export default function SavedJobs() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Saved Jobs
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {jobsData.map((job) => (

          <div
            key={job.id}
            className="bg-white rounded-2xl shadow p-5"
          >
            <h3 className="font-bold">
              {job.position}
            </h3>

            <p>{job.company}</p>

            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Apply
            </button>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}