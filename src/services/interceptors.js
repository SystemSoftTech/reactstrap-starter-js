// ** AXIOS
import axios from "axios"

// ** Types
// type Method = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE"

// ** Interceptors Request
export const request = (
  url,
  method = "GET",
  payload,
  headers = {}
) => {
  const token = localStorage.getItem("authToken")
  const config = {
    url: `${process.env.REACT_APP_API_BASE_URL}${url}`,
    method: method,
    data: payload,
    withCredentials: true,
    timeout: 10000, // get the values from process
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : null,
      ...headers
    }
  }
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        resolve(response.data)
        return response.data
      })
      .catch((error) => {
        // debugger
        if (error.response) {
          if (error.response.status === 400) {
            reject(`${error.response.data.Message}`)
            return error
          }
          if (error.response.status === 404) {
            reject("Error: Not Found")
            return error
          }
          if (error.response.status === 401) {
            // debugger
            localStorage.removeItem("FullName")
            localStorage.removeItem("userDetails")
            localStorage.removeItem("Email")
            localStorage.removeItem("authToken")
            localStorage.removeItem("refreshToken")
            window.location.href = "/login"
            // setTimeout(() => window.location.reload(), 100)
            reject("Error: Unauthorized Request")
            return error
          }
          if (error.response.data.IsSuccess === false) {
            reject(`${error.response.Message}`)
            return error
          }
          if (error.response.status === 500) {
            reject("Error: Internal Server Error")
            return error
          }
          return error
        }
      })
  })
}

// ** Interceptors Auth Request
export const authRequest = (
  url,
  method = "GET",
  payload,
  headers = {}
) => {
  // const token = localStorage.getItem("authToken")
  const config = {
    url: `${process.env.REACT_APP_AUTH_BASE_URL}${url}`,
    method: method,
    data: payload,
    withCredentials: true,
    timeout: 30000, // get the values from process
    headers: {
      // Accept: "application/json",
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // Authorization: token ? `Bearer ${token}` : null,
      ...headers
    }
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        if (response.data.IsSuccess) {
          resolve(response.data)
          return response.data
        }
        // if(response.data === "invalid user credentials") {
        //   reject("Error: Invalid User Credentials")
        //   return "Error"
        // }
        // if (response.data === "DOESNOTEXIST") {
        //   reject("Error: User Does not exists")
        //   return "Error"
        // } else {
        //   resolve(response.data)
        //   return response.data
        // }
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") {
          reject(error.response.data.Message)
          return error
        } else if (error.code === "ERR_BAD_REQUEST") {
          reject(error.response.data.Message)
          return error
        } else if (error.code === "ERR_NETWORK") {
          reject(error.response.data.Message)
        } else {
          reject(error.response.data.Message)
          return error
        }
      })
  })
}
