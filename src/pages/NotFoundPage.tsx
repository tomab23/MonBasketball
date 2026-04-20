import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="max-w-md w-full text-center shadow-xl">
        <CardContent className="p-8 space-y-6">
          
          {/* Emoji / Illustration */}
          <div className="text-7xl">🏀</div>

          {/* Title */}
          <h1 className="text-5xl font-bold tracking-tight">
            404
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg">
            Oups… Ce terrain n'existe pas.
            <br />
            La page que vous cherchez est sortie du terrain.
          </p>

          {/* Actions */}
          <div className="flex justify-center gap-4 pt-4">
            <Button onClick={() => navigate(-1)} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour
            </Button>

            <Button onClick={() => navigate("/")}>
              <Home className="mr-2 h-4 w-4" />
              Accueil
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}