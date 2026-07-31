import AdminLayout from "../../components/layout/admin/AdminLayout";
import countriesData from "../../data/countriesData";

export default function Countries() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Countries
        </h1>

        {countriesData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-3 mb-3"
          >
            {item.name}
          </div>
        ))}

      </div>

    </AdminLayout>
  );
}