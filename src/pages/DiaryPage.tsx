import { useSession } from "@/hooks/useSession"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { formatTime } from "@/helpers/FormatTime"

const DiaryPage = () => {
  const { sessions } = useSession();
  const navigate = useNavigate();

  return (
    <div className="contenu">
      <p>DiaryPage</p>

      <div>
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center gap-2">
            <p>
              📅{session.date} - {session.type} -{" "}
              ⏱{formatDurationTime(session.duration)} - 📍{session.location} -{" "}
              {session.id} - 🕐{formatTime(session.time)}
            </p>
            <Button onClick={() => navigate(`/form/${session.id}`)}>edit</Button>
          </div>
        )).reverse()}
      </div>
    </div>
  )
}

export default DiaryPage
