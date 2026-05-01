import { useSession } from "@/hooks/useSession"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import Header from "@/components/layout/Header"
import { PlusCircle } from "lucide-react"
import DiarySession from "@/components/DiarySession"

const DiaryPage = () => {
  const { sessions } = useSession();
  const navigate = useNavigate();

  return (
    <div className="contenu">
      <Header title={`Journal (${sessions.length})`}>
                <Button
          className="max-sm:text-xs"
          variant={"default"}
          onClick={() => navigate("/form")}
        >
          <PlusCircle /> Ajouter une session
        </Button>
      </Header>

      <div className="mt-10">
        {sessions.map((session) => (
            <DiarySession key={session.id} session={session} />
        )).reverse()}
      </div>
    </div>
  )
}

export default DiaryPage
