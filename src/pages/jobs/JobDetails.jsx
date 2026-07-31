import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";

export default function JobDetails() {
  return (
    <JobSeekerLayout>

      <div className="bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold">
          Laravel Developer
        </h1>

        <p className="mt-2 text-gray-500">
          TCS • Indore • Full Time
        </p>

        <div className="mt-6">
          <h2 className="font-bold text-xl">
            Job Description
          </h2>

          <p className="mt-2">
            Looking for Laravel Developer with React knowledge.
          </p>
        </div>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Apply Now
        </button>

      </div>

    </JobSeekerLayout>
  );
}