import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function SecuritySettings() {
  return (
    <AdminLayout>
      <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Security Settings</h1>

        <form className="space-y-4">

          <div>
            <label className="block mb-1">Old Password</label>
            <input type="password" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block mb-1">New Password</label>
            <input type="password" className="w-full border p-2 rounded" />
          </div>

          <div>
            <label className="block mb-1">Confirm Password</label>
            <input type="password" className="w-full border p-2 rounded" />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Update Password
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}