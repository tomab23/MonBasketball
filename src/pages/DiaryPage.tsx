import { useSession } from "@/hooks/useSession"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

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
              {session.date} - {session.type} -{" "}
              {formatDurationTime(session.duration)} - {session.location} -{" "}
              {session.id}
            </p>
            <Button onClick={() => navigate(`/form/${session.id}`)}>edit</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DiaryPage
