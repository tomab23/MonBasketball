import { supabase } from "@/lib/supabaseClient";
import type Shoes from "@/models/Shoes";


// ⬇️ Récupérer les données de la table "shoes" pour l'utilisateur connecté
export const getShoes = async (userId: string) : Promise<Shoes[]> => {
  const { data, error } = await supabase
    .from("shoes")
    .select("*")
    .eq("user_id", userId)
    .order('date_buy', { ascending: false })
  if (error) throw new Error(error.message);
  return data;
};

// ⬇️ Récupérer le prix total des chaussures pour l'utilisateur
export async function getTotalPrice(userId: string) {
  const { data, error } = await supabase.rpc(
    "get_total_price",
    { user_uuid: userId }
  );

  if (error) throw error;

  return data;
}