import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Activity,
  Users,
  Timer,
  Volleyball,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 space-y-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Volleyball className="text-orange-500" />
          Basketball Dashboard
        </h1>

        <Button className="bg-orange-500 hover:bg-orange-600">
          Nouveau Match
        </Button>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-4">
        <StatCard
          icon={<Trophy />}
          title="Victoires"
          value="18"
        />
        <StatCard
          icon={<Activity />}
          title="Points / Match"
          value="102.4"
        />
        <StatCard
          icon={<Users />}
          title="Joueurs actifs"
          value="12"
        />
        <StatCard
          icon={<Timer />}
          title="Temps moyen"
          value="32 min"
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* NEXT GAME */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Prochain Match</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Paris Hoopers</span>
              <Badge className="bg-orange-500">VS</Badge>
              <span>Lyon Ballers</span>
            </div>

            <p className="text-zinc-400">
              24 Avril — 20:00
            </p>

            <Button className="w-full">
              Voir détails
            </Button>
          </CardContent>
        </Card>

        {/* PLAYER PERFORMANCE */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Performance Joueur</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Performance label="Points" value={85} />
            <Performance label="Rebonds" value={65} />
            <Performance label="Passes" value={72} />
            <Performance label="Défense" value={58} />
          </CardContent>
        </Card>

        {/* TEAM STATUS */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>État de l'Équipe</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <Player name="Jordan Martin" position="PG" />
            <Player name="Lucas Bernard" position="SG" />
            <Player name="Noah Petit" position="SF" />
            <Player name="Adam Leroy" position="PF" />
            <Player name="Leo Moreau" position="C" />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

/* ---------- Components ---------- */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="text-orange-500">{icon}</div>
        <div>
          <p className="text-sm text-zinc-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function Performance({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} />
    </div>
  )
}

function Player({
  name,
  position,
}: {
  name: string
  position: string
}) {
  return (
    <div className="flex justify-between items-center bg-zinc-800 rounded-lg p-3">
      <span>{name}</span>
      <Badge variant="secondary">{position}</Badge>
    </div>
  )
}