import AdminLayout from "../../components/layout/admin/AdminLayout";
import usersData from "../../data/usersData";

export default function Users() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Users Management
        </h1>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {usersData.map((user) => (

              <tr key={user.id} className="border-b">

                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}