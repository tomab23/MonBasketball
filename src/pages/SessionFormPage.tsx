import { useState } from "react"

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
import { useNavigate } from "react-router-dom"
import { ArrowLeftIcon } from "lucide-react"

export default function SessionFormPage() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    date: "",
    time: "",
    duration: "",
    location: "",
    type: "",
    note: "",
  })

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)

    // simulation save
    await new Promise((r) => setTimeout(r, 1500))

    // console.log(form)

    setLoading(false)

    navigate("/home")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-zinc-800 shadow-xl dark:bg-zinc-900/80">
        <CardHeader className="space-y-1 text-center">
          <Button
            variant={"ghost"}
            className={"-mb-5 w-fit"}
            onClick={() => navigate(-1)}
          >
            <ArrowLeftIcon />
            Retour
          </Button>
          <div className="flex justify-center">
            <BasketballIcon className="h-10 w-10 text-primary dark:text-orange-500" />
          </div>

          <CardTitle className="text-2xl">Nouvelle Session</CardTitle>

          <CardDescription>
            Ajoute ton entraînement ou ton match 🏀
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* DATE - HEURE */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Heure</Label>
                <Input
                  type="time"
                  value={form.time}
                  onChange={(e) => update("time", e.target.value)}
                />
              </div>
            </div>

            {/* DURATION */}
            <div className="space-y-2">
              <Label>Durée (minutes)</Label>
              <Input
                type="number"
                placeholder="90"
                value={form.duration}
                onChange={(e) => update("duration", e.target.value)}
              />
            </div>

            {/* LOCATION */}
            <div className="space-y-2">
              <Label>Lieu</Label>
              <Input
                placeholder="Gymnase, playground..."
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
              />
            </div>

            {/* TYPE */}
            <div className="space-y-2">
              <Label>Type de session</Label>

              <RadioGroup
                value={form.type}
                onValueChange={(value) => update("type", value)}
                className="grid grid-cols-2 gap-2"
              >
                {/* ENTRAINEMENT */}
                <label
                  className={`flex w-full cursor-pointer gap-2 rounded-lg border py-2 text-sm leading-none font-medium transition-all ${
                    form.type === "training"
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
                  className={`flex w-full cursor-pointer gap-2 rounded-lg border py-2 text-sm leading-none font-medium transition-all ${
                    form.type === "match"
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
                placeholder="Sensations, stats, remarques..."
                value={form.note}
                onChange={(e) => update("note", e.target.value)}
              />
            </div>

            {/* SUBMIT */}
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
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
