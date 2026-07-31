import EmployerLayout from "../../components/layout/employer/EmployerLayout";
import applicantsData from "../../data/applicantsData";

export default function Applicants() {
  return (
    <EmployerLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-2xl font-bold mb-6">
          Applicants
        </h1>

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Position</th>
              <th className="text-left p-3">Experience</th>
              <th className="text-left p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {applicantsData.map((candidate) => (

              <tr key={candidate.id} className="border-b">

                <td className="p-3">
                  {candidate.name}
                </td>

                <td className="p-3">
                  {candidate.position}
                </td>

                <td className="p-3">
                  {candidate.experience}
                </td>

                <td className="p-3">

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Shortlist
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </EmployerLayout>
  );
}