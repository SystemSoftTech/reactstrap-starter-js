import authService from "@services/login.service"
import { ActionType } from "@store/constant"

export const AuthLogin =
  (user) => (dispatch) => {
    return authService.login(user).then(
      (result) => {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: result
        })

        return Promise.resolve(result)
      },
      (error) => {
        dispatch({
          type: ActionType.LOGIN_FAIL,
          payload: error
        })

        return Promise.reject(error)
      }
    )
  }

export const AuthLogout =
  () => (dispatch) => {
    authService.logout()

    dispatch({
      type: ActionType.LOGOUT
    })
  }
