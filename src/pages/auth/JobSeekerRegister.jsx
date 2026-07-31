import { Link } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";

export default function JobSeekerRegister() {
  return (
    <AuthLayout>

      <div className="bg-white p-10 rounded-3xl w-full max-w-lg shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Job Seeker Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="input-field mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4"
        />

        <input
          type="text"
          placeholder="Skills"
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

        <Link
          to="/jobseeker/login"
          className="block mt-5 text-center"
        >
          Already Have Account?
        </Link>

      </div>

    </AuthLayout>
  );
}