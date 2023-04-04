import {authRequest} from "./request"
import {
  LOG_IN_SUCCESS
} from "redux/constant/constants"

export function postLogin(data) {
    return (dispatch) => {
      return authRequest("Auth/login", "POST", {
        Username: data.username,
        Password: data.password
      }).then((response) => {
        dispatch({
          type: LOG_IN_SUCCESS,
          payload: response.Data
        })
        localStorage.setItem('userDetails', JSON.stringify(response))
        localStorage.setItem("authToken", response.AuthToken)
        localStorage.setItem("refreshToken", response.RefreshToken)
        localStorage.setItem("FullName", response.FullName)
        localStorage.setItem("Email", response.Email)
      })
    }
  }


  export function refreshToken(payLoad) {
    return (dispatch) => {
      return authRequest("Auth/refresh-token", "POST", payLoad).then(
        (response) => {
          dispatch({
            type: LOG_IN_SUCCESS,
            payload: response.Data
          })
          localStorage.removeItem("authToken")
          localStorage.removeItem("refreshToken")
          localStorage.removeItem("FullName")
          localStorage.removeItem("Email")
          localStorage.setItem("authToken", response.AuthToken)
          localStorage.setItem("refreshToken", response.RefreshToken)
          localStorage.setItem("FullName", response.FullName)
          localStorage.setItem("Email", response.Email)
        }
      )
    }
  }