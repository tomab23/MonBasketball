import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { parseSupabaseError, type ParsedError } from "@/utils/SupabaseError"
import type Shoes from "@/models/Shoes"
import { getShoes, getTotalPrice } from "@/services/ShoesService"

export const useShoes = () => {
  const { user } = useAuth()
  const [shoes, setShoes] = useState<Shoes[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ParsedError | null>(null)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  //  récupere toutes les paires de l'utilisateur
  const fetchShoes = useCallback(async () => {
    if (!user) return
    setLoading(true)
    try {
      const data = await getShoes(user.id)
      setShoes(data)
    } catch (err) {
      setError(parseSupabaseError(err))
    } finally {
      setLoading(false)
    }
  }, [user])

  // ajouter une paire
  // const addSession = async (
  //   date: string,
  //   time: string,
  //   duration: number,
  //   location: string,
  //   type: string,
  //   note: string
  //   ) => {
  //   if (!user) return
  //   setLoading(true)
  //   try {
  //     await insertSession(user.id, date, time, duration,location, type, note)
  //     await fetchSessions()
  //   } catch (err) {
  //     setError(parseSupabaseError(err))
  //   } finally {
  //     setLoading(false)
  //   }
  //   }

  //  mettre a jour une paire
  //   const editSession = useCallback(
  //     async (id: string,
  //   date: string,
  //   time: string,
  //   duration: number,
  //   location: string,
  //   type: string,
  //   note: string
  // ) => {
  //       if (!user) return
  //   setLoading(true)
  //   try {
  //     await updateSession(id,user.id, date, time, duration,location, type, note)
  //     await fetchSessions()
  //   } catch (err) {
  //     setError(parseSupabaseError(err))
  //   } finally {
  //     setLoading(false)
  //   }
  //     },
  //     [user, fetchSessions]
  //   )

  //   supprimer une paire
  //   const removeSession = async (id: string) => {
  //     if (!user) return
  //     await deleteSessionById(id, user.id)
  //     setSessions((prev) => prev.filter((c) => c.id !== id))
  //   }

  //   Récupérer une paire par id
  // const fetchSessionById = useCallback(async (id: string): Promise<Session | null> => {
  //   if (!user) return null;
  //   try {
  //     return await getSessionById(id, user.id);
  //   } catch (err) {
  //     const message = parseSupabaseError(err);
  //     setError(message); // ← string lisible pour l'UI
  //     return null;
  //   }
  // }, [user]);

//   Charge le total du prix des chaussures
  useEffect(() => {
    if (!user) return
    const load = async () => {
      if (user) {
        const total = await getTotalPrice(user.id)
        setTotalPrice(total)
      }
    }

    load()
  }, [user])

  // Effect pour charger les données initiales
  useEffect(() => {
    const load = async () => {
      if (user) {
        await fetchShoes()
      } else {
        setShoes([])
        // setError(null)
      }
    }
    load()
  }, [user, fetchShoes])

  return {
    shoes,
    loading,
    fetchShoes,
    totalPrice,
    error,
  }
}
