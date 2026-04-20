import * as yup from "yup"
export const loginValidator = yup.object({
    email: yup.string().email("Це має бути електрона пошта").required("необхідний").min(6, "мінімальне значення має бути 6").max(100, "максимальне значення має бути 100"),
    password: yup.string().min(8,"мінімальне значення має бути 8").required("необхідний")
})
export const registrationValidator = yup.object({
    email: yup.string().email("Це має бути електрона пошта").required("необхідний").min(6, "мінімальне значення має бути 6 ").max(100, "максимальне значение має бути 100"),
    password: yup.string().min(8,"мінімальне значення дорівнює 8").required("необхідний"),
    confirm: yup.string().min(8,"мінімальне значення має бути 8").required("необхідний").oneOf([yup.ref("password")], "пароли мають збігатись")
})