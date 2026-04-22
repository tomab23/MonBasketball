import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import icon from "/panier.png"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { BasketballIcon } from "@/assets/BasketballIcon"

// type Props = {
//   register: boolean
// }

const AuthPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // console.log({ email, password })
    setTimeout(() => {
      setLoading(false)
      navigate("/home")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-background via-background to-primary/40">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.15),transparent_70%)]" />

      <Card className="relative w-100 border-orange-500/20 shadow-2xl backdrop-blur-xl max-sm:w-88 dark:bg-zinc-900/80">
        <CardHeader className="space-y-2 text-center">
          ⚠️ En développement ! ⚠️
          <div className="flex justify-center">
            <img src={icon} alt="" className="h-20 w-20" />
          </div>

          <CardTitle className="font-boldd text-2xl">MonBasketball</CardTitle>

          <CardDescription>
            <p>Connecte-toi pour entrer sur le terrain 🏀</p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="player@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-zinc-700 focus:border-orange-500"
              />
            </div>

            <div className="space-y-2">
              <Label>Mot de passe</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-zinc-700 focus:border-orange-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary font-semibold text-white hover:bg-primary/90"
            >
              {loading ? (
                <>
                  <BasketballIcon className="h-5 w-5 animate-spin" />
                  Connexion...
                </>
              ) : (
                "Entrer sur le terrain"
              )}
            </Button>
          </form>
          <p className="font-mono text-xs text-muted-foreground max-sm:hidden mt-5 text-center">
            (Press <kbd>d</kbd> to toggle dark mode)
          </p>
        </CardContent>
      </Card>
    </div>
    //     <div className="flex min-h-svh p-6">
    //   <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
    //     <div>
    //       <h1 className="font-medium">MonBasketball ! ⚠️ En développement ! ⚠️</h1>
    //       <img src={icon} alt="" />
    //       <Button className="mt-2" onClick={() => navigate("/home")}>GO HOME!</Button>
    //     </div>
    //     <div className="font-mono text-xs text-muted-foreground max-sm:hidden">
    //       (Press <kbd>d</kbd> to toggle dark mode)
    //     </div>
    //   </div>
    // </div>
  )
}

export default AuthPage
