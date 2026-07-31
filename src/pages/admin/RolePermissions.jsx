import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function RolePermissions() {
  const roles = [
    "Super Admin",
    "Admin",
    "Moderator",
    "Support Executive"
  ];

  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Role & Permissions
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          {roles.map((role, index) => (
            <div
              key={index}
              className="border rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg">
                {role}
              </h3>

              <p className="text-gray-500 mt-2">
                Manage permissions and access rights.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Manage
              </button>
            </div>
          ))}

        </div>

      </div>

    </AdminLayout>
  );
}