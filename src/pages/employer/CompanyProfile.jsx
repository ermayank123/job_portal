import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function CompanyProfile() {
  return (
    <EmployerLayout>
      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-4">
          Company Profile
        </h1>

        <div className="space-y-3">

          <p><b>Company:</b> Tech Company Pvt Ltd</p>

          <p><b>Email:</b> hr@company.com</p>

          <p><b>Website:</b> www.company.com</p>

          <p><b>Location:</b> Indore</p>

        </div>

      </div>
    </EmployerLayout>
  );
}