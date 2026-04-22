type SupabaseError = {
  message: string;
  code?: string;   // ex: Postgres error codes ("23505")
  status?: number; // ex: HTTP status (409, 400, etc.)
};

export const parseSupabaseError = (error: SupabaseError): string => {
  if (!error) return "Une erreur inconnue est survenue.";


  // ⚙️ Cas 1 : erreurs d'auth (HTTP)
  switch (error.status) {
    case 400:
      return "Requête invalide. Vérifie les informations saisies.";
    case 401:
      return "Identifiants incorrects.";
    case 403:
      return "Accès refusé.";
    case 404:
      return "Ressource introuvable.";
    case 409:
      return "Ce compte existe déjà.";
    case 422:
      return "Les données envoyées ne sont pas valides.";
  }

  // ⚙️ Cas 2 : erreurs Postgres
  switch (error.code) {
    case "23505":
      return "Cette valeur existe déjà.";
    case "23503":
      return "Référence invalide.";
    case "23514":
      return "Valeur invalide pour ce champ.";
  }

  // ⚙️ Cas 3 : fallback
  return String({ message: error.message });
};