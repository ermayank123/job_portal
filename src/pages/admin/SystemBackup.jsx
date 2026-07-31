import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function SystemBackup() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* Header */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h1 className="text-3xl font-bold">
            System Backup
          </h1>

          <p className="text-gray-500 mt-2">
            Manage full system backups and restore points.
          </p>

        </div>

        {/* Backup Stats */}

        <div className="grid md:grid-cols-4 gap-4">

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="text-gray-500">Total Backups</h4>
            <h2 className="text-3xl font-bold mt-2">24</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="text-gray-500">Database Backups</h4>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">
              14
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="text-gray-500">File Backups</h4>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              10
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="text-gray-500">Last Backup</h4>
            <h2 className="text-lg font-bold mt-2">
              Today
            </h2>
          </div>

        </div>

        {/* Actions */}

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-5">
            Backup Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-600 text-white px-5 py-3 rounded-lg">
              Create Full Backup
            </button>

            <button className="bg-green-600 text-white px-5 py-3 rounded-lg">
              Backup Database
            </button>

            <button className="bg-purple-600 text-white px-5 py-3 rounded-lg">
              Backup Files
            </button>

          </div>

        </div>

        {/* Backup History */}

        <div className="bg-white rounded-xl shadow overflow-hidden">

          <div className="p-5 border-b">
            <h2 className="text-xl font-semibold">
              Backup History
            </h2>
          </div>

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left p-4">
                  Backup Name
                </th>

                <th className="text-left p-4">
                  Type
                </th>

                <th className="text-left p-4">
                  Date
                </th>

                <th className="text-left p-4">
                  Size
                </th>

                <th className="text-left p-4">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t">

                <td className="p-4">
                  backup_01.zip
                </td>

                <td className="p-4">
                  Full Backup
                </td>

                <td className="p-4">
                  08 Jun 2026
                </td>

                <td className="p-4">
                  450 MB
                </td>

                <td className="p-4">

                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Download
                  </button>

                </td>

              </tr>

              <tr className="border-t">

                <td className="p-4">
                  db_backup.sql
                </td>

                <td className="p-4">
                  Database
                </td>

                <td className="p-4">
                  07 Jun 2026
                </td>

                <td className="p-4">
                  120 MB
                </td>

                <td className="p-4">

                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Download
                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}