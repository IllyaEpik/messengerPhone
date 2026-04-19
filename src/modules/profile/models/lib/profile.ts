import * as yup from "yup"

export const profileFormValidator = yup.object({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  email: yup.string().email(),
  birthday: yup.date().optional(),
});