import Yup from "./validate";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required(),
  fullName: Yup.string(),
  username: Yup.string(),
  password: Yup.string().required().min(6),
});
