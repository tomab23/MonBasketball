import * as Yup from "yup"

export const ValidAuthSchema = Yup.object({
  email: Yup.string()
    .required("L'adresse mail est obligatoire"),

  password: Yup.string()
    .required("Le mot de passe est obligatoire"),

})

export type AuthFormValues =
  Yup.InferType<typeof ValidAuthSchema>