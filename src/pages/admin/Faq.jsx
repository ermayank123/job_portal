import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function Faq() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between mb-6">

          <h1 className="text-3xl font-bold">
            FAQ Management
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add FAQ
          </button>

        </div>

        <div className="space-y-4">

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              How to apply for jobs?
            </h3>

            <p className="text-gray-500 mt-2">
              Login as Job Seeker and click Apply Now.
            </p>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}