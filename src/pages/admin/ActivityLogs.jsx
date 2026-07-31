import AdminLayout from "../../components/layout/admin/AdminLayout";
import activityLogsData from "../../data/activityLogsData";

export default function ActivityLogs() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Activity Logs
        </h1>

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-50">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Date</th>
            </tr>

          </thead>

          <tbody>

            {activityLogsData.map((log) => (

              <tr key={log.id} className="border-b">

                <td className="p-3">{log.user}</td>
                <td className="p-3">{log.action}</td>
                <td className="p-3">{log.date}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}