import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaBriefcase,
  FaCheckCircle,
  FaFileAlt,
  FaChartBar,
  FaMoneyBillWave,
  FaCrown,
  FaSearch,
  FaCog,
  FaBell,
  FaHistory,
  FaClipboardList,
  FaEnvelope,
  FaQuestionCircle,
  FaTags,
  FaDatabase,
  FaGlobe,
  FaShieldAlt,
  FaUserShield
} from "react-icons/fa";

export default function AdminSidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Employers", path: "/admin/employers", icon: <FaUserTie /> },
    { name: "Jobs", path: "/admin/jobs", icon: <FaBriefcase /> },
    { name: "Job Moderation", path: "/admin/job-moderation", icon: <FaCheckCircle /> },

    { name: "CMS", path: "/admin/cms", icon: <FaFileAlt /> },
    { name: "Pages", path: "/admin/pages", icon: <FaFileAlt /> },
    { name: "Blog", path: "/admin/blog", icon: <FaFileAlt /> },
    { name: "FAQ", path: "/admin/faq", icon: <FaQuestionCircle /> },

    { name: "Reports", path: "/admin/reports", icon: <FaChartBar /> },
    { name: "Analytics", path: "/admin/analytics", icon: <FaChartBar /> },

    { name: "Payments", path: "/admin/payments", icon: <FaMoneyBillWave /> },
    { name: "Plans", path: "/admin/plans", icon: <FaCrown /> },
    { name: "Coupons", path: "/admin/coupons", icon: <FaTags /> },

    { name: "Notifications", path: "/admin/notifications", icon: <FaBell /> },
    { name: "Contact Messages", path: "/admin/contact-messages", icon: <FaEnvelope /> },
    { name: "Support Tickets", path: "/admin/support-tickets", icon: <FaQuestionCircle /> },
    { name: "Newsletter", path: "/admin/newsletter", icon: <FaEnvelope /> },

    { name: "Roles & Permissions", path: "/admin/roles", icon: <FaShieldAlt /> },
    { name: "Admin Management", path: "/admin/admin-management", icon: <FaUserShield /> },
    { name: "Email Templates", path: "/admin/email-templates", icon: <FaEnvelope /> },

    { name: "Categories", path: "/admin/categories", icon: <FaTags /> },
    { name: "Skills Master", path: "/admin/skills", icon: <FaDatabase /> },
    { name: "Countries", path: "/admin/countries", icon: <FaGlobe /> },

    { name: "Global Search", path: "/admin/search", icon: <FaSearch /> },
    { name: "Activity Logs", path: "/admin/activity-logs", icon: <FaHistory /> },
    { name: "Audit Logs", path: "/admin/audit-logs", icon: <FaClipboardList /> },

    { name: "Database Backup", path: "/admin/database-backup", icon: <FaDatabase /> },
    { name: "System Backup", path: "/admin/system-backup", icon: <FaDatabase /> },
    { name: "Security Settings", path: "/admin/security", icon: <FaShieldAlt /> },
    { name: "SEO Settings", path: "/admin/seo-settings", icon: <FaGlobe /> },
    { name: "Site Settings", path: "/admin/site-settings", icon: <FaCog /> }
  ];

  return (
    <aside className="fixed left-0 top-0 w-72 h-screen bg-slate-900 text-white shadow-2xl flex flex-col overflow-hidden">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700 flex-shrink-0">
        <h1 className="text-2xl font-bold text-blue-400">
          QMAX Admin
        </h1>

        <p className="text-xs text-gray-400 mt-1">
          Job Portal Control Center
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-hidden">

        <nav className="h-full overflow-y-auto p-3 admin-scrollbar">

          {menu.map((item) => (
            <Link key={item.path} to={item.path}>

              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
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

        <div className="bg-slate-800 rounded-xl p-3">

          <h4 className="font-semibold">
            Super Admin
          </h4>

          <p className="text-xs text-gray-400">
            admin@qmaxjobs.com
          </p>

        </div>

      </div>

    </aside>
  );
}