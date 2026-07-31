import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-xl">

        <h2 className="text-3xl font-bold mb-5">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4"
        />

        <button className="btn-primary w-full">
          Send Reset Link
        </button>

        <Link
          to="/login"
          className="block text-center mt-5"
        >
          Back To Login
        </Link>

      </div>

    </AuthLayout>
  );
}