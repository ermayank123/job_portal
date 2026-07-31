import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";

export default function ResumeUpload() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Resume Upload
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow">

        <input
          type="file"
          className="border p-3 rounded-xl w-full"
        />

        <button
          className="
          mt-4
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          "
        >
          Upload Resume
        </button>

      </div>

    </JobSeekerLayout>
  );
}