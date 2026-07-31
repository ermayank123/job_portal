import EmployerLayout from "../../components/layout/employer/EmployerLayout";
import {
  FaBriefcase,
  FaUsers,
  FaCalendarAlt,
  FaUserCheck
} from "react-icons/fa";

export default function EmployerDashboard() {
  return (
    <EmployerLayout>

      {/* Company Header */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Tech Company Pvt Ltd
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back! Manage jobs, applicants and interviews.
        </p>

      </div>

      {/* Stats Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        {/* Active Jobs */}

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Active Jobs
              </p>

              <h2 className="text-3xl font-bold mt-2">
                12
              </h2>
            </div>

            <FaBriefcase size={32} />

          </div>

        </div>

        {/* Applicants */}

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Applicants
              </p>

              <h2 className="text-3xl font-bold mt-2">
                245
              </h2>
            </div>

            <FaUsers size={32} />

          </div>

        </div>

        {/* Interviews */}

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Interviews
              </p>

              <h2 className="text-3xl font-bold mt-2">
                18
              </h2>
            </div>

            <FaCalendarAlt size={32} />

          </div>

        </div>

        {/* Shortlisted */}

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Shortlisted
              </p>

              <h2 className="text-3xl font-bold mt-2">
                42
              </h2>
            </div>

            <FaUserCheck size={32} />

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Recent Applicants
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-2">
              <span>Rahul Sharma</span>
              <span className="text-blue-600">
                Laravel Developer
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Priya Verma</span>
              <span className="text-blue-600">
                React Developer
              </span>
            </div>

            <div className="flex justify-between">
              <span>Amit Singh</span>
              <span className="text-blue-600">
                MERN Stack
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Upcoming Interviews
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between border-b pb-2">
              <span>Rahul Sharma</span>
              <span className="text-orange-500">
                Tomorrow
              </span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span>Priya Verma</span>
              <span className="text-orange-500">
                12 Jun
              </span>
            </div>

            <div className="flex justify-between">
              <span>Amit Singh</span>
              <span className="text-orange-500">
                15 Jun
              </span>
            </div>

          </div>

        </div>

      </div>

    </EmployerLayout>
  );
}