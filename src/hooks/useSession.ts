import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import type Session from "@/models/Session"
import { deleteSessionById, getSessionById, getSessions, insertSession, updateSession } from "@/services/SessionService"
import { parseSupabaseError, type ParsedError } from "@/utils/SupabaseError"

export const useSession = () => {
  const { user } = useAuth()
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ParsedError | null>(null)

//  récupere toutes les sessions de l'utilisateur
const fetchSessions = useCallback(async () => {
  if (!user) return
  setLoading(true)
  try {
    const data = await getSessions(user.id)
    setSessions(data)
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
}, [user])



// ajouter une session
const addSession = async (
  date: string,
  time: string,
  duration: number,
  location: string,
  type: string,
  note: string,
  shoes: string
  ) => { 
  if (!user) return
  setLoading(true)
  try {
    await insertSession(user.id, date, time, duration,location, type, note, shoes)
    await fetchSessions()
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
  }

//  mettre a jour une session
  const editSession = useCallback(
    async (id: string, 
  date: string,
  time: string,
  duration: number,
  location: string,
  type: string,
  note: string,
  shoes: string
) => {
      if (!user) return
  setLoading(true)
  try {
    await updateSession(id,user.id, date, time, duration,location, type, note, shoes)
    await fetchSessions()
  } catch (err) {
    setError(parseSupabaseError(err))
  } finally {
    setLoading(false)
  }
    },
    [user, fetchSessions]
  )

//   supprimer une session
  const removeSession = async (id: string) => {
    if (!user) return
    await deleteSessionById(id, user.id)
    setSessions((prev) => prev.filter((c) => c.id !== id))
  }


//   Récupérer une session par id
const fetchSessionById = useCallback(async (id: string): Promise<Session | null> => {
  if (!user) return null;
  try {
    return await getSessionById(id, user.id);
  } catch (err) {
    const message = parseSupabaseError(err);
    setError(message); // ← string lisible pour l'UI
    return null;
  }
}, [user]);



// Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchSessions()
      } else {
        setSessions([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchSessions])



  return {
    sessions,
    loading,
    fetchSessions,
    fetchSessionById,
    removeSession,
    addSession,
    editSession,
    error,


  }
}