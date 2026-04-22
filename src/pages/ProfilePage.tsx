import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"

const ProfilePage = () => {
  const { logout, user } = useAuth();

    const handleLogout = () => {
    logout();
  };

  return (
    <div className="contenu">
      <div className="flex items-center justify-between mt-2">
        <h2 className="text-xl uppercase max-sm:text-lg">Mon Profil</h2>
        <Button
          className="max-sm:text-xs"
          variant={"destructive"}
          onClick={handleLogout}
        >
          Se déconnecter
        </Button>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <p>{user?.email}</p>
           <ModeToggle />
      </div>
   
    </div>
  )
}

export default ProfilePage
