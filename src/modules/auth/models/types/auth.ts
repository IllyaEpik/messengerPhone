import { InferType } from "yup";
import { loginValidator,registrationValidator } from "../lib/auth";

export type LoginForm = InferType<typeof loginValidator>

export type RegistrationForm = InferType<typeof registrationValidator>;