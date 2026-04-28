import { useSession } from "@/hooks/useSession"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { formatTime } from "@/helpers/FormatTime"
import { stringToDate } from "@/helpers/StringToDate"
import Header from "@/components/layout/Header"
import { PlusCircle } from "lucide-react"

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
          <div key={session.id} className="flex items-center gap-2">
            <p>
              📅{stringToDate(session.date)} - {session.type === "match" ? "Match" : "Entraînement "} -{" "}
              ⏱{formatDurationTime(session.duration)} - 📍{session.location} -{" "}
               🕐{formatTime(session.time)}
            </p>
            <Button onClick={() => navigate(`/form/${session.id}`)}>edit</Button>
          </div>
        )).reverse()}
      </div>
    </div>
  )
}

export default DiaryPage
