const form = {
  formId: "login",
  formField: {
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "test@test.com",
      errorMsg: "Email is required.",
      invalidMsg: "Your email is invalid."
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard."
    },
    phone: {
      type: "number",
      name: "phone",
      label: "Phone",
      placeholder: "1 234 567 8910",
      errorMsg: "Phone is required.",
      invalidMsg: "Phone is invalid."
    },
    amount: {
      type: "number",
      name: "amount",
      label: "Amount",
      placeholder: "10,000",
      errorMsg: "Amount is required.",
      invalidMsg: "Amount is invalid."
    },
    bio: {
      name: "bio",
      label: "Bio",
      type: "textarea",
      placeholder: "Please insert your bio here",
      errorMsg: "Bio is required.",
      invalidMsg: "Bio is required."
    },
    gender: {
      name: "gender",
      label: "Gender",
      type: "select",
      errorMsg: "Gender is required.",
      options: ["male", "female"]
    },
    interest: {
      name: "interest",
      label: "Interest",
      type: "select",
      placeholder: "Select Interest",
      errorMsg: "Interest is required.",
      options: [
        { value: "react", label: "React" },
        { value: "angular", label: "Angular" },
        { value: "vue", label: "Vue" },
        { value: "typescript", label: "TypeScript" },
        { value: "javascript", label: "JavaScript" }
      ]
    },
    preference: {
      name: "preference",
      label: "Preference",
      type: "checkbox",
      errorMsg: "Field is required."
    },
    jobType: {
      name: "jobType",
      label: "Job Type",
      type: "radio",
      errorMsg: "Field is required.",
      options: ["Onsite", "Remote"]
    },
    dob: {
      name: "dob",
      label: "Date of Birth",
      errorMsg: "Date is required."
    },
    time: {
      name: "time",
      label: "Time",
      errorMsg: "Time is required."
    }
  }
}

export default form
