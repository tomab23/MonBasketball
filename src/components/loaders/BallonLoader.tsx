import { BasketballIcon } from "../../assets/BasketballIcon"

export function BallonLoader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <BasketballIcon className="w-12 h-12 animate-spin text-orange-500" />

      <p className="text-sm text-muted-foreground">
        Connexion...
      </p>
    </div>
  )
}