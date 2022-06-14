import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Ce champ doit être une adresse email valide")
    .required("Ce champ est obligatoire"),
});
