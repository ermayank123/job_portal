import AuthLayout from "../../components/auth/AuthLayout";

export default function EmployerRegister() {
  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-lg shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Employer Register
        </h2>

        <input
          type="text"
          placeholder="Company Name"
          className="input-field mb-4"
        />

        <input
          type="email"
          placeholder="Company Email"
          className="input-field mb-4"
        />

        <input
          type="text"
          placeholder="HR Name"
          className="input-field mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-4"
        />

        <button className="btn-primary w-full">
          Register
        </button>

      </div>

    </AuthLayout>
  );
}