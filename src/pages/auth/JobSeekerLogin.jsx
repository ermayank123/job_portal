import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function JobSeekerLogin() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Job Seeker Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-4"
        />

        <button
          onClick={handleLogin}
          className="btn-primary w-full"
        >
          Login
        </button>

        <div className="mt-5 flex justify-between">

          <Link to="/forgot-password">
            Forgot Password
          </Link>

          <Link to="/jobseeker/register">
            Register
          </Link>

        </div>

      </div>

    </AuthLayout>
  );
}