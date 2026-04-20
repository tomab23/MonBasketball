import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <div className="contenu">
      <div className="flex items-center justify-between mt-2">
        <h2 className="text-xl uppercase max-sm:text-lg">Mon Profil</h2>
        <Button
          className="max-sm:text-xs"
          variant={"destructive"}
          onClick={() => navigate("/")}
        >
          Se déconnecter
        </Button>
      </div>

      <br />
      -adress mail / Toggle dark mode
    </div>
  )
}

export default ProfilePage
