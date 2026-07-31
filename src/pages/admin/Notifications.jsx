import AdminLayout from "../../components/layout/admin/AdminLayout";
import notificationsData from "../../data/notificationsData";

export default function Notifications() {
  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Notifications Center
        </h1>

        <div className="space-y-4">

          {notificationsData.map((item) => (

            <div
              key={item.id}
              className="border rounded-xl p-4 hover:bg-gray-50"
            >
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-1">
                {item.message}
              </p>

              <span className="text-xs text-gray-400">
                {item.time}
              </span>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>
  );
}