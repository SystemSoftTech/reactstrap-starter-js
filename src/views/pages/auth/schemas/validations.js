import * as Yup from "yup"
import { loginForm, registerForm, resetPasswordForm } from "./form"
import { AppConstant } from "@utils"

export const loginValidations = [
  Yup.object().shape({
    [loginForm.formField.email.name]: Yup.string()
      .required(loginForm.formField.email.errorMsg)
      .matches(
        AppConstant.SingleEmailRegex,
        loginForm.formField.email.invalidMsg
      ),
    [loginForm.formField.password.name]: Yup.string()
      .required(loginForm.formField.password.errorMsg)
      .min(6, loginForm.formField.password.invalidMsg),
      // .matches(
      //   AppConstant.PasswordRegex,
      //   loginForm.formField.password.invalidMsg
      // ),
    [loginForm.formField.rememberMe.name]: Yup.bool()
      .oneOf([true], loginForm.formField.rememberMe.errorMsg)
      .required(loginForm.formField.rememberMe.errorMsg)
      .typeError("Field is required.")
  })
]

export const registerValidations = [
  Yup.object().shape({
    [registerForm.formField.FirstName.name]: Yup.string().required(
      registerForm.formField.FirstName.errorMsg
    ),
    [registerForm.formField.LastName.name]: Yup.string().required(
      registerForm.formField.LastName.errorMsg
    ),
    [registerForm.formField.EmailAddress.name]: Yup.string()
      .required(registerForm.formField.EmailAddress.name)
      .matches(
        AppConstant.SingleEmailRegex,
        registerForm.formField.FirstName.invalidMsg
      ),
    [registerForm.formField.Password.name]: Yup.string()
      .required(registerForm.formField.Password.errorMsg)
      .min(8, registerForm.formField.Password.invalidMsg)
      .matches(
        AppConstant.PasswordRegex,
        registerForm.formField.Password.invalidMsg
      ),
      [registerForm.formField.repeatPassword.name]: Yup.string()
      .required(registerForm.formField.repeatPassword.errorMsg)
      .min(8, registerForm.formField.repeatPassword.invalidMsg)
      .matches(
        AppConstant.PasswordRegex,
        registerForm.formField.Password.invalidMsg
      ),
      [registerForm.formField.PhoneNumber.name]: Yup.string()
      .required(registerForm.formField.PhoneNumber.errorMsg)
      .matches(AppConstant.PhoneNumberRegex, registerForm.formField.PhoneNumber.invalidMsg)

    // [registerForm.formField.terms.name]: Yup.bool()
    //   .oneOf([true], registerForm.formField.terms.errorMsg)
    //   .required(registerForm.formField.terms.errorMsg)
    //   .typeError("Field is required.")
  })
]

export const resetPasswordValidations = [
  Yup.object().shape({
    [resetPasswordForm.formField.password.name]: Yup.string()
      .required("Password is required")
      .min(8, resetPasswordForm.formField.password.errorMsg)
      .matches(
        AppConstant.PasswordRegex,
        resetPasswordForm.formField.password.invalidMsg
      ),
    [resetPasswordForm.formField.confirmPassword.name]: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    )
  })
]


export const forgotPasswordValidations = [
  Yup.object().shape({
    [registerForm.formField.EmailAddress.name]: Yup.string()
      .required(registerForm.formField.EmailAddress.name)
      .matches(
        AppConstant.SingleEmailRegex,
        registerForm.formField.FirstName.invalidMsg
      )
  })
]
