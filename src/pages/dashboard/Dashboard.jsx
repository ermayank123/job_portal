import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";
import {
  FaBriefcase,
  FaBookmark,
  FaCalendarAlt,
  FaUserCheck
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <JobSeekerLayout>

      {/* Welcome Card */}

      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <h1 className="text-3xl font-bold text-slate-800">
          Welcome Back, Mayank 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Track your applications, interviews and profile progress.
        </p>

      </div>

      {/* Stats Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Applied Jobs
              </p>

              <h2 className="text-3xl font-bold mt-2">
                24
              </h2>
            </div>

            <FaBriefcase size={32} />

          </div>

        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Saved Jobs
              </p>

              <h2 className="text-3xl font-bold mt-2">
                12
              </h2>
            </div>

            <FaBookmark size={32} />

          </div>

        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Interviews
              </p>

              <h2 className="text-3xl font-bold mt-2">
                3
              </h2>
            </div>

            <FaCalendarAlt size={32} />

          </div>

        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-sm opacity-80">
                Profile Score
              </p>

              <h2 className="text-3xl font-bold mt-2">
                85%
              </h2>
            </div>

            <FaUserCheck size={32} />

          </div>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-6">

        {/* Recent Applications */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Recent Applications
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>Laravel Developer</span>
              <span className="text-blue-600">
                Applied
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>React Developer</span>
              <span className="text-green-600">
                Shortlisted
              </span>
            </div>

            <div className="flex justify-between">
              <span>Frontend Developer</span>
              <span className="text-red-500">
                Rejected
              </span>
            </div>

          </div>

        </div>

        {/* Upcoming Interviews */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Upcoming Interviews
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>TCS - Laravel Developer</span>
              <span className="text-orange-500">
                Tomorrow
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Infosys - React Developer</span>
              <span className="text-orange-500">
                12 June
              </span>
            </div>

            <div className="flex justify-between">
              <span>Wipro - Frontend Developer</span>
              <span className="text-orange-500">
                15 June
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Profile Completion */}

      <div className="bg-white rounded-2xl shadow p-6 mt-6">

        <div className="flex justify-between mb-3">

          <h2 className="text-xl font-semibold">
            Profile Completion
          </h2>

          <span className="font-bold text-purple-600">
            85%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-purple-600 h-3 rounded-full"
            style={{ width: "85%" }}
          ></div>

        </div>

        <p className="text-gray-500 text-sm mt-3">
          Add skills, projects and certifications to reach 100%.
        </p>

      </div>

    </JobSeekerLayout>
  );
}