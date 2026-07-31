import AdminLayout from "../../components/layout/admin/AdminLayout";
import categoriesData from "../../data/categoriesData";

export default function Categories() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Categories
        </h1>

        {categoriesData.map((item) => (
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