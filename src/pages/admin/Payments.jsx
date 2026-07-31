import AdminLayout from "../../components/layout/admin/AdminLayout";
import paymentsData from "../../data/paymentsData";

export default function Payments() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Total Revenue</h3>
            <h2 className="text-3xl font-bold text-green-600">
              ₹4,50,000
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Paid</h3>
            <h2 className="text-3xl font-bold">
              142
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Pending</h3>
            <h2 className="text-3xl font-bold">
              11
            </h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="text-gray-500">Plans Sold</h3>
            <h2 className="text-3xl font-bold">
              320
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <h1 className="text-2xl font-bold mb-5">
            Payment Transactions
          </h1>

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {paymentsData.map((payment) => (

                <tr key={payment.id} className="border-b">

                  <td className="p-3">{payment.company}</td>
                  <td className="p-3">{payment.plan}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className="p-3">{payment.paymentDate}</td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-xs
                      ${
                        payment.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
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