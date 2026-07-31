import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function Pages() {
  const pages = [
    "Home Page",
    "About Us",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions"
  ];

  return (
    <AdminLayout>
      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">
            CMS Pages
          </h1>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Add Page
          </button>
        </div>

        {pages.map((page, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg mb-3 flex justify-between"
          >
            <span>{page}</span>

            <button className="text-blue-600">
              Edit
            </button>
          </div>
        ))}

      </div>
    </AdminLayout>
  );
}
