import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import remoteJobsData from "../../data/remoteJobsData";

export default function RemoteJobs() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Remote Jobs
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {remoteJobsData.map((job) => (

          <div
            key={job.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold text-lg">
              {job.title}
            </h3>

            <p>{job.company}</p>

            <p className="text-blue-600">
              {job.location}
            </p>

            <p className="font-semibold">
              {job.salary}
            </p>

            <button
              className="
              mt-4
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-lg
              "
            >
              Apply Now
            </button>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}