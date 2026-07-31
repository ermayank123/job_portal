import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function Coupons() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between mb-6">

          <h1 className="text-3xl font-bold">
            Coupons
          </h1>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Create Coupon
          </button>

        </div>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>Code</th>
              <th>Discount</th>
              <th>Expiry</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td>WELCOME50</td>
              <td>50%</td>
              <td>31 Dec 2026</td>
            </tr>

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}