export const stringToDate = (dateString?: string): string => {
  if (!dateString) return "—"
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString))
}