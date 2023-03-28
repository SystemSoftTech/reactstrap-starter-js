import * as Yup from "yup"
import { AppConstant } from "@utils"
import checkout from "./form"

const {
  formField: { email, password, phone, amount, bio }
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
    [amount.name]: Yup.number().required(amount.errorMsg),
    [bio.name]: Yup.string().required(bio.errorMsg)
  })
]

export default validations
