export const loginForm = {
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
    rememberMe: {
      name: "rememberMe",
      label: "Remember Me",
      type: "checkbox",
      errorMsg: "Field is required."
    }
  }
}

export const registerForm = {
  formId: "register",
  formField: {
    FirstName: {
      name: "FirstName",
      label: "FirstName",
      type: "FirstName",
      placeholder: "FirstName",
      errorMsg: "FirstName is required.",
      invalidMsg: "Your FirstName is invalid."
    },
    LastName: {
      name: "LastName",
      label: "LastName",
      type: "LastName",
      placeholder: "LastName",
      errorMsg: "LastName is required.",
      invalidMsg: "Your LastName is invalid."
    },
    EmailAddress: {
      name: "EmailAddress",
      label: "EmailAddress",
      type: "email",
      placeholder: "EmailAddress",
      errorMsg: "EmailAddress is required.",
      invalidMsg: "Your EmailAddress is invalid."
    },
    Password: {
      name: "Password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard."
    },
    repeatPassword: {
      name: "Password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard."
    },
    PhoneNumber: {
      name: "PhoneNumber",
      label: "PhoneNumber",
      type: "number",
      placeholder: "PhoneNumber",
      errorMsg: "Phone number is required.",
      invalidMsg: "Your phone is invalid."
    }
    // terms: {
    //   name: "agree",
    //   label: "Agree",
    //   type: "checkbox",
    //   errorMsg: "Privacy policy and terms required."
    // }
  }
}

export const resetPasswordForm = {
  formId: "reset-password",
  formField: {
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Password is required.",
      invalidMsg: "Your password must match standard."
    },
    confirmPassword: {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "********",
      errorMsg: "Confirm Password is required.",
      invalidMsg: "Your password must match standard."
    }
  }
}
export const forgotPasswordForm = {
  formId: "forgot-password",
  formField: {
    EmailAddress: {
      name: "EmailAddress",
      label: "EmailAddress",
      type: "email",
      placeholder: "EmailAddress",
      errorMsg: "EmailAddress is required.",
      invalidMsg: "Your EmailAddress is invalid."
    }
  }
}

// export default form
