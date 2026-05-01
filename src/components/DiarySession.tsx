import { formatDurationTime } from "@/helpers/FormatDurationTime"
import { formatTime } from "@/helpers/FormatTime"
import { stringToDate } from "@/helpers/StringToDate"
import type Session from "@/models/Session"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { NotebookTextIcon } from "lucide-react"

type Props = {
  session: Session
}

const DiarySession = ({ session }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-muted-foreground py-4">
      <div className="flex items-center gap-5 max-sm:text-xs">
        <p>
          📅<b>{stringToDate(session.date)}</b> - 🕐{formatTime(session.time).replace(":", "h")} -{" "}
          {session.type === "match" ? "Match" : "Entraînement "} -📍
          {session.location} - ⏱{formatDurationTime(session.duration)} {" "}
          {session.shoes && "- 👟"}{session.shoes}
        </p>
        <span className="" title={session.note ?? ""}><NotebookTextIcon className={`${session.note ? "text-accent-foreground" : "text-muted"} h-5 w-5 ${session.note && "hover:scale-105"}`} /></span>
      </div>
      <Button onClick={() => navigate(`/form/${session.id}`)}>edit</Button>
    </div>
  )
}

export default DiarySession
