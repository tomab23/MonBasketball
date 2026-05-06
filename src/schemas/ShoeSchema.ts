import * as Yup from "yup"

// TODO valid shoe form

    // .nullable() // accepte null (venant de la BDD)
    // .default(""),

export const ValidShoeSchema = Yup.object({
  name: Yup.string().required("Le nom est obligatoire"),

  color: Yup.string().nullable().default(""),

  brand: Yup.string().nullable().default(""),

  size: Yup.number()
    .typeError("La taille doit être un nombre")
    .positive("La taille doit être positive")
    .min(1, "Minimum 1")
    .max(60, "Maximum 60").nullable(),

  price: Yup.number()
    .typeError("Le prix doit être un nombre")
    .positive("Le prix doit être positive")
    .min(1, "Minimum 1").nullable(),
    // .max(3000, "Maximum 10h"),

    date: Yup.string().nullable().default(""),
})



export type ShoeFormValues = Yup.InferType<typeof ValidShoeSchema>
