import AdminLayout from "../../components/layout/admin/AdminLayout";
import supportTicketsData from "../../data/supportTicketsData";

export default function SupportTickets() {
  return (
    <AdminLayout>
      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Support Tickets
          </h1>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Ticket ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Issue</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>

              {supportTicketsData.map((ticket) => (

                <tr
                  key={ticket.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">
                    {ticket.ticket}
                  </td>

                  <td className="p-3">
                    {ticket.user}
                  </td>

                  <td className="p-3">
                    {ticket.issue}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        ticket.status === "Open"
                          ? "bg-red-100 text-red-600"
                          : ticket.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {ticket.status}
                    </span>
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