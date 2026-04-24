import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { BasketballIcon } from "@/assets/BasketballIcon"
import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeftIcon, Eraser, Trash2Icon } from "lucide-react"
import { useFormik } from "formik"
import { formatDurationTime } from "@/helpers/FormatDurationTime"
import {
  ValidSessionSchema,
  type SessionFormValues,
} from "@/schemas/SessionSchema"
import { formatDate } from "@/helpers/FormatDate"
import type Session from "@/models/Session"
import { useSession } from "@/hooks/useSession"
import { formatTime } from "@/helpers/FormatTime"
import { BasketballLoader } from "@/components/loaders/BasketballLoader"
import ErrorPage from "./errors/ErrorPage"

export default function SessionFormPage() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { fetchSessionById, error, addSession } = useSession()
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const loadSession = async () => {
      if (id) setLoading(true)
      if (!id) return
      try {
        const data = await fetchSessionById(id)
        if (!data) return
        setSession(data)
      } finally {
        setLoading(false)
      }
    }
    loadSession()
  }, [id, fetchSessionById])

  const today = formatDate(new Date())

  const formik = useFormik<SessionFormValues>({
    initialValues: {
      date: session?.date ?? today,
      time: session ? formatTime(session.time) : "",
      duration: session?.duration ?? 0,
      location: session?.location ?? "",
      type: (session?.type ?? "training") as "training" | "match",
      note: session?.note ?? "",
    },
    enableReinitialize: true,
    validationSchema: ValidSessionSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
      if (!id) {
        addSession(
          values.date,
          values.time,
          values.duration,
          values.location,
          values.type,
          values.note ?? ""
        )
      }

      if (!error) {
        navigate(-1)
      }
      // setLoading(true)
      // setTimeout(() => {
      //   setLoading(false)
      //   navigate("/home")
      // }, 1000)
    },
  })

  // console.log(formik.errors)
  // console.log(formik.values)

  // TODO add errors messages

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <BasketballLoader isLoading={true} />
      </div>
    )
  }

  if (error)
    return (
      <ErrorPage
        message={error.message}
        code={error.code}
        status={error.status}
      />
    )

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-zinc-800 shadow-xl dark:bg-zinc-900/80">
        <CardHeader className="space-y-1 text-center">
          {/* HEADER */}
          <div className="-mb-5 flex items-center justify-between">
            <Button
              variant={"ghost"}
              className={"w-fit"}
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon />
              Retour
            </Button>
            <Button
              variant={"ghost"}
              className={"w-fit"}
              onClick={() => formik.resetForm()}
            >
              <Eraser />
              Reset
            </Button>
          </div>
          <div className="flex justify-center">
            <BasketballIcon className="h-10 w-10 text-primary dark:text-orange-500" />
          </div>

          <CardTitle className="text-2xl">
            {id ? "Modifier la session" : "Nouvelle Session"}
          </CardTitle>

          <CardDescription>
            {id ? "Modifie" : "Ajoute"} ton entraînement ou ton match 🏀
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* DATE - HEURE */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>Heure</Label>
                <Input
                  type="time"
                  name="time"
                  id="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/* DURATION */}
            <div className="flex items-center">
              <div className="space-y-2">
                <Label>Durée (minutes)</Label>
                <Input
                  type="number"
                  name="duration"
                  id="duration"
                  placeholder="90"
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  className="max-sm:w-44"
                />
              </div>
              <p className="mt-6 ml-4 font-bold">
                {formatDurationTime(formik.values.duration)}
              </p>
            </div>

            {/* LOCATION */}
            <div className="space-y-2">
              <Label>Lieu</Label>
              <Input
                id="location"
                name="location"
                placeholder="Gymnase, playground..."
                value={formik.values.location}
                onChange={formik.handleChange}
              />
            </div>

            {/* TYPE */}
            <div className="space-y-2">
              <Label>Type de session</Label>

              <RadioGroup
                value={formik.values.type}
                onValueChange={(value) => formik.setFieldValue("type", value)}
                className="grid grid-cols-2 gap-2"
              >
                {/* ENTRAINEMENT */}
                <label
                  className={`flex w-full cursor-pointer items-center gap-2 rounded-lg border py-2 text-sm leading-none font-medium transition-all max-sm:gap-1 ${
                    formik.values.type === "training"
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-zinc-700 bg-muted hover:border-zinc-500 dark:bg-zinc-800"
                  }`}
                >
                  <RadioGroupItem value="training" className="sr-only" />
                  <span className="text-base leading-none">🏀</span>
                  <span className="leading-none">Entraînement</span>
                </label>

                {/* MATCH */}
                <label
                  className={`flex w-full cursor-pointer items-center gap-2 rounded-lg border py-2 text-sm leading-none font-medium transition-all max-sm:gap-1 ${
                    formik.values.type === "match"
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-zinc-700 bg-muted hover:border-zinc-500 dark:bg-zinc-800"
                  }`}
                >
                  <RadioGroupItem value="match" className="sr-only" />
                  <span className="text-base leading-none">🔥</span>
                  <span className="leading-none">Match</span>
                </label>
              </RadioGroup>
            </div>

            {/* NOTE */}
            <div className="space-y-2">
              <Label>Note (optionnel)</Label>
              <Textarea
                id="note"
                name="note"
                placeholder="Sensations, stats, remarques..."
                value={formik.values.note ?? ""}
                onChange={formik.handleChange}
              />
            </div>

            {/* SUBMIT */}
            {id ? (
              <div className="flex items-center justify-between">
                <Button variant={"destructive"}><Trash2Icon /> Supprimer</Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="flex w-fit items-center justify-center gap-2 bg-primary hover:bg-primary/90"
                >
                  {loading ? (
                    <>
                      <BasketballIcon className="h-5 w-5 animate-spin" />
                      Enregistrement...
                    </>
                  ) : id ? (
                    "Modifier la session"
                  ) : (
                    "Ajouter la session"
                  )}
                </Button>
              </div>
            ) : (
              <Button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 bg-primary hover:bg-primary/90"
              >
                {loading ? (
                  <>
                    <BasketballIcon className="h-5 w-5 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  "Ajouter la session"
                )}
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
