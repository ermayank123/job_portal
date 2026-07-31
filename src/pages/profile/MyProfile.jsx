import { useState } from "react";
import JobSeekerLayout from "../../components/layout/jobseeker/JobSeekerLayout";

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <JobSeekerLayout>

      <div className="space-y-6">

        {/* Header */}

        <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">
              My Profile
            </h1>

            <p className="text-gray-500 mt-1">
              Complete your profile to increase job opportunities
            </p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Edit Profile
          </button>

        </div>

        {/* Personal Information */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <p className="text-gray-500">Full Name</p>
              <h4 className="font-semibold">Mayank Katare</h4>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <h4 className="font-semibold">mayank@gmail.com</h4>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <h4 className="font-semibold">9876543210</h4>
            </div>

            <div>
              <p className="text-gray-500">Location</p>
              <h4 className="font-semibold">Sagar, MP</h4>
            </div>

          </div>

        </div>

        {/* Skills */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Laravel
            </span>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              PHP
            </span>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              React
            </span>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              MySQL
            </span>

          </div>

        </div>

        {/* Experience */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Experience
          </h2>

          <div className="border rounded-lg p-4">

            <h4 className="font-semibold">
              Laravel Developer
            </h4>

            <p className="text-gray-500">
              ABC Technologies
            </p>

            <p className="text-sm text-gray-400">
              Jan 2024 - Present
            </p>

          </div>

        </div>

        {/* Projects */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Projects
          </h2>

          <div className="border rounded-lg p-4">

            <h4 className="font-semibold">
              School Management System
            </h4>

            <p className="text-gray-500 mt-2">
              Laravel + React Project
            </p>

            <div className="flex gap-4 mt-3">

              <a
                href="#"
                className="text-blue-600 font-medium"
              >
                GitHub Link
              </a>

              <a
                href="#"
                className="text-green-600 font-medium"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

        {/* Resume */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Resume
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Upload Resume
          </button>

        </div>

        {/* Social Links */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-3">
              LinkedIn
            </h2>

            <p className="text-blue-600">
              linkedin.com/in/mayank
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-3">
              GitHub
            </h2>

            <p className="text-blue-600">
              github.com/mayank
            </p>

          </div>

        </div>

      </div>

      {/* Edit Modal */}

      {isEditing && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl p-6 w-full max-w-3xl">

            <h2 className="text-2xl font-bold mb-5">
              Edit Profile
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Phone"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Location"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Skills"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Company"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="GitHub URL"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="LinkedIn URL"
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Project GitHub Link"
                className="border p-3 rounded-lg col-span-2"
              />

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setIsEditing(false)}
                className="border px-5 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </JobSeekerLayout>
  );
}