import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { User2Icon } from "lucide-react"
import IconApp from "../IconApp"
import NavPart from "./NavPart"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-muted">
      <nav className="h-16 border-b bg-background">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-2 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-1 hover:cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <IconApp classname={"w-8 h-8 max-sm:w-6 max-sm:h-6"} />
            <p className="text-xl max-sm:text-sm font-bold">MonBasketball</p>
            {/* Desktop Menu */}
            {/* <NavMenu className="hidden md:block" /> */}
          </div>

          <NavPart />

          <div className="flex items-center gap-3">
            {/* <ModeToggle /> */}
            <Button
              size={"icon-lg"}
              role="button"
              variant={"secondary"}
              onClick={() => navigate("/profile")}
              
            >
              <User2Icon className="stroke-3" />
            </Button>
            {/* Mobile Menu */}
            {/* <div className="md:hidden"><NavigationSheet /></div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
