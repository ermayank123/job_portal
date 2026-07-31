import EmployerLayout from "../../components/layout/employer/EmployerLayout";
import shortlistedData from "../../data/shortlistedData";

export default function Shortlisted() {
  return (
    <EmployerLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-2xl font-bold mb-6">
          Shortlisted Candidates
        </h1>

        <div className="space-y-4">

          {shortlistedData.map((candidate) => (

            <div
              key={candidate.id}
              className="border rounded-xl p-4 flex justify-between items-center"
            >

              <div>

                <h3 className="font-semibold">
                  {candidate.name}
                </h3>

                <p className="text-gray-500">
                  {candidate.position}
                </p>

              </div>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Shortlisted
              </span>

            </div>

          ))}

        </div>

      </div>

    </EmployerLayout>
  );
}