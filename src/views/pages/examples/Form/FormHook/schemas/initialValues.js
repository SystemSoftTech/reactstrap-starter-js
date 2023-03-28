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

const initialValues = {
  [email.name]: "",
  [password.name]: "",
  [phone.name]: "",
  [amount.name]: "",
  [bio.name]: "",
  [gender.name]: "",
  [interest.name]: "",
  [preference.name]: "",
  [jobType.name]: "",
  [dob.name]: "",
  [time.name]: ""
}

export default initialValues
