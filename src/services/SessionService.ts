import { supabase } from "@/lib/supabaseClient";

// ⬇️ Récupérer les données de la table "session" pour l'utilisateur connecté
export const getSessions = async (userId: string) => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("user_id", userId)
  if (error) throw new Error(error.message);
  return data;
};

// 1️⃣ Récupérer une session par son id
export const getSessionById = async (id: number, userId: string) => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data;
};

// ❌ Supprimer un session par id
export const deleteSessionById = async (id: number, userId: string) => {
  const { error } = await supabase
    .from("session")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};