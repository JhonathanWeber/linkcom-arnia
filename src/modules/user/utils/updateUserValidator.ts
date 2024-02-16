import * as yup from "yup";

export const updateUserValidator = yup.object({
    name: yup.string(),
    email: yup.string().email('Ivalid email format'),
    password: yup.string()
})