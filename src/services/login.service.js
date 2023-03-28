// ** Interceptors
import axios from "axios"

const { REACT_APP_AUTH_BASE_URL } = process.env

class LoginService {
  // ** LOGIN
  login(payload) {
    return axios
      .post(`${REACT_APP_AUTH_BASE_URL}Auth/login`, payload)
      .then(({ data }) => {
        // debugger
        return Promise.resolve(data)
        // if (data) return Promise.reject(data)
        // else return Promise.resolve(data)
      })
      .catch((error) => Promise.reject(error))
  }

  // ** LOGOUT
  logout() {
    localStorage.removeItem("currentUser")
  }
}

export default new LoginService()
