import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { stringToDate } from "@/helpers/StringToDate"
import type Enjury from "@/models/Enjury"
import {
  Bandage,
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
const EnjuryCard = ({ enjury }: Props) => {
  return (
    <Card className="flex w-fit flex-row items-center justify-between px-5 max-sm:px-3 max-sm:gap-5">
      <div>
        <BriefcaseMedical
          className={`h-10 w-10 max-sm:h-8 max-sm:w-8 ${!enjury.date_end ? "text-destructive" : "text-green-600"}`}
        />
      </div>

      <div className="flex w-80 flex-col gap-3 max-sm:w-48">
        <div className="flex items-center justify-between gap-1">
          <p className="flex items-center gap-2 max-sm:gap-1">
            <Bandage className="max-sm:h-4 max-sm:w-4" />{" "}
            <span className="truncate max-sm:text-xs">{enjury.title}</span>
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
    </Card>
  )
}

export default EnjuryCard
