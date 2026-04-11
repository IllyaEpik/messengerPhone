import * as yup from "yup"
export const loginValidator = yup.object({
    email: yup.string().email("it must be email").required("required").min(6, "min is 6").max(100, "max is 100"),
    password: yup.string().min(8,"min is 8").required("required")
})
export const registrationValidator = yup.object({
    email: yup.string().email("it must be email").required("required").min(6, "min is 6").max(100, "max is 100"),
    password: yup.string().min(8,"min is 8").required("required"),
    confirm: yup.string().min(8,"min is 8").required("required").oneOf([yup.ref("password")], "passwords must match")
})