import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function DatabaseManager() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-5">
          Database Manager
        </h1>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="border p-5 rounded-lg">
            Users Table
          </div>

          <div className="border p-5 rounded-lg">
            Jobs Table
          </div>

          <div className="border p-5 rounded-lg">
            Applications Table
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}