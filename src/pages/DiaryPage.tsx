import { useSession } from "@/hooks/useSession"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import Header from "@/components/layout/Header"
import { Dumbbell, NotebookText, PlusCircle, Swords } from "lucide-react"
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

      <div className="flex items-center gap-4 mt-5 text-xs">
        <p className="flex items-center gap-1"><Swords className="w-4 h-4 max-sm:w-4 max-sm:h-4" /> : Match</p>
        <p className="flex items-center gap-1"><Dumbbell className="w-4 h-4 max-sm:w-4 max-sm:h-4" /> : Entraînement</p>
        <p className="flex items-center gap-1"><NotebookText className="w-4 h-4 max-sm:w-4 max-sm:h-4" /> : Note</p>
      </div>

      <div className="mt-2">
        {sessions.map((session) => (
            <DiarySession key={session.id} session={session} />
        ))}
      </div>
    </div>
  )
}

export default DiaryPage
