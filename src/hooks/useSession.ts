import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import type Session from "@/models/Session"
import { deleteSessionById, getSessionById, getSessions } from "@/services/SessionService"

export const useSession = () => {
  const { user } = useAuth()
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(false)

//  récupere toutes les sessions de l'utilisateur
const fecthSessions = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getSessions(user.id)
    setSessions(data)
  } catch (err) {
    console.error(err)
  } finally {
    setLoading(false)
  }
}, [user])



// ajouter une session


//  mettre a jour une session


//   supprimer une session
  const removeSession = async (id: number) => {
    if (!user) return
    await deleteSessionById(id, user.id)
    setSessions((prev) => prev.filter((c) => c.id !== id))
  }



//   supprimer un user


//   Récupérer une session par id
  const fetchSessionById = useCallback(async (id: number) => {
  if (!user) return null;
  return await getSessionById(id, user.id);
}, [user]);



// Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fecthSessions()
      } else {
        setSessions([])
        // setError(null)
      }
    }
    load()
  }, [user, fecthSessions])



  return {
    sessions,
    loading,
    fecthSessions,
    fetchSessionById,
    removeSession


  }
}