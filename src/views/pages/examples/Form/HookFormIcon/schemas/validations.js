import * as Yup from "yup"
import { AppConstant } from "@utils"
import checkout from "./form"

const {
  formField: {
    email,
    password,
    phone,
    amount,
    bio,
    gender,
    interest,
    rememberMe
  }
} = checkout

const validations = [
  Yup.object().shape({
    [email.name]: Yup.string()
      .required(email.errorMsg)
      .matches(AppConstant.SingleEmailRegex, email.invalidMsg),
    [password.name]: Yup.string()
      .required(password.errorMsg)
      .min(8, password.invalidMsg)
      .matches(AppConstant.PasswordRegex, password.invalidMsg),
    [phone.name]: Yup.string()
      .required(phone.errorMsg)
      .min(11, phone.invalidMsg),
    [amount.name]: Yup.string().required(amount.errorMsg),
    [bio.name]: Yup.string().required(bio.errorMsg),
    [gender.name]: Yup.string().required(gender.errorMsg),
    [interest.name]: Yup.object()
      .required(interest.errorMsg)
      .typeError("Interest is required."),
    [rememberMe.name]: Yup.bool()
      .oneOf([true], rememberMe.errorMsg)
      .required(rememberMe.errorMsg)
      .typeError("Field is required.")
    // [rememberMe.name]: Yup.array().min(1).required(rememberMe.errorMsg),
  })
]

export default validations
