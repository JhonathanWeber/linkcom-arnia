
import * as yup from "yup";

export const registerUserValidator = yup.object({
    name: yup.string().required('name is required'),
    email: yup.string().required('email is required').email('invalid email format'),
    password: yup.string().required('password is required'),
}) 