import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function ManageJobs() {
  return (
    <EmployerLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-5">
          Manage Jobs
        </h1>

        <table className="w-full">

          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Laravel Developer</td>
              <td>Active</td>
            </tr>
          </tbody>

        </table>

      </div>

    </EmployerLayout>
  );
}