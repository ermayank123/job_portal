import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function Blogs() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Blog Management
          </h1>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Add Blog
          </button>

        </div>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="py-3 text-left">Title</th>
              <th className="text-left">Category</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-3">Top Laravel Interview Questions</td>
              <td>Laravel</td>
              <td>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  Published
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}