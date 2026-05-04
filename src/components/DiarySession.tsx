import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { formatTime } from "@/helpers/FormatTime"
import { stringToDate } from "@/helpers/StringToDate"
import type Session from "@/models/Session"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { Dumbbell, NotebookText, Swords } from "lucide-react"

type Props = {
  session: Session
}

const DiarySession = ({ session }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-muted-foreground py-4">
      {/* <div className="flex items-center gap-5 max-sm:text-xs">
        <p>
          <b>{stringToDate(session.date)}</b> - 🕐{formatTime(session.time).replace(":", "h")} -{" "}
          {session.type === "match" ? "Match" : "Entraînement "} -📍
          {session.location} - ⏱{formatDurationTime(session.duration)} {" "}
          <span>{session.shoes && "- 👟"}{session.shoes}</span>
        </p>
        <span className="" title={session.note ?? ""}><NotebookTextIcon className={`${session.note ? "text-accent-foreground" : "text-muted"} h-5 w-5 ${session.note && "hover:scale-105"}`} /></span>
      </div> */}

      <div className="flex items-center gap-3 max-sm:text-xs">
        <p>
          📅<b>{stringToDate(session.date)}</b>
        </p>

        <div className="flex flex-wrap gap-2">
          <p>🕐{formatTime(session.time).replace(":", "h")}</p>
          <p title={`${session.type === "match" ? "Match" : "Entraînement "}`} className="flex items-center ml-1">
            {session.type === "match" ? <Swords className="w-5 h-5 max-sm:w-4 max-sm:h-4" /> : <Dumbbell className="w-5 h-5 max-sm:w-4 max-sm:h-4" />}
          </p>
          <p>📍{session.location}</p>
          <p>⏱{formatDurationTime(session.duration)}</p>
          <p className="max-w-72 max-sm:max-w-40 truncate">
            {session.shoes && "👟"}
            {session.shoes}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="" title={session.note ?? ""}>
          <NotebookText
            className={`${session.note ? "text-accent-foreground" : "text-muted"} h-5 w-5 ${session.note && "hover:scale-105"}`}
          />
        </span>
        <Button onClick={() => navigate(`/form/${session.id}`)}>edit</Button>
      </div>
    </div>
  )
}

export default DiarySession
