import { Button } from "@/components/ui/button"
import { stringToDate } from "@/helpers/StringToDate"
import type Enjury from "@/models/Enjury"
import {
  BriefcaseMedical,
  CalendarCheck,
  CalendarPlus2,
  ClipboardCheck,
  Notebook,
  Pen,
} from "lucide-react"

type Props = {
  enjury: Enjury
}
const EnjuryInfo = ({ enjury }: Props) => {
  return (
    <div className="flex w-full items-center justify-between border-b-2 p-2">
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex items-center gap-2">
          <BriefcaseMedical
            className={`h-10 w-10 max-sm:h-8 max-sm:w-8 ${!enjury.date_end ? "text-destructive" : "text-green-600"}`}
          />

          <p className="w-60 truncate max-sm:text-xs" title={enjury.title}>
            {enjury.title}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1 max-sm:text-xs">
            <CalendarPlus2 className="max-sm:h-4 max-sm:w-4" />{" "}
            {stringToDate(enjury.date_start)}
          </p>

          <p className="flex items-center gap-1 max-sm:text-xs">
            <CalendarCheck className="max-sm:h-4 max-sm:w-4" />{" "}
            {enjury.date_end && stringToDate(enjury.date_end)}
          </p>
        </div>
      </div>

      <div className="flex w-24 items-center justify-end gap-3 max-sm:gap-2">
        <span title={enjury.note ?? ""}>
          <Notebook
            className={`h-5 w-5 max-sm:h-4 max-sm:w-4 ${enjury.note ?? "text-muted-foreground"}`}
          />
        </span>
        {!enjury.date_end && (
          <Button title="Fin de blessure date du jour" size={"icon"}>
            <ClipboardCheck className="h-10 w-10" />
          </Button>
        )}
        <Button size={"icon"} variant={"secondary"}>
          <Pen />
        </Button>
      </div>
    </div>
  )
}

export default EnjuryInfo
