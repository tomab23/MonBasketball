import Header from "@/components/layout/Header";
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useShoes } from "@/hooks/useShoes";
import { SportShoe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { logout, user } = useAuth();
  const { shoes } = useShoes();
  const navigate = useNavigate();

    const handleLogout = () => {
    logout();
  };

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


      <div className="flex items-center gap-2 mt-2">
        <p>{user?.email}</p>
           <ModeToggle />
      </div>

      <div className="flex justify-between items-center mt-5" >
        <p className="flex items-center">Mes chaussures ({shoes.length} <SportShoe className="w-4 h-4" />)</p>
      <Button
          className="max-sm:text-xs"
          variant={"secondary"}
          onClick={() => navigate("/shoes")}
        >
          Voir mes chaussures
        </Button>
      </div>
   
    </div>
  )
}

export default ProfilePage
