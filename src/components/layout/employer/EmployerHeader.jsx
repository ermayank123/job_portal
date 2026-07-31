import {
  FaBell,
  FaComments,
  FaSearch,
  FaPlus,
  FaSignOutAlt,
  FaUserCircle
} from "react-icons/fa";

export default function EmployerHeader() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">

      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-slate-800">
          Employer Dashboard
        </h2>
        <p className="text-xs text-slate-500">
          Manage Jobs & Applicants
        </p>
      </div>

      {/* Search */}
      <div className="relative w-80">
        <FaSearch className="absolute left-4 top-4 text-slate-400" />

        <input
          type="text"
          placeholder="Search candidates..."
          className="w-full pl-10 py-2.5 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-4">

        {/* Post Job */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium">
          <FaPlus />
          Post Job
        </button>

        {/* Messages */}
        <button className="relative p-2 rounded-xl hover:bg-slate-100">
          <FaComments size={20} className="text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            4
          </span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-slate-100">
          <FaBell size={20} className="text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            7
          </span>
        </button>

        {/* Profile + Logout dropdown */}
        <div className="relative group">

          <div className="flex items-center gap-2 cursor-pointer p-1 rounded-xl hover:bg-slate-100">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-10 h-10 rounded-full border border-slate-200"
            />
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">

            <div className="p-3 border-b">
              <p className="text-sm font-semibold">HR Manager</p>
              <p className="text-xs text-slate-500">hr@company.com</p>
            </div>

            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-slate-100">
              <FaUserCircle />
              Profile
            </button>

            <button className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50">
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}