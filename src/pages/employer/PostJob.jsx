import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function PostJob() {
  return (
    <EmployerLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Post New Job
        </h1>

        <form className="grid gap-4">

          <input
            type="text"
            placeholder="Job Title"
            className="border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Location"
            className="border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Salary"
            className="border p-3 rounded"
          />

          <textarea
            rows="5"
            placeholder="Job Description"
            className="border p-3 rounded"
          />

          <button className="bg-blue-600 text-white p-3 rounded">
            Publish Job
          </button>

        </form>

      </div>

    </EmployerLayout>
  );
}