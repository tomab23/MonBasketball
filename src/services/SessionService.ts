import { supabase } from "@/lib/supabaseClient";
import type Session from "@/models/Session";

// ⬇️ Récupérer les données de la table "session" pour l'utilisateur connecté
export const getSessions = async (userId: string) => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("user_id", userId)
    // .order('date', { ascending: false })
  if (error) throw new Error(error.message);
  return data;
};

// 1️⃣ Récupérer une session par son id
export const getSessionById = async (id: string, userId: string) : Promise<Session | null> => {
  const { data, error } = await supabase
    .from("session")
    .select("*")
    .eq("id", id)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw error;
  return data;
};

// ❌ Supprimer un session par id
export const deleteSessionById = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("session")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
};

// 🆕 Insérer un nouvel enregistrement dans la table "session"
export const insertSession = async (
  userId: string,
  date: string,
  time: string,
  duration: number,
  location: string,
  type: string,
  note: string
) => {
  const { error } = await supabase
    .from("session")
    .insert([{ user_id: userId, date, time, duration, location, type, note }]);
  if (error) throw new Error(error.message);
};