import Header from "@/components/layout/Header"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useEnjury } from "@/hooks/useEnjury"
import { useShoe } from "@/hooks/useShoe"
import { SportShoe } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const { logout, user } = useAuth()
  const { shoes } = useShoe()
   const { enjuryNumber } = useEnjury()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="contenu">
      <Header title="mon profil">
        <Button
          className="max-sm:text-xs"
          variant={"destructive"}
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </Header>

      <div className="mt-2 flex items-center gap-2">
        <p>{user?.email}</p>
        <ModeToggle />
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="flex items-center">
          Mes chaussures ({shoes.length} <SportShoe className="h-4 w-4" />)
        </p>
        <Button
          className="max-sm:text-xs"
          variant={"secondary"}
          onClick={() => navigate("/shoes")}
        >
          Voir mes chaussures
        </Button>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <p>Vous avez eu {enjuryNumber} blessure{enjuryNumber > 1 && "s"}</p>
        <Button variant={"secondary"} onClick={() => navigate("/enjury")}>Voir mes blessures</Button>
      </div>
    </div>
  )
}

export default ProfilePage
