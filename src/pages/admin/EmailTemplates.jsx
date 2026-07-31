import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function EmailTemplates() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-5">
          Email Templates
        </h1>

        <div className="space-y-4">

          <div className="border p-4 rounded-lg">
            Welcome Email Template
          </div>

          <div className="border p-4 rounded-lg">
            Job Application Template
          </div>

          <div className="border p-4 rounded-lg">
            Password Reset Template
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}