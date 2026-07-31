import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaUsers,
  FaUserCheck,
  FaCalendarAlt,
  FaComments,
  FaBuilding,
  FaEnvelope,
  FaUserTie,
  FaDatabase,
  FaSearch,
  FaPalette,
  FaCrown
} from "react-icons/fa";

export default function EmployerSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/employer/dashboard",
      icon: <FaHome />
    },
    {
      name: "Company Profile",
      path: "/employer/company-profile",
      icon: <FaBuilding />
    },
    {
      name: "Post Job",
      path: "/employer/post-job",
      icon: <FaBriefcase />
    },
    {
      name: "Manage Jobs",
      path: "/employer/manage-jobs",
      icon: <FaBuilding />
    },
    {
      name: "Applicants",
      path: "/employer/applicants",
      icon: <FaUsers />
    },
    {
      name: "Shortlisted",
      path: "/employer/shortlisted",
      icon: <FaUserCheck />
    },
    {
      name: "ATS Pipeline",
      path: "/employer/ats-pipeline",
      icon: <FaUserCheck />
    },
    {
      name: "Interviews",
      path: "/employer/interviews",
      icon: <FaCalendarAlt />
    },
    {
      name: "Resume Database",
      path: "/employer/resume-database",
      icon: <FaDatabase />
    },
    {
      name: "Candidate Search",
      path: "/employer/candidate-search",
      icon: <FaSearch />
    },
    {
      name: "Bulk Email",
      path: "/employer/bulk-email",
      icon: <FaEnvelope />
    },
    {
      name: "Company Branding",
      path: "/employer/company-branding",
      icon: <FaPalette />
    },
    {
      name: "Subscription Plan",
      path: "/employer/subscription-plan",
      icon: <FaCrown />
    },
    {
      name: "Messages",
      path: "/employer/chat",
      icon: <FaComments />
    }
  ];

  return (
    <aside className="fixed left-0 top-0 w-[280px] h-screen bg-slate-900 text-white shadow-2xl flex flex-col overflow-hidden">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700 flex-shrink-0">

        <h1 className="text-2xl font-bold">
          QMAX Jobs
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Employer Portal
        </p>

      </div>

      {/* Company Card */}
      <div className="p-4 border-b border-slate-700 flex-shrink-0">

        <div className="bg-slate-800 rounded-xl p-4">

          <h3 className="font-semibold text-white">
            Tech Company Pvt Ltd
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            12 Active Jobs
          </p>

          <div className="flex gap-2 mt-3">

            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
              Active
            </span>

            <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
              Premium
            </span>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-hidden">

        <nav className="h-full overflow-y-auto px-3 py-3 employer-scrollbar">

          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
            >
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}

        </nav>

      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700 flex-shrink-0">

        <div className="bg-slate-800 rounded-xl p-3 flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

            <FaUserTie />

          </div>

          <div>

            <h4 className="text-sm font-semibold">
              HR Manager
            </h4>

            <p className="text-xs text-slate-400">
              hr@company.com
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}