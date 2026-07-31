import AdminLayout from "../../components/layout/admin/AdminLayout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend
} from "recharts";

const stats = [
  {
    title: "Users",
    value: "2,540",
    color: "bg-blue-500"
  },
  {
    title: "Employers",
    value: "320",
    color: "bg-green-500"
  },
  {
    title: "Jobs",
    value: "1,250",
    color: "bg-orange-500"
  },
  {
    title: "Revenue",
    value: "₹2.5L",
    color: "bg-purple-500"
  }
];

const usersChart = [
  { name: "Users", value: 2540 },
  { name: "Employers", value: 320 },
  { name: "Jobs", value: 1250 }
];

const applicationsData = [
  { month: "Jan", applications: 120 },
  { month: "Feb", applications: 180 },
  { month: "Mar", applications: 240 },
  { month: "Apr", applications: 300 },
  { month: "May", applications: 280 },
  { month: "Jun", applications: 400 }
];

export default function AdminDashboard() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        {/* Heading */}

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            System overview & management
          </p>
        </div>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-5"
            >
              <div
                className={`w-12 h-12 rounded-lg ${item.color} mb-4`}
              />

              <h3 className="text-gray-500 text-sm">
                {item.title}
              </h3>

              <h2 className="text-3xl font-bold mt-1">
                {item.value}
              </h2>
            </div>
          ))}

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Bar Chart */}

          <div className="bg-white rounded-xl shadow-sm border p-5">

            <h2 className="font-semibold text-lg mb-5">
              Portal Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usersChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#2563eb"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Line Chart */}

          <div className="bg-white rounded-xl shadow-sm border p-5">

            <h2 className="font-semibold text-lg mb-5">
              Monthly Applications
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={applicationsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="#10b981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Recent Activities */}

        <div className="bg-white rounded-xl shadow-sm border p-5">

          <h2 className="font-semibold text-lg mb-5">
            Recent Activities
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span>New Employer Registered</span>
              <span className="text-gray-500">
                5 mins ago
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Laravel Developer Job Approved</span>
              <span className="text-gray-500">
                20 mins ago
              </span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span>Premium Plan Purchased</span>
              <span className="text-gray-500">
                1 hour ago
              </span>
            </div>

            <div className="flex justify-between">
              <span>New Resume Uploaded</span>
              <span className="text-gray-500">
                2 hours ago
              </span>
            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}