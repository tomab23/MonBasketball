import * as Yup from "yup"

export const ValidSessionSchema = Yup.object({
  date: Yup.string().required("La date est obligatoire"),

  time: Yup.string().required("L'heure est obligatoire"),

  duration: Yup.number()
    .typeError("La durée doit être un nombre")
    .positive("La durée doit être positive")
    .integer("La durée doit être en minutes")
    .min(1, "Minimum 1 minute")
    .max(600, "Maximum 10h")
    .required("La durée est obligatoire"),

  location: Yup.string()
    .trim()
    .min(2, "Lieu trop court")
    .required("Le lieu est obligatoire"),

  type: Yup.string()
    .oneOf(["training", "match"], "Type invalide")
    .required("Choisis un type de session"),

  note: Yup.string()
    .max(500, "Maximum 500 caractères")
    .nullable() // accepte null (venant de la BDD)
    .default(""),
  shoes: Yup.string()
  .nullable()
})

export type SessionFormValues = Yup.InferType<typeof ValidSessionSchema>
