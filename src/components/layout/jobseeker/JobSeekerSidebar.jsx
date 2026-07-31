import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBookmark,
  FaFileAlt,
  FaBell,
  FaUser
} from "react-icons/fa";

export default function JobSeekerSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Search Jobs", path: "/jobs", icon: <FaSearch /> },
    { name: "Saved Jobs", path: "/saved-jobs", icon: <FaBookmark /> },
    { name: "Resume Builder", path: "/resume-builder", icon: <FaFileAlt /> },
    { name: "Job Alerts", path: "/job-alerts", icon: <FaBell /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> }
  ];

  return (
    <aside className="w-64 h-screen fixed bg-white border-r border-gray-200 flex flex-col shadow-sm">

      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-xl font-bold text-gray-800">
          IT Jobs
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Job Seeker Portal
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">

        {menu.map((item) => (
          <Link key={item.path} to={item.path}>
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                location.pathname === item.path
                  ? "bg-indigo-50 text-indigo-600 font-semibold border-l-4 border-indigo-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          </Link>
        ))}

      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 text-xs text-gray-500">
        © 2026 IT Jobs Portal
      </div>

    </aside>
  );
}