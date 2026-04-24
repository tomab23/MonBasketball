// types
type SupabaseError = {
  message: string
  code?: string
  status?: number
}

export type ParsedError = {
  message: string
  code?: string
  status?: number
}

// parser
export const parseSupabaseError = (rawError: unknown): ParsedError => {
  if (!rawError || typeof rawError !== "object") {
    return { message: "Une erreur inconnue est survenue." }
  }

  const err = rawError as SupabaseError

  // Erreurs HTTP (auth, api)
  switch (err.status) {
    case 400: return { message: "Requête invalide. Vérifie les informations saisies.", status: 400 }
    case 401: return { message: "Identifiants incorrects.", status: 401 }
    case 403: return { message: "Accès refusé.", status: 403 }
    case 404: return { message: "Ressource introuvable.", status: 404 }
    case 409: return { message: "Ce compte existe déjà.", status: 409 }
    case 422: return { message: "Les données envoyées ne sont pas valides.", status: 422 }
  }

  // Erreurs Postgres
  switch (err.code) {
    case "23505":    return { message: "Cette valeur existe déjà.", code: "23505" }
    case "23503":    return { message: "Référence invalide.", code: "23503" }
    case "23514":    return { message: "Valeur invalide pour ce champ.", code: "23514" }
    case "23502":    return { message: "Un champ obligatoire est manquant.", code: "23502" }
    case "42501":    return { message: "Permission insuffisante.", code: "42501" }
    case "PGRST116": return { message: "Ressource introuvable.", code: "PGRST116" }
  }

  // Fallback
  return {
    // message: err.message ?? "Une erreur inconnue est survenue.",
    message: "Une erreur est survenue.",
    code: err.code,
    status: err.status,
  }
}