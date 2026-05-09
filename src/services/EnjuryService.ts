import { supabase } from "@/lib/supabaseClient"
import type Enjury from "@/models/Enjury"

// ⬇️ Récupérer les données de la table "enjury" pour l'utilisateur connecté
export const getEnjurys = async (userId: string): Promise<Enjury[]> => {
  const { data, error } = await supabase
    .from("enjury")
    .select("*")
    .eq("user_id", userId)
    .order("date_start", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

// ❌ Supprimer une blessure par id
export const deleteEnjury = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("enjury")
    .delete()
    .eq("id", id)
    .eq("user_id", userId)
  if (error) throw new Error(error.message)
}

// 🆕 Ajouter une nouvelle blessure
export const insertEnjury = async (
  userId: string,
  title: string,
  date_start: string,
  date_end: string | null,
  note: string | null
) => {
  const { error } = await supabase
    .from("enjury")
    .insert([{ user_id: userId, title, date_start, date_end, note }])
  if (error) throw new Error(error.message)
}

// 🔄 Modifier des informations d'une blessure par id
export const updateEnjury = async (
  id: string,
  userId: string,
  title: string,
  date_start: string,
  date_end: string | null,
  note: string | null
) => {
  const { error } = await supabase
    .from("enjury")
    .update({ title, date_start, date_end, note })
    .eq("id", id)
    .eq("user_id", userId)
  // if (error) throw new Error(error.message);
  if (error) throw error
}
