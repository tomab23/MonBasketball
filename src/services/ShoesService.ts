import { supabase } from "@/lib/supabaseClient"
import type Shoe from "@/models/Shoe"

// ⬇️ Récupérer les données de la table "shoes" pour l'utilisateur connecté
export const getShoes = async (userId: string): Promise<Shoe[]> => {
  const { data, error } = await supabase
    .from("shoe")
    .select("*")
    .eq("user_id", userId)
    .order("date_buy", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

// ⬇️ Récupérer le prix total des chaussures pour l'utilisateur
export async function getTotalPrice(userId: string) {
  const { data, error } = await supabase.rpc("get_total_price", {
    user_uuid: userId,
  })

  if (error) throw error

  return data
}

// ❌ Supprimer une chaussure par id
export const deleteShoeById = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("shoe")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🆕 Ajouter une nouvelle chaussure
export const insertShoe = async (
  userId: string,
  name: string,
  brand: string | null,
  size: number | null,
  price: number | null,
  date_buy: string | null,
  color: string | null,
) => {
  const { error } = await supabase
    .from("shoe")
    .insert([{ user_id: userId, name, brand, size, price, date_buy, color }]);
  if (error) throw new Error(error.message);
};

// 🔄 Modifier des informations d'une chaussure par id
export const updateShoe = async (
  id: string,
  userId: string,
  name: string,
  brand: string | null,
  size: number | null,
  price: number | null,
  date_buy: string | null,
  color: string | null,
) => {
  const { error } = await supabase
    .from("shoe")
    .update({ name, brand, size, price, date_buy, color })
    .eq("id", id)
    .eq("user_id", userId);
  // if (error) throw new Error(error.message);
    if (error) throw error;
};
