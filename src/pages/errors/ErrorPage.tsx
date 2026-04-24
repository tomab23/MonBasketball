import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, HomeIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

type Props = {
  message: string
  code?: string
  status?: number
}
const ErrorPage = ({ message, code, status }: Props) => {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <p>{message}</p>
        {code && <p className="text-xs text-muted-foreground">Code : {code}</p>}
        {status && <p className="text-xs text-muted-foreground">Status : {status}</p>}
      </div>
                <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon />
              Retour
            </Button>

            <Button onClick={() => navigate("/home")}>
              <HomeIcon />
              Accueil
            </Button>
          </div>
    </div>
  )
}

export default ErrorPage
