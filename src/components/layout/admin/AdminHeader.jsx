import { FaSignOutAlt, FaBell } from "react-icons/fa";

export default function AdminHeader() {
  return (
    <header className="bg-white border border-slate-200 rounded-xl px-6 py-4 flex items-center justify-between shadow-sm">

      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          Admin Dashboard
        </h2>
        <p className="text-xs text-slate-500">
          System overview & management
        </p>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 transition">
          <FaBell className="text-slate-600" size={18} />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Logout */}
        <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
}