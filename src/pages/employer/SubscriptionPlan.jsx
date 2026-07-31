import EmployerLayout from "../../components/layout/employer/EmployerLayout";

export default function SubscriptionPlan() {

  const plans = [
    {
      name: "Free",
      price: "₹0",
      features: ["5 Jobs", "20 Applicants"]
    },
    {
      name: "Basic",
      price: "₹999",
      features: ["20 Jobs", "Resume Access"]
    },
    {
      name: "Premium",
      price: "₹2999",
      features: [
        "Unlimited Jobs",
        "Resume Database",
        "Candidate Search"
      ]
    }
  ];

  return (
    <EmployerLayout>

      <div className="space-y-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold">
            Subscription Plans
          </h1>

          <p className="text-gray-500 mt-2">
            Upgrade your hiring capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 border"
            >

              <h2 className="text-2xl font-bold">
                {plan.name}
              </h2>

              <h3 className="text-4xl font-bold text-blue-600 mt-4">
                {plan.price}
              </h3>

              <ul className="mt-6 space-y-3">

                {plan.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg">
                Upgrade Plan
              </button>

            </div>

          ))}

        </div>

      </div>

    </EmployerLayout>
  );
}