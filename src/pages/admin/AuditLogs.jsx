import AdminLayout from "../../components/layout/admin/AdminLayout";
import auditLogsData from "../../data/auditLogsData";

export default function AuditLogs() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Audit Logs
        </h1>

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-50">
              <th className="p-3 text-left">Admin</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Date</th>
            </tr>

          </thead>

          <tbody>

            {auditLogsData.map((log) => (

              <tr key={log.id} className="border-b">

                <td className="p-3">{log.admin}</td>
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