import {
  FaBell,
  FaComments,
  FaSearch,
  FaChevronDown,
  FaSignOutAlt
} from "react-icons/fa";

export default function JobSeekerHeader() {
  return (
    <header className="bg-white border-b border-gray-200 h-20 px-6 flex items-center justify-between shadow-sm">

      {/* Left */}
      <div>
        <h2 className="text-xl font-bold text-gray-800">
          Dashboard
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Welcome back, Mayank 👋
        </p>
      </div>

      {/* Search */}
      <div className="relative w-[420px] hidden md:block">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

        <input
          type="text"
          placeholder="Search jobs, companies..."
          className="
            w-full
            pl-11
            pr-4
            py-2.5
            rounded-xl
            border border-gray-200
            bg-gray-50
            focus:bg-white
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-100
            outline-none
            transition
            text-sm
          "
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Chat */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <FaComments className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <FaBell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            5
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 px-2 py-1 rounded-xl hover:bg-gray-100 transition cursor-pointer">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-9 h-9 rounded-full border border-gray-200"
          />

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-gray-800">
              Mayank Katare
            </h4>
            <p className="text-xs text-gray-500">
              Job Seeker
            </p>
          </div>

          <FaChevronDown className="text-gray-400 text-xs" />

        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </header>
  );
}