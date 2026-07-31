import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function RoleSelection() {
  return (
    <AuthLayout>
      <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          IT Job Portal
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Select Your Role
        </p>

        <div className="space-y-4">

          <Link
            to="/jobseeker/login"
            className="block bg-indigo-600 text-white text-center py-4 rounded-xl"
          >
            Job Seeker
          </Link>

          <Link
            to="/employer/login"
            className="block bg-green-600 text-white text-center py-4 rounded-xl"
          >
            Employer
          </Link>

          <Link
            to="/admin/login"
            className="block bg-red-600 text-white text-center py-4 rounded-xl"
          >
            Admin
          </Link>

        </div>

      </div>
    </AuthLayout>
  );
}