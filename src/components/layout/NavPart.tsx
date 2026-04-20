import { NavLink } from "react-router-dom"
import { ChartPie, HomeIcon, NotebookText } from "lucide-react"

const NavPart = () => {
  return (
    <div>
      {/* Navigation Links */}
      <div className="flex items-center gap-3 max-sm:gap-1">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 font-semibold transition-colors max-sm:gap-1 ${
              isActive
                ? "bg-primary text-white hover:bg-primary/90"
                : "hover:bg-accent"
            }`
          }
        >
          <HomeIcon className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
          <p className="max-sm:hidden">Home</p>
        </NavLink>

        <NavLink
          to="/diary"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 font-semibold transition-colors max-sm:gap-1 ${
              isActive
                ? "bg-primary text-white hover:bg-primary/90"
                : "hover:bg-accent"
            }`
          }
        >
          <NotebookText className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
          <p className="max-sm:hidden">Diary</p>
        </NavLink>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 rounded-md px-3 py-2 font-semibold transition-colors max-sm:gap-1 ${
              isActive
                ? "bg-primary text-white hover:bg-primary/90"
                : "hover:bg-accent"
            }`
          }
        >
          <ChartPie className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
          <p className="max-sm:hidden">Stats</p>
        </NavLink>
      </div>
    </div>
  )
}

export default NavPart
