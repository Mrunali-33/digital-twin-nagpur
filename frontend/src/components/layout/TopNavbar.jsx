import { FaBell } from "react-icons/fa";

function TopNavbar() {
  return (

    <div className="h-[8vh] border-b border-cyan-500/20 flex items-center justify-between px-6">

      <div>

        <h1 className="text-2xl font-bold text-cyan-400">
          Environmental Digital Twin
        </h1>

        <p className="text-sm text-gray-400">
          NEERI + Rahate Colony Monitoring System
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2 text-green-400">

          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          LIVE

        </div>

        <FaBell className="text-cyan-400 text-xl" />

      </div>

    </div>
  );
}

export default TopNavbar;