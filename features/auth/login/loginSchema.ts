import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Doit être une adresse email valide")
    .required("Doit être rempli"),
});
