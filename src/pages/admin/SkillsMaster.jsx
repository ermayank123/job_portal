import AdminLayout from "../../components/layout/admin/AdminLayout";
import skillsData from "../../data/skillsData";

export default function SkillsMaster() {
  return (
    <AdminLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Skills Master
        </h1>

        {skillsData.map((item) => (
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