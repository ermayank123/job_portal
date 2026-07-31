import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function AdminManagement() {
  const admins = [
    {
      id: 1,
      name: "Super Admin",
      email: "admin@qmax.com",
      role: "Super Admin"
    },
    {
      id: 2,
      name: "Manager",
      email: "manager@qmax.com",
      role: "Admin"
    }
  ];

  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between mb-5">

          <h1 className="text-3xl font-bold">
            Admin Management
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Admin
          </button>

        </div>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>

            {admins.map((admin) => (
              <tr
                key={admin.id}
                className="border-b"
              >
                <td>{admin.id}</td>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.role}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}