import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeftIcon, HomeIcon } from "lucide-react"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center dark:text-white px-4">
      <div className="w-full max-w-3xl">

        {/* SCOREBOARD */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" border-4 dark:border-neutral-700 border-neutral-400 rounded-2xl shadow-2xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-sm tracking-widest text-neutral-400">
              FINAL SCORE
            </p>
          </div>

          {/* Teams + Score */}
          <div className="grid grid-cols-3 max-sm:grid-cols-1 items-center text-center">

            {/* HOME */}
            <div className="max-sm:hidden">
              <p className="text-neutral-400 text-sm">HOME</p>
              <p className="text-xl font-semibold">YOU</p>
            </div>

            {/* SCORE */}
            <div className="flex justify-center gap-6">
              <ScoreDigit value="4" />
              <ScoreDigit value="0" />
              <ScoreDigit value="4" />
            </div>

            {/* AWAY */}
            <div className="max-sm:hidden">
              <p className="text-neutral-400 text-sm">AWAY</p>
              <p className="text-xl font-semibold">PAGE</p>
            </div>

          </div>

          {/* Message */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-lg font-medium">
              Game Over — Page Not Found
            </p>
            <p className="text-neutral-400 text-sm">
              Cette page est sortie du terrain.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              <ArrowLeftIcon />
              Retour
            </Button>

            <Button onClick={() => navigate("/home")}>
              <HomeIcon />
              Accueil
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

/* ---------------- SCORE DIGIT ---------------- */

function ScoreDigit({ value }: { value: string }) {
  return (
    <div className=" border-2 dark:border-red-600 border-primary rounded-lg px-6 py-4 shadow-inner">
      <span className="font-mono text-6xl max-sm:text-4xl dark:text-red-500 text-primary tracking-widest ml-2 max-sm:ml-1">
        {value}
      </span>
    </div>
  )
}