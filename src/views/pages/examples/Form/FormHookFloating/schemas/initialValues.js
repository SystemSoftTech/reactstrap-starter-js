import checkout from "./form"

const {
  formField: { email, password, phone, amount, bio }
} = checkout

const initialValues = {
  [email.name]: "",
  [password.name]: "",
  [phone.name]: "",
  [amount.name]: "",
  [bio.name]: ""
}

export default initialValues
