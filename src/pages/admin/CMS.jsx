import AdminLayout from "../../components/layout/admin/AdminLayout";
import cmsPagesData from "../../data/cmsPagesData";

export default function CMS() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-bold">
              CMS Management
            </h1>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Create Page
            </button>

          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <table className="w-full">

            <thead>
              <tr className="border-b">
                <th>ID</th>
                <th>Page Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {cmsPagesData.map((page) => (

                <tr key={page.id} className="border-b">

                  <td>{page.id}</td>
                  <td>{page.page}</td>
                  <td>{page.status}</td>

                  <td>

                    <div className="flex gap-2">

                      <button className="bg-blue-600 text-white px-3 py-1 rounded">
                        Edit
                      </button>

                      <button className="bg-red-600 text-white px-3 py-1 rounded">
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}