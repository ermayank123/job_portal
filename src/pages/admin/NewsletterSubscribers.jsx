import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function NewsletterSubscribers() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-5">
          Newsletter Subscribers
        </h1>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>subscriber@gmail.com</td>
            </tr>

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}