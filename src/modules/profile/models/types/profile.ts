import { InferType } from "yup";
import { profileFormValidator } from "../lib/profile";

export type profileForm = InferType<typeof profileFormValidator>
