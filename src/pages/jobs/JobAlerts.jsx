import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import jobAlertsData from "../../data/jobAlertsData";

export default function JobAlerts() {
  return (
    <JobSeekerLayout>

      <h1 className="text-3xl font-bold mb-6">
        Job Alerts
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {jobAlertsData.map((alert) => (

          <div
            key={alert.id}
            className="bg-white p-5 rounded-2xl shadow"
          >
            <h3 className="font-bold">
              {alert.title}
            </h3>

            <p>
              Frequency : {alert.frequency}
            </p>

          </div>

        ))}

      </div>

    </JobSeekerLayout>
  );
}