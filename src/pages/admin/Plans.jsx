import AdminLayout from "../../components/layout/admin/AdminLayout";
import plansData from "../../data/adminplansData";

export default function Plans() {
  return (
    <AdminLayout>

      <div>

        <h1 className="text-3xl font-bold mb-6">
          Subscription Plans
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {plansData.map((plan) => (

            <div
              key={plan.id}
              className="bg-white rounded-xl shadow p-6"
            >

              <h2 className="text-2xl font-bold">
                {plan.name}
              </h2>

              <h3 className="text-4xl font-bold text-blue-600 my-4">
                {plan.price}
              </h3>

              <ul className="space-y-2 text-gray-600">

                <li>
                  Jobs: {plan.jobs}
                </li>

                <li>
                  Resume Access:
                  {" "}
                  {plan.resumeAccess ? "Yes" : "No"}
                </li>

              </ul>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">
                Edit Plan
              </button>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>
  );
}