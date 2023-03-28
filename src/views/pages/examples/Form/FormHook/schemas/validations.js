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
    preference,
    jobType,
    dob,
    time
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
      .matches(AppConstant.PhoneNumberRegex, phone.invalidMsg),
    [amount.name]: Yup.number()
      .positive()
      .required(amount.errorMsg)
      .typeError("Amount is required."),
    [bio.name]: Yup.string().required(bio.errorMsg),
    [gender.name]: Yup.string().required(gender.errorMsg),
    [interest.name]: Yup.array()
      .min(1)
      .required(interest.errorMsg)
      .typeError("Interest is required."),
    [preference.name]: Yup.array()
      // .oneOf([], preference.errorMsg)
      .required(preference.errorMsg)
      .typeError("Please select at least one field."),
    [jobType.name]: Yup.string()
      // .oneOf([true], rememberMe.errorMsg)
      .required(jobType.errorMsg),
    // [rememberMe.name]: Yup.array().min(1).required(rememberMe.errorMsg),
    [dob.name]: Yup.date()
      .required(dob.errorMsg)
      .typeError("Field is required."),
    [time.name]: Yup.date()
      .required(time.errorMsg)
      .typeError("Field is required.")
  })
]

export default validations
