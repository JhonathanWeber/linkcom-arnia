import * as yup from "yup";

export const getUserByEmailValidator = yup.object({
    email: yup.string().required('Email is required').email('Email format is not valid!')
})