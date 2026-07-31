import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import salaryInsightsData from "../../data/salaryInsightsData";

export default function SalaryInsights() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Salary Insights
      </h1>

      <div className="grid lg:grid-cols-4 gap-6">

        {salaryInsightsData.map((item, index) => (

          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold">
              {item.role}
            </h3>

            <p className="text-blue-600 mt-2">
              {item.averageSalary}
            </p>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}