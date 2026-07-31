import AdminLayout from "../../components/layout/admin/AdminLayout";
import contactMessagesData from "../../data/contactMessagesData";

export default function ContactMessages() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Contact Messages
        </h1>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {contactMessagesData.map((item) => (
              <tr key={item.id} className="border-b">

                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.status}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}