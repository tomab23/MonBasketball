import { useCallback, useEffect, useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { parseSupabaseError, type ParsedError } from "@/utils/SupabaseError"
import type Shoes from "@/models/Shoe"
import { deleteShoeById, getShoes, getTotalPrice, insertShoe, updateShoe } from "@/services/ShoesService"

export const useShoe = () => {
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
  const addShoe = async (
  name: string,
  brand: string | null,
  size: number | null,
  price: number | null,
  date_buy: string | null,
  color: string | null
    ) => {
    if (!user) return
    setLoading(true)
    try {
      await insertShoe(user.id, name, brand, size, price, date_buy, color)
      await fetchShoes()
    } catch (err) {
      setError(parseSupabaseError(err))
    } finally {
      setLoading(false)
    }
    }

  //  mettre a jour une paire
    const editShoe = useCallback(
      async (id: string,
  name: string,
  brand: string | null,
  size: number | null,
  price: number | null,
  date_buy: string | null,
  color: string | null
  ) => {
        if (!user) return
    setLoading(true)
    try {
      await updateShoe(id,user.id, name, brand, size, price, date_buy, color)
      await fetchShoes()
    } catch (err) {
      setError(parseSupabaseError(err))
    } finally {
      setLoading(false)
    }
      },
      [user, fetchShoes]
    )

    // supprimer une paire
    const removeShoe = async (id: string) => {
      if (!user) return
      await deleteShoeById(id, user.id)
      setShoes((prev) => prev.filter((c) => c.id !== id))
    }



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
    addShoe,
    editShoe,
    removeShoe
  }
}
