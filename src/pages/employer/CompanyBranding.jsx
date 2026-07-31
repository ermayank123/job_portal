import { useState } from "react";
import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function CompanyBranding() {
  const [logo, setLogo] = useState(null);

  return (
    <EmployerLayout>
      <div className="space-y-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold">
            Company Branding
          </h1>

          <p className="text-gray-500 mt-2">
            Manage company branding and public profile.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block font-medium mb-2">
                Company Logo
              </label>

              <input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Cover Banner
              </label>

              <input
                type="file"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium mb-2">
                About Company
              </label>

              <textarea
                rows="5"
                className="w-full border rounded-lg p-3"
                placeholder="Write company description..."
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Theme Color
              </label>

              <input
                type="color"
                defaultValue="#2563eb"
                className="w-20 h-12"
              />
            </div>

          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save Branding
          </button>

        </div>

      </div>
    </EmployerLayout>
  );
}