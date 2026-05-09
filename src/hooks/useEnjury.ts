import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { parseSupabaseError, type ParsedError } from "@/utils/SupabaseError"
import type Enjury from "@/models/Enjury"
import { getEnjurys } from "@/services/EnjuryService"

export const useEnjury = () => {
  const { user } = useAuth()
  const [enjurys, setEnjurys] = useState<Enjury[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ParsedError | null>(null)
  const enjuryNumber = enjurys.length

  //  récupere toutes les blessures de l'utilisateur
  const fetchEnjurys = useCallback(async () => {
    if (!user) return
    setLoading(true)
    try {
      const data = await getEnjurys(user.id)
      setEnjurys(data)
    } catch (err) {
      setError(parseSupabaseError(err))
    } finally {
      setLoading(false)
    }
  }, [user])

  // ajouter une paire


  //  mettre a jour une paire


    // supprimer une paire





  // Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchEnjurys()
      } else {
        setEnjurys([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchEnjurys])

  return {
    enjurys,
    loading,
    error,
    fetchEnjurys,
    enjuryNumber
  }
}
