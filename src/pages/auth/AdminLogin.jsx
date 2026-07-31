import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function AdminLogin() {

  const navigate = useNavigate();

  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          className="input-field mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-4"
        />

        <button
          onClick={() => navigate("/admin/dashboard")}
          className="btn-primary w-full"
        >
          Login
        </button>

      </div>

    </AuthLayout>
  );
}