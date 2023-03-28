import checkout from "./form"

const {
  formField: { email, password, phone, amount, bio, gender, interest, rememberMe }
} = checkout

const initialValues = {
  [email.name]: "",
  [password.name]: "",
  [phone.name]: "",
  [amount.name]: "",
  [bio.name]: "",
  [gender.name]: "",
  [interest.name]: "",
  [rememberMe.name]: ""
}

export default initialValues
