import { useState } from "react";
import AdminLayout from "../../components/layout/admin/AdminLayout";

export default function GlobalSearch() {

  const [search, setSearch] = useState("");

  return (
    <AdminLayout>

      <div className="bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          Global Search
        </h1>

        <input
          type="text"
          placeholder="Search Users, Jobs, Employers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3"
        />

        <div className="mt-6 border rounded-xl p-8 text-center text-gray-500">
          Search Results Here
        </div>

      </div>

    </AdminLayout>
  );
}