import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import icon from '/panier.png'

const AuthPage = () => {
    const navigate = useNavigate();

  return (
        <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">MonBasketball ! ⚠️ En développement ! ⚠️</h1>
          <img src={icon} alt="" />
          <Button className="mt-2" onClick={() => navigate("/home")}>GO HOME!</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

export default AuthPage