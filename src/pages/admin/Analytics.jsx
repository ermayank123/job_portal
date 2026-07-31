import AdminLayout from "../../components/layout/admin/AdminLayout";
import analyticsData, {
monthlyStats
} from "../../data/analyticsData";

import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
Legend,
LineChart,
Line
} from "recharts";

export default function Analytics() {
return ( <AdminLayout>

```
  <div className="space-y-6">

    <h1 className="text-3xl font-bold">
      Analytics Dashboard
    </h1>

    {/* Stats Cards */}

    <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total Users</h3>
        <h2 className="text-3xl font-bold mt-2">
          {analyticsData.totalUsers}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Employers</h3>
        <h2 className="text-3xl font-bold mt-2">
          {analyticsData.totalEmployers}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Jobs</h3>
        <h2 className="text-3xl font-bold mt-2">
          {analyticsData.totalJobs}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Applications</h3>
        <h2 className="text-3xl font-bold mt-2">
          {analyticsData.applications}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Interviews</h3>
        <h2 className="text-3xl font-bold mt-2">
          {analyticsData.interviews}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Revenue</h3>
        <h2 className="text-3xl font-bold mt-2 text-green-600">
          {analyticsData.revenue}
        </h2>
      </div>

    </div>

    {/* Charts */}

    <div className="grid lg:grid-cols-2 gap-6">

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          Monthly Users & Jobs
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={monthlyStats}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="users"
              fill="#2563eb"
            />

            <Bar
              dataKey="jobs"
              fill="#10b981"
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-semibold mb-5">
          User Growth Trend
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={monthlyStats}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="users"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>

    {/* Recent Activity */}

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-3">
              Activity
            </th>
            <th className="text-left py-3">
              User
            </th>
            <th className="text-left py-3">
              Time
            </th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="py-3">
              New Job Posted
            </td>
            <td>
              TCS
            </td>
            <td>
              2 Hours Ago
            </td>
          </tr>

          <tr className="border-b">
            <td className="py-3">
              New Employer Registered
            </td>
            <td>
              Infosys
            </td>
            <td>
              5 Hours Ago
            </td>
          </tr>

          <tr>
            <td className="py-3">
              User Applied
            </td>
            <td>
              Mayank
            </td>
            <td>
              1 Day Ago
            </td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

</AdminLayout>

);
}
