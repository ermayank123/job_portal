import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function EmployerLogin() {

  const navigate = useNavigate();

  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Employer Login
        </h2>

        <input
          type="email"
          placeholder="Company Email"
          className="input-field mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-4"
        />

        <button
          onClick={() => navigate("/employer/dashboard")}
          className="btn-primary w-full"
        >
          Login
        </button>

        <div className="mt-5 flex justify-between">
          <Link to="/forgot-password">
            Forgot Password
          </Link>

          <Link to="/employer/register">
            Register
          </Link>
        </div>

      </div>

    </AuthLayout>
  );
}