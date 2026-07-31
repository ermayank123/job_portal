import AdminLayout from "../../components/layout/admin/AdminLayout";
import employersData from "../../data/employersData";

export default function Employers() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Employers
        </h1>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Company</th>
              <th>Email</th>
              <th>Jobs</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {employersData.map((company) => (

              <tr key={company.id} className="border-b">

                <td>{company.id}</td>
                <td>{company.company}</td>
                <td>{company.email}</td>
                <td>{company.jobs}</td>
                <td>{company.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}